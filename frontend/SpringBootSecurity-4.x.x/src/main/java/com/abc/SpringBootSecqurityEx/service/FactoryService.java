package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.MasterDataDtos;
import com.abc.SpringBootSecqurityEx.entity.Factory;
import com.abc.SpringBootSecqurityEx.repository.FactoryRepository;
import com.abc.SpringBootSecqurityEx.repository.OrganizationRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class FactoryService {

    private final FactoryRepository repository;
    private final OrganizationRepository organizationRepository;

    public FactoryService(FactoryRepository repository, OrganizationRepository organizationRepository) {
        this.repository = repository;
        this.organizationRepository = organizationRepository;
    }

    @Transactional(readOnly = true)
    public Page<MasterDataDtos.FactoryResponse> findAll(Long organizationId, Pageable pageable) {
        if (organizationId != null) {
            return repository.findByOrganizationId(organizationId, pageable).map(this::toResponse);
        }
        return repository.findAll(pageable).map(this::toResponse);
    }

    @Transactional(readOnly = true)
    public MasterDataDtos.FactoryResponse findById(Long id) {
        return toResponse(getOrThrow(id));
    }

    @Transactional
    public MasterDataDtos.FactoryResponse create(MasterDataDtos.FactoryRequest req) {
        if (!organizationRepository.existsById(req.organizationId())) {
            throw new EntityNotFoundException("Organization not found: " + req.organizationId());
        }
        if (repository.existsByOrganizationIdAndCode(req.organizationId(), req.code())) {
            throw new IllegalStateException("Factory code already exists in this organization: " + req.code());
        }
        Factory f = Factory.builder()
                .organizationId(req.organizationId()).code(req.code()).name(req.name())
                .location(req.location()).timeZone(req.timeZone())
                .status(req.status() != null ? req.status() : "ACTIVE")
                .build();
        return toResponse(repository.save(f));
    }

    @Transactional
    public MasterDataDtos.FactoryResponse update(Long id, MasterDataDtos.FactoryRequest req) {
        Factory f = getOrThrow(id);
        f.setName(req.name());
        f.setLocation(req.location());
        f.setTimeZone(req.timeZone());
        if (req.status() != null) f.setStatus(req.status());
        return toResponse(repository.save(f));
    }

    @Transactional
    public void delete(Long id) {
        if (!repository.existsById(id)) throw new EntityNotFoundException("Factory not found: " + id);
        repository.deleteById(id);
    }

    private Factory getOrThrow(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Factory not found: " + id));
    }

    private MasterDataDtos.FactoryResponse toResponse(Factory f) {
        return new MasterDataDtos.FactoryResponse(f.getId(), f.getOrganizationId(), f.getCode(), f.getName(),
                f.getLocation(), f.getTimeZone(), f.getStatus(), f.getCreatedAt(), f.getUpdatedAt());
    }
}
