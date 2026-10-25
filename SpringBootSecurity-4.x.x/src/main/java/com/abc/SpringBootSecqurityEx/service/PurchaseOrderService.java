package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.SupplyChainDtos;
import com.abc.SpringBootSecqurityEx.entity.PurchaseOrder;
import com.abc.SpringBootSecqurityEx.entity.PurchaseOrderItem;
import com.abc.SpringBootSecqurityEx.repository.PurchaseOrderRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Service
public class PurchaseOrderService {

    // Spec: no arbitrary status changes — only these transitions allowed.
    private static final Map<String, Set<String>> ALLOWED_TRANSITIONS = Map.of(
            "DRAFT",     Set.of("SUBMITTED", "CANCELLED"),
            "SUBMITTED", Set.of("APPROVED", "CANCELLED"),
            "APPROVED",  Set.of("ISSUED", "CANCELLED"),
            "ISSUED",    Set.of("RECEIVED"),
            "RECEIVED",  Set.of("CLOSED"),
            "CANCELLED", Set.of(),
            "CLOSED",    Set.of()
    );

    private final PurchaseOrderRepository repository;

    public PurchaseOrderService(PurchaseOrderRepository repository) { this.repository = repository; }

    @Transactional(readOnly = true)
    public Page<SupplyChainDtos.PurchaseOrderResponse> findAll(Pageable pageable) {
        return repository.findAll(pageable).map(this::toResponse);
    }

    @Transactional(readOnly = true)
    public SupplyChainDtos.PurchaseOrderResponse findById(Long id) { return toResponse(getOrThrow(id)); }

    @Transactional
    public SupplyChainDtos.PurchaseOrderResponse create(SupplyChainDtos.PurchaseOrderRequest req) {
        if (repository.existsByPoNumber(req.poNumber())) {
            throw new IllegalStateException("PO number already exists: " + req.poNumber());
        }
        PurchaseOrder po = PurchaseOrder.builder()
                .poNumber(req.poNumber()).supplierCode(req.supplierCode()).orderDate(req.orderDate())
                .currency(req.currency() != null ? req.currency() : "USD")
                .requestedBy(req.requestedBy()).notes(req.notes()).status("DRAFT")
                .build();
        req.items().forEach(item -> po.addItem(PurchaseOrderItem.builder()
                .partCode(item.partCode()).description(item.description())
                .quantity(item.quantity()).unitPrice(item.unitPrice()).build()));
        return toResponse(repository.save(po));
    }

    @Transactional
    public SupplyChainDtos.PurchaseOrderResponse update(Long id, SupplyChainDtos.PurchaseOrderRequest req) {
        PurchaseOrder po = getOrThrow(id);
        if (!"DRAFT".equals(po.getStatus())) {
            throw new IllegalStateException("Only DRAFT purchase orders can be edited. Current status: " + po.getStatus());
        }
        po.setSupplierCode(req.supplierCode());
        po.setOrderDate(req.orderDate());
        if (req.currency() != null) po.setCurrency(req.currency());
        po.setRequestedBy(req.requestedBy());
        po.setNotes(req.notes());
        po.getItems().clear();
        req.items().forEach(item -> po.addItem(PurchaseOrderItem.builder()
                .partCode(item.partCode()).description(item.description())
                .quantity(item.quantity()).unitPrice(item.unitPrice()).build()));
        return toResponse(repository.save(po));
    }

    @Transactional
    public SupplyChainDtos.PurchaseOrderResponse transition(Long id, SupplyChainDtos.StatusTransitionRequest req) {
        PurchaseOrder po = getOrThrow(id);
        String target = req.targetStatus().toUpperCase();
        Set<String> allowed = ALLOWED_TRANSITIONS.getOrDefault(po.getStatus(), Set.of());
        if (!allowed.contains(target)) {
            throw new IllegalStateException("Invalid status transition: " + po.getStatus() + " → " + target
                    + ". Allowed: " + allowed);
        }
        po.setStatus(target);
        if ("APPROVED".equals(target)) po.setApprovedBy(req.actor());
        return toResponse(repository.save(po));
    }

    @Transactional
    public void delete(Long id) {
        PurchaseOrder po = getOrThrow(id);
        if (!"DRAFT".equals(po.getStatus()) && !"CANCELLED".equals(po.getStatus())) {
            throw new IllegalStateException("Only DRAFT or CANCELLED purchase orders can be deleted. Current: " + po.getStatus());
        }
        repository.deleteById(id);
    }

    private PurchaseOrder getOrThrow(Long id) {
        return repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Purchase order not found: " + id));
    }

    private SupplyChainDtos.PurchaseOrderResponse toResponse(PurchaseOrder po) {
        List<SupplyChainDtos.PoItemResponse> items = po.getItems().stream()
                .map(i -> new SupplyChainDtos.PoItemResponse(i.getId(), i.getPartCode(), i.getDescription(), i.getQuantity(),
                        i.getUnitPrice(), i.getUnitPrice().multiply(BigDecimal.valueOf(i.getQuantity()))))
                .toList();
        return new SupplyChainDtos.PurchaseOrderResponse(po.getId(), po.getPoNumber(), po.getSupplierCode(), po.getOrderDate(),
                po.getStatus(), po.getTotalAmount(), po.getCurrency(), po.getRequestedBy(), po.getApprovedBy(),
                po.getNotes(), items, po.getCreatedAt(), po.getUpdatedAt());
    }
}
