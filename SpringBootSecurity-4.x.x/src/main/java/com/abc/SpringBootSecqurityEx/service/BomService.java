package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.EngineeringDtos;
import com.abc.SpringBootSecqurityEx.entity.BomRow;
import com.abc.SpringBootSecqurityEx.repository.BomRowRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

@Service
public class BomService {
    private final BomRowRepository repository;

    public BomService(BomRowRepository repository) { this.repository = repository; }

    @Transactional(readOnly = true)
    public List<EngineeringDtos.BomRowResponse> findByParent(String parentPartCode) {
        return repository.findByParentPartCodeOrderByLevelAscComponentPartCodeAsc(parentPartCode)
                .stream().map(this::toResponse).toList();
    }

    @Transactional(readOnly = true)
    public EngineeringDtos.BomRowResponse findById(Long id) { return toResponse(getOrThrow(id)); }

    @Transactional
    public EngineeringDtos.BomRowResponse create(EngineeringDtos.BomRowRequest req) {
        // Spec: circular BOM is forbidden — a part cannot consume itself.
        if (req.parentPartCode().equalsIgnoreCase(req.componentPartCode())) {
            throw new IllegalStateException("Circular BOM not allowed: parent cannot equal component.");
        }
        if (repository.existsByParentPartCodeAndComponentPartCode(req.parentPartCode(), req.componentPartCode())) {
            throw new IllegalStateException("BOM row already exists for " + req.parentPartCode() + " / " + req.componentPartCode());
        }
        BomRow row = BomRow.builder()
                .parentPartCode(req.parentPartCode()).componentPartCode(req.componentPartCode())
                .quantity(req.quantity()).scrapFactor(req.scrapFactor() != null ? req.scrapFactor() : BigDecimal.ZERO)
                .optional(req.optional() != null ? req.optional() : false)
                .level(req.level() != null ? req.level() : 1)
                .effectiveFrom(req.effectiveFrom()).effectiveTo(req.effectiveTo()).remark(req.remark())
                .build();
        return toResponse(repository.save(row));
    }

    @Transactional
    public EngineeringDtos.BomRowResponse update(Long id, EngineeringDtos.BomRowRequest req) {
        BomRow row = getOrThrow(id);
        row.setQuantity(req.quantity());
        if (req.scrapFactor() != null) row.setScrapFactor(req.scrapFactor());
        if (req.optional() != null) row.setOptional(req.optional());
        if (req.level() != null) row.setLevel(req.level());
        row.setEffectiveFrom(req.effectiveFrom());
        row.setEffectiveTo(req.effectiveTo());
        row.setRemark(req.remark());
        return toResponse(repository.save(row));
    }

    @Transactional
    public void delete(Long id) {
        if (!repository.existsById(id)) throw new EntityNotFoundException("BOM row not found: " + id);
        repository.deleteById(id);
    }

    private BomRow getOrThrow(Long id) {
        return repository.findById(id).orElseThrow(() -> new EntityNotFoundException("BOM row not found: " + id));
    }

    private EngineeringDtos.BomRowResponse toResponse(BomRow r) {
        return new EngineeringDtos.BomRowResponse(r.getId(), r.getParentPartCode(), r.getComponentPartCode(), r.getQuantity(),
                r.getScrapFactor(), r.isOptional(), r.getLevel(), r.getEffectiveFrom(), r.getEffectiveTo(),
                r.getRemark(), r.getCreatedAt(), r.getUpdatedAt());
    }
}
