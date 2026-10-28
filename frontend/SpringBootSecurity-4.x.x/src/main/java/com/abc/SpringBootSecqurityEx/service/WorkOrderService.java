package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.MaintenanceDtos;
import com.abc.SpringBootSecqurityEx.dtos.ProductionDtos;
import com.abc.SpringBootSecqurityEx.entity.BomRow;
import com.abc.SpringBootSecqurityEx.entity.InventoryItem;
import com.abc.SpringBootSecqurityEx.entity.WorkOrder;
import com.abc.SpringBootSecqurityEx.entity.WorkOrderOperation;
import com.abc.SpringBootSecqurityEx.repository.BomRowRepository;
import com.abc.SpringBootSecqurityEx.repository.InventoryItemRepository;
import com.abc.SpringBootSecqurityEx.repository.WorkOrderOperationRepository;
import com.abc.SpringBootSecqurityEx.repository.WorkOrderRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class WorkOrderService {

    // Spec §43: no arbitrary status changes — only these transitions allowed.
    private static final Map<String, Set<String>> ALLOWED = Map.of(
            "DRAFT",       Set.of("RELEASED", "CANCELLED"),
            "RELEASED",    Set.of("IN_PROGRESS", "CANCELLED"),
            "IN_PROGRESS", Set.of("PAUSED", "COMPLETED"),
            "PAUSED",      Set.of("IN_PROGRESS", "CANCELLED"),
            "COMPLETED",   Set.of(),
            "CANCELLED",   Set.of()
    );

    private static final AtomicLong VIN_SEQ = new AtomicLong(1000);

    private final WorkOrderRepository woRepository;
    private final WorkOrderOperationRepository opRepository;
    private final BomRowRepository bomRepository;
    private final InventoryItemRepository inventoryRepository;

    public WorkOrderService(WorkOrderRepository woRepository, WorkOrderOperationRepository opRepository,
                            BomRowRepository bomRepository, InventoryItemRepository inventoryRepository) {
        this.woRepository = woRepository;
        this.opRepository = opRepository;
        this.bomRepository = bomRepository;
        this.inventoryRepository = inventoryRepository;
    }

    @Transactional(readOnly = true)
    public Page<ProductionDtos.WoResponse> findAll(Pageable pageable) {
        return woRepository.findAll(pageable).map(this::toResponse);
    }

    @Transactional(readOnly = true)
    public List<ProductionDtos.WoResponse> activeOnLine(String lineCode) {
        return woRepository.findByLineCodeAndStatus(lineCode, "IN_PROGRESS").stream().map(this::toResponse).toList();
    }

    @Transactional(readOnly = true)
    public ProductionDtos.MaterialCheckResponse checkMaterials(String modelCode, int vehicleQuantity) {
        if (vehicleQuantity < 1) throw new IllegalArgumentException("Vehicle quantity must be at least one.");
        Map<String, BigDecimal> requirements = new HashMap<>();
        expandBom(modelCode, BigDecimal.valueOf(vehicleQuantity), new HashSet<>(), requirements);
        List<ProductionDtos.MaterialLine> lines = requirements.entrySet().stream().sorted(Map.Entry.comparingByKey())
                .map(entry -> {
                    BigDecimal available = inventoryRepository.findByPartCode(entry.getKey()).stream()
                            .filter(item -> "AVAILABLE".equals(item.getStatus()))
                            .map(item -> item.getOnHand().subtract(item.getReserved()))
                            .reduce(BigDecimal.ZERO, BigDecimal::add);
                    return new ProductionDtos.MaterialLine(entry.getKey(), entry.getValue(), available,
                            available.compareTo(entry.getValue()) >= 0);
                }).toList();
        boolean sufficient = !lines.isEmpty() && lines.stream().allMatch(ProductionDtos.MaterialLine::sufficient);
        return new ProductionDtos.MaterialCheckResponse(modelCode, vehicleQuantity, sufficient, lines);
    }

    private void expandBom(String parentCode, BigDecimal multiplier, Set<String> path, Map<String, BigDecimal> requirements) {
        if (!path.add(parentCode)) throw new IllegalStateException("Circular BOM detected at part " + parentCode);
        List<BomRow> rows = bomRepository.findByParentPartCodeOrderByLevelAscComponentPartCodeAsc(parentCode);
        for (BomRow row : rows) {
            if (row.isOptional()) continue;
            BigDecimal scrap = row.getScrapFactor() == null ? BigDecimal.ZERO : row.getScrapFactor();
            BigDecimal required = multiplier.multiply(row.getQuantity()).multiply(BigDecimal.ONE.add(scrap));
            List<BomRow> children = bomRepository.findByParentPartCodeOrderByLevelAscComponentPartCodeAsc(row.getComponentPartCode());
            if (children.isEmpty()) {
                requirements.merge(row.getComponentPartCode(), required, BigDecimal::add);
            } else {
                expandBom(row.getComponentPartCode(), required, new HashSet<>(path), requirements);
            }
        }
    }

    @Transactional
    public ProductionDtos.WoResponse create(ProductionDtos.WoRequest req) {
        if (woRepository.existsByWoNumber(req.woNumber())) {
            throw new IllegalStateException("Work order number already exists: " + req.woNumber());
        }
        ProductionDtos.MaterialCheckResponse materials = checkMaterials(req.modelCode(), req.targetQuantity());
        if (!materials.sufficient()) {
            throw new IllegalStateException(materials.materials().isEmpty()
                    ? "No bill of materials is configured for model " + req.modelCode()
                    : "Insufficient stock for one or more required parts.");
        }
        WorkOrder wo = WorkOrder.builder()
                .woNumber(req.woNumber()).planNumber(req.planNumber()).modelCode(req.modelCode())
                .lineCode(req.lineCode()).targetQuantity(req.targetQuantity())
                .producedQuantity(0).rejectedQuantity(0).status("DRAFT").build();
        wo = woRepository.save(wo);
        if (req.operations() != null) {
            for (ProductionDtos.WoOpRequest opReq : req.operations()) {
                opRepository.save(WorkOrderOperation.builder()
                        .woId(wo.getId()).operationNumber(opReq.operationNumber())
                        .operationName(opReq.operationName()).workCenter(opReq.workCenter()).status("PENDING").build());
            }
        }
        return toResponse(wo);
    }

    @Transactional
    public ProductionDtos.WoResponse transition(Long id, MaintenanceDtos.TransitionRequest req)
    {
        WorkOrder wo = woRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Work order not found: " + id));
        String target = req.targetStatus().toUpperCase();
        Set<String> allowed = ALLOWED.getOrDefault(wo.getStatus(), Set.of());
        if (!allowed.contains(target)) {
            throw new IllegalStateException("Invalid WO transition: " + wo.getStatus() + " → " + target
                    + ". Allowed: " + allowed);
        }
        LocalDateTime now = LocalDateTime.now();
        wo.setStatus(target);
        if ("RELEASED".equals(target)) wo.setReleasedAt(now);
        if ("IN_PROGRESS".equals(target) && wo.getStartedAt() == null) wo.setStartedAt(now);
        if (req.producedQuantity() != null) wo.setProducedQuantity(req.producedQuantity());
        if (req.rejectedQuantity() != null) wo.setRejectedQuantity(req.rejectedQuantity());
        if ("COMPLETED".equals(target)) {
            wo.setCompletedAt(now);
            // Generate VIN range for the produced units (demo prefix VX)
            long from = VIN_SEQ.getAndAdd(wo.getTargetQuantity());
            wo.setGeneratedVinFrom(String.format("VX%014d", from));
            wo.setGeneratedVinTo(String.format("VX%014d", from + wo.getTargetQuantity() - 1));
        }
        return toResponse(woRepository.save(wo));
    }

    private ProductionDtos.WoResponse toResponse(WorkOrder wo) {
        List<ProductionDtos.WoOpResponse> ops = opRepository.findByWoIdOrderByOperationNumberAsc(wo.getId()).stream()
                .map(o -> new ProductionDtos.WoOpResponse(o.getId(), o.getOperationNumber(), o.getOperationName(), o.getWorkCenter(),
                        o.getStatus(), o.getOperatorName(), o.getStartedAt(), o.getCompletedAt()))
                .toList();
        return new ProductionDtos.WoResponse(wo.getId(), wo.getWoNumber(), wo.getPlanNumber(), wo.getModelCode(), wo.getLineCode(),
                wo.getTargetQuantity(), wo.getProducedQuantity(), wo.getRejectedQuantity(), wo.getStatus(),
                wo.getReleasedAt(), wo.getStartedAt(), wo.getCompletedAt(),
                wo.getGeneratedVinFrom(), wo.getGeneratedVinTo(), ops, wo.getCreatedAt());
    }
}
