package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.EngineeringDtos;
import com.abc.SpringBootSecqurityEx.entity.Part;
import com.abc.SpringBootSecqurityEx.repository.PartRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PartService {
    private final PartRepository repository;

    public PartService(PartRepository repository) { this.repository = repository; }

    @Transactional(readOnly = true)
    public Page<EngineeringDtos.PartResponse> findAll(Pageable pageable) {
        return repository.findAll(pageable).map(this::toResponse);
    }

    @Transactional(readOnly = true)
    public EngineeringDtos.PartResponse findById(Long id) { return toResponse(getOrThrow(id)); }

    @Transactional
    public EngineeringDtos.PartResponse create(EngineeringDtos.PartRequest req) {
        if (repository.existsByPartCode(req.partCode())) {
            throw new IllegalStateException("Part code already exists: " + req.partCode());
        }
        Part part = Part.builder()
                .partCode(req.partCode()).name(req.name()).description(req.description())
                .uom(req.uom()).category(req.category() != null ? req.category() : "PURCHASED")
                .standardCost(req.standardCost()).revision(req.revision())
                .status(req.status() != null ? req.status() : "DRAFT")
                .build();
        return toResponse(repository.save(part));
    }

    @Transactional
    public EngineeringDtos.PartResponse update(Long id, EngineeringDtos.PartRequest req) {
        Part part = getOrThrow(id);
        part.setName(req.name());
        part.setDescription(req.description());
        part.setUom(req.uom());
        if (req.category() != null) part.setCategory(req.category());
        part.setStandardCost(req.standardCost());
        part.setRevision(req.revision());
        if (req.status() != null) part.setStatus(req.status());
        return toResponse(repository.save(part));
    }

    @Transactional
    public void delete(Long id) {
        if (!repository.existsById(id)) throw new EntityNotFoundException("Part not found: " + id);
        repository.deleteById(id);
    }

    private Part getOrThrow(Long id) {
        return repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Part not found: " + id));
    }

    private EngineeringDtos.PartResponse toResponse(Part p) {
        return new EngineeringDtos.PartResponse(p.getId(), p.getPartCode(), p.getName(), p.getDescription(), p.getUom(),
                p.getCategory(), p.getStandardCost(), p.getRevision(), p.getStatus(),
                p.getCreatedAt(), p.getUpdatedAt());
    }
}
