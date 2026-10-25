package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.SupplyChainDtos;
import com.abc.SpringBootSecqurityEx.entity.Supplier;
import com.abc.SpringBootSecqurityEx.repository.SupplierRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SupplierService {
    private final SupplierRepository repository;

    public SupplierService(SupplierRepository repository) { this.repository = repository; }

    @Transactional(readOnly = true)
    public Page<SupplyChainDtos.SupplierResponse> findAll(Pageable pageable) {
        return repository.findAll(pageable).map(this::toResponse);
    }

    @Transactional(readOnly = true)
    public SupplyChainDtos.SupplierResponse findById(Long id) { return toResponse(getOrThrow(id)); }

    @Transactional
    public SupplyChainDtos.SupplierResponse create(SupplyChainDtos.SupplierRequest req) {
        if (repository.existsByCode(req.code())) {
            throw new IllegalStateException("Supplier code already exists: " + req.code());
        }
        Supplier s = Supplier.builder()
                .code(req.code()).company(req.company()).category(req.category())
                .country(req.country()).rating(req.rating()).contactEmail(req.contactEmail())
                .phone(req.phone()).status(req.status() != null ? req.status() : "ACTIVE")
                .build();
        return toResponse(repository.save(s));
    }

    @Transactional
    public SupplyChainDtos.SupplierResponse update(Long id, SupplyChainDtos.SupplierRequest req) {
        Supplier s = getOrThrow(id);
        s.setCompany(req.company());
        s.setCategory(req.category());
        s.setCountry(req.country());
        s.setRating(req.rating());
        s.setContactEmail(req.contactEmail());
        s.setPhone(req.phone());
        if (req.status() != null) s.setStatus(req.status());
        return toResponse(repository.save(s));
    }

    @Transactional
    public void delete(Long id) {
        if (!repository.existsById(id)) throw new EntityNotFoundException("Supplier not found: " + id);
        repository.deleteById(id);
    }

    private Supplier getOrThrow(Long id) {
        return repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Supplier not found: " + id));
    }

    private SupplyChainDtos.SupplierResponse toResponse(Supplier s) {
        return new SupplyChainDtos.SupplierResponse(s.getId(), s.getCode(), s.getCompany(), s.getCategory(), s.getCountry(),
                s.getRating(), s.getContactEmail(), s.getPhone(), s.getStatus(),
                s.getCreatedAt(), s.getUpdatedAt());
    }
}
