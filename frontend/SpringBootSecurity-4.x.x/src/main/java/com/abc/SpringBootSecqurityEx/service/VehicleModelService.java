package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.MasterDataDtos;
import com.abc.SpringBootSecqurityEx.entity.VehicleModel;
import com.abc.SpringBootSecqurityEx.repository.VehicleModelRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Service
public class VehicleModelService {

    private static final Set<String> VALID_STATUSES = Set.of("DRAFT", "ACTIVE", "DISCONTINUED");

    private final VehicleModelRepository repository;

    public VehicleModelService(VehicleModelRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public Page<MasterDataDtos.VehicleModelResponse> findAll(Pageable pageable) {
        return repository.findAll(pageable).map(this::toResponse);
    }

    @Transactional(readOnly = true)
    public MasterDataDtos.VehicleModelResponse findById(Long id) {
        return toResponse(getOrThrow(id));
    }

    @Transactional
    public MasterDataDtos.VehicleModelResponse create(MasterDataDtos.VehicleModelRequest req) {
        if (repository.existsByModelCode(req.modelCode())) {
            throw new IllegalStateException("Model code already exists: " + req.modelCode());
        }
        VehicleModel m = VehicleModel.builder()
                .modelCode(req.modelCode()).modelName(req.modelName()).brand(req.brand())
                .vehicleType(req.vehicleType()).segment(req.segment()).modelYear(req.modelYear())
                .fuelType(req.fuelType()).transmission(req.transmission()).basePrice(req.basePrice())
                .status(req.status() != null ? req.status() : "DRAFT")
                .build();
        return toResponse(repository.save(m));
    }

    @Transactional
    public MasterDataDtos.VehicleModelResponse update(Long id, MasterDataDtos.VehicleModelRequest req) {
        VehicleModel m = getOrThrow(id);
        if (req.status() != null && !VALID_STATUSES.contains(req.status())) {
            throw new IllegalStateException("Invalid status. Allowed: DRAFT, ACTIVE, DISCONTINUED");
        }
        m.setModelName(req.modelName());
        m.setBrand(req.brand());
        m.setVehicleType(req.vehicleType());
        m.setSegment(req.segment());
        m.setModelYear(req.modelYear());
        m.setFuelType(req.fuelType());
        m.setTransmission(req.transmission());
        m.setBasePrice(req.basePrice());
        if (req.status() != null) m.setStatus(req.status());
        return toResponse(repository.save(m));
    }

    @Transactional
    public void delete(Long id) {
        if (!repository.existsById(id)) throw new EntityNotFoundException("Vehicle model not found: " + id);
        repository.deleteById(id);
    }

    private VehicleModel getOrThrow(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Vehicle model not found: " + id));
    }

    private MasterDataDtos.VehicleModelResponse toResponse(VehicleModel m) {
        return new MasterDataDtos.VehicleModelResponse(m.getId(), m.getModelCode(), m.getModelName(), m.getBrand(),
                m.getVehicleType(), m.getSegment(), m.getModelYear(), m.getFuelType(),
                m.getTransmission(), m.getBasePrice(), m.getStatus(), m.getCreatedAt(), m.getUpdatedAt());
    }
}
