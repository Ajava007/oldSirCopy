package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.MasterDataDtos;
import com.abc.SpringBootSecqurityEx.entity.Organization;
import com.abc.SpringBootSecqurityEx.repository.OrganizationRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OrganizationService {

    private final OrganizationRepository repository;

    public OrganizationService(OrganizationRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public Page<MasterDataDtos.OrganizationResponse> findAll(Pageable pageable) {
        return repository.findAll(pageable).map(this::toResponse);
    }

    @Transactional(readOnly = true)
    public MasterDataDtos.OrganizationResponse findById(Long id) {
        return toResponse(getOrThrow(id));
    }

    @Transactional
    public MasterDataDtos.OrganizationResponse create(MasterDataDtos.OrganizationRequest req) {
        if (repository.existsByCode(req.code())) {
            throw new IllegalStateException("Organization code already exists: " + req.code());
        }
        Organization org = Organization.builder()
                .code(req.code()).name(req.name()).country(req.country())
                .address(req.address()).status(req.status() != null ? req.status() : "ACTIVE")
                .build();
        return toResponse(repository.save(org));
    }

    @Transactional
    public MasterDataDtos.OrganizationResponse update(Long id, MasterDataDtos.OrganizationRequest req) {
        Organization org = getOrThrow(id);
        org.setName(req.name());
        org.setCountry(req.country());
        org.setAddress(req.address());
        if (req.status() != null) org.setStatus(req.status());
        return toResponse(repository.save(org));
    }

    @Transactional
    public void delete(Long id) {
        if (!repository.existsById(id)) throw new EntityNotFoundException("Organization not found: " + id);
        repository.deleteById(id);
    }

    private Organization getOrThrow(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Organization not found: " + id));
    }

    private MasterDataDtos.OrganizationResponse toResponse(Organization o) {
        return new MasterDataDtos.OrganizationResponse(o.getId(), o.getCode(), o.getName(), o.getCountry(),
                o.getAddress(), o.getStatus(), o.getCreatedAt(), o.getUpdatedAt());
    }
}
