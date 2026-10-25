package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.MaintenanceDtos;
import com.abc.SpringBootSecqurityEx.entity.MaintenanceWorkOrder;
import com.abc.SpringBootSecqurityEx.repository.MaintenanceWorkOrderRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Map;
import java.util.Set;

@Service
public class MaintenanceOrderService {

    private static final Map<String, Set<String>> ALLOWED = Map.of(
            "DRAFT",       Set.of("SCHEDULED", "CANCELLED"),
            "SCHEDULED",   Set.of("IN_PROGRESS", "CANCELLED"),
            "IN_PROGRESS", Set.of("COMPLETED"),
            "COMPLETED",   Set.of("VERIFIED"),
            "VERIFIED",    Set.of(),
            "CANCELLED",   Set.of()
    );

    private final MaintenanceWorkOrderRepository repository;

    public MaintenanceOrderService(MaintenanceWorkOrderRepository repository) { this.repository = repository; }

    @Transactional(readOnly = true)
    public Page<MaintenanceDtos.MwoResponse> findAll(Pageable pageable) {
        return repository.findAll(pageable).map(this::toResponse);
    }

    @Transactional
    public MaintenanceDtos.MwoResponse create(MaintenanceDtos.MwoRequest req) {
        if (repository.existsByMwoNumber(req.mwoNumber())) {
            throw new IllegalStateException("MWO number already exists: " + req.mwoNumber());
        }
        MaintenanceWorkOrder mwo = MaintenanceWorkOrder.builder()
                .mwoNumber(req.mwoNumber()).assetCode(req.assetCode())
                .type(req.type() != null ? req.type().toUpperCase() : "CORRECTIVE")
                .problem(req.problem()).technician(req.technician())
                .plannedDurationMin(req.plannedDurationMin()).scheduledStart(req.scheduledStart())
                .status("DRAFT").build();
        return toResponse(repository.save(mwo));
    }

    @Transactional
    public MaintenanceDtos.MwoResponse transition(Long id, MaintenanceDtos.TransitionRequest req) {
        MaintenanceWorkOrder mwo = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Maintenance WO not found: " + id));
        String target = req.targetStatus().toUpperCase();
        Set<String> allowed = ALLOWED.getOrDefault(mwo.getStatus(), Set.of());
        if (!allowed.contains(target)) {
            throw new IllegalStateException("Invalid MWO transition: " + mwo.getStatus() + " → " + target
                    + ". Allowed: " + allowed);
        }
        LocalDateTime now = LocalDateTime.now();
        mwo.setStatus(target);
        if ("IN_PROGRESS".equals(target) && mwo.getStartedAt() == null) mwo.setStartedAt(now);
        if ("COMPLETED".equals(target)) {
            mwo.setCompletedAt(now);
            if (mwo.getStartedAt() != null) {
                mwo.setActualDurationMin((int) ChronoUnit.MINUTES.between(mwo.getStartedAt(), now));
            } else if (req.actualDurationMin() != null) {
                mwo.setActualDurationMin(req.actualDurationMin());
            }
        }
        return toResponse(repository.save(mwo));
    }

    private MaintenanceDtos.MwoResponse toResponse(MaintenanceWorkOrder m) {
        return new MaintenanceDtos.MwoResponse(m.getId(), m.getMwoNumber(), m.getAssetCode(), m.getType(), m.getStatus(),
                m.getProblem(), m.getTechnician(), m.getPlannedDurationMin(), m.getActualDurationMin(),
                m.getScheduledStart(), m.getStartedAt(), m.getCompletedAt(), m.getCreatedAt());
    }
}
