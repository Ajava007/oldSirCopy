package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.EngineeringDtos;
import com.abc.SpringBootSecqurityEx.entity.RoutingOperation;
import com.abc.SpringBootSecqurityEx.repository.RoutingOperationRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class RoutingService {
    private final RoutingOperationRepository repository;

    public RoutingService(RoutingOperationRepository repository) { this.repository = repository; }

    @Transactional(readOnly = true)
    public List<EngineeringDtos.RoutingOperationResponse> findByModel(String modelCode) {
        return repository.findByModelCodeOrderByOperationNumberAsc(modelCode)
                .stream().map(this::toResponse).toList();
    }

    @Transactional(readOnly = true)
    public EngineeringDtos.RoutingOperationResponse findById(Long id) { return toResponse(getOrThrow(id)); }

    @Transactional
    public EngineeringDtos.RoutingOperationResponse create(EngineeringDtos.RoutingOperationRequest req) {
        if (repository.existsByModelCodeAndOperationNumber(req.modelCode(), req.operationNumber())) {
            throw new IllegalStateException("Operation " + req.operationNumber() + " already exists for model " + req.modelCode());
        }
        RoutingOperation op = RoutingOperation.builder()
                .modelCode(req.modelCode()).operationNumber(req.operationNumber())
                .operationName(req.operationName()).workCenter(req.workCenter())
                .setupTimeSec(req.setupTimeSec() != null ? req.setupTimeSec() : 0)
                .cycleTimeSec(req.cycleTimeSec()).instructions(req.instructions())
                .build();
        return toResponse(repository.save(op));
    }

    @Transactional
    public EngineeringDtos.RoutingOperationResponse update(Long id, EngineeringDtos.RoutingOperationRequest req) {
        RoutingOperation op = getOrThrow(id);
        op.setOperationName(req.operationName());
        op.setWorkCenter(req.workCenter());
        if (req.setupTimeSec() != null) op.setSetupTimeSec(req.setupTimeSec());
        op.setCycleTimeSec(req.cycleTimeSec());
        op.setInstructions(req.instructions());
        return toResponse(repository.save(op));
    }

    @Transactional
    public void delete(Long id) {
        if (!repository.existsById(id)) throw new EntityNotFoundException("Routing operation not found: " + id);
        repository.deleteById(id);
    }

    private RoutingOperation getOrThrow(Long id) {
        return repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Routing operation not found: " + id));
    }

    private EngineeringDtos.RoutingOperationResponse toResponse(RoutingOperation o) {
        return new EngineeringDtos.RoutingOperationResponse(o.getId(), o.getModelCode(), o.getOperationNumber(), o.getOperationName(),
                o.getWorkCenter(), o.getSetupTimeSec(), o.getCycleTimeSec(), o.getInstructions(),
                o.getCreatedAt(), o.getUpdatedAt());
    }
}
