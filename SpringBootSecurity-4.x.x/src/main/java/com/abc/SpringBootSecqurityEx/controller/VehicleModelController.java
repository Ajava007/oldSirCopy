package com.abc.SpringBootSecqurityEx.controller;


import com.abc.SpringBootSecqurityEx.dtos.ApiResponse;
import com.abc.SpringBootSecqurityEx.dtos.MasterDataDtos;
import com.abc.SpringBootSecqurityEx.service.VehicleModelService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/master-data/vehicle-models")
@Tag(name = "Vehicle Models", description = "Vehicle model master data CRUD")
public class VehicleModelController {

    private final VehicleModelService service;

    public VehicleModelController(VehicleModelService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<Page<MasterDataDtos.VehicleModelResponse>>> list(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(defaultValue = "id") String sort) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sort).ascending());
        return ResponseEntity.ok(ApiResponse.ok(service.findAll(pageable), "Vehicle models retrieved"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<MasterDataDtos.VehicleModelResponse>> get(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(service.findById(id), "Vehicle model retrieved"));
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<MasterDataDtos.VehicleModelResponse>> create(@Valid @RequestBody MasterDataDtos.VehicleModelRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(service.create(request), "Vehicle model created"));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<MasterDataDtos.VehicleModelResponse>> update(@PathVariable Long id,
                                                                                   @Valid @RequestBody MasterDataDtos.VehicleModelRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(service.update(id, request), "Vehicle model updated"));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok(ApiResponse.ok(null, "Vehicle model deleted"));
    }
}
