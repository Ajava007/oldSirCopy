package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.ProductionDtos;
import com.abc.SpringBootSecqurityEx.entity.ProductionPlan;
import com.abc.SpringBootSecqurityEx.repository.ProductionPlanRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductionPlanService {
    private final ProductionPlanRepository repository;

    public ProductionPlanService(ProductionPlanRepository repository) { this.repository = repository; }

    @Transactional(readOnly = true)
    public Page<ProductionDtos.PlanResponse> findAll(Pageable pageable) {
        return repository.findAll(pageable).map(this::toResponse);
    }

    @Transactional
    public ProductionDtos.PlanResponse create(ProductionDtos.PlanRequest req) {
        if (repository.existsByPlanNumber(req.planNumber())) {
            throw new IllegalStateException("Plan number already exists: " + req.planNumber());
        }
        if (req.plannedFinish().isBefore(req.plannedStart())) {
            throw new IllegalStateException("Planned finish cannot be before planned start.");
        }
        ProductionPlan p = ProductionPlan.builder()
                .planNumber(req.planNumber()).factoryCode(req.factoryCode()).modelCode(req.modelCode())
                .variantCode(req.variantCode()).quantity(req.quantity()).lineCode(req.lineCode())
                .plannedStart(req.plannedStart()).plannedFinish(req.plannedFinish())
                .status(req.status() != null ? req.status() : "PLANNED").build();
        return toResponse(repository.save(p));
    }

    @Transactional
    public void delete(Long id) {
        if (!repository.existsById(id)) throw new EntityNotFoundException("Plan not found: " + id);
        repository.deleteById(id);
    }

    private ProductionDtos.PlanResponse toResponse(ProductionPlan p) {
        return new ProductionDtos.PlanResponse(p.getId(), p.getPlanNumber(), p.getFactoryCode(), p.getModelCode(),
                p.getVariantCode(), p.getQuantity(), p.getLineCode(), p.getPlannedStart(), p.getPlannedFinish(),
                p.getStatus(), p.getCreatedAt());
    }
}
