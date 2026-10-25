package com.abc.SpringBootSecqurityEx.controller;


import com.abc.SpringBootSecqurityEx.dtos.ApiResponse;
import com.abc.SpringBootSecqurityEx.dtos.MasterDataDtos;
import com.abc.SpringBootSecqurityEx.service.OrganizationService;
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
@RequestMapping("/api/v1/master-data/organizations")
@Tag(name = "Organizations", description = "Organization master data CRUD")
public class OrganizationController {

    private final OrganizationService service;

    public OrganizationController(OrganizationService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<Page<MasterDataDtos.OrganizationResponse>>> list(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(defaultValue = "id") String sort) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sort).ascending());
        return ResponseEntity.ok(ApiResponse.ok(service.findAll(pageable), "Organizations retrieved"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<MasterDataDtos.OrganizationResponse>> get(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(service.findById(id), "Organization retrieved"));
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<MasterDataDtos.OrganizationResponse>> create(@Valid @RequestBody MasterDataDtos.OrganizationRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(service.create(request), "Organization created"));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<MasterDataDtos.OrganizationResponse>> update(@PathVariable Long id,
                                                                                   @Valid @RequestBody MasterDataDtos.OrganizationRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(service.update(id, request), "Organization updated"));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok(ApiResponse.ok(null, "Organization deleted"));
    }
}
