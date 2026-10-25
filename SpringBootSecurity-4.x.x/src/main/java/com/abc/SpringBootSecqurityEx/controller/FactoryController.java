package com.abc.SpringBootSecqurityEx.controller;


import com.abc.SpringBootSecqurityEx.dtos.ApiResponse;
import com.abc.SpringBootSecqurityEx.dtos.MasterDataDtos;
import com.abc.SpringBootSecqurityEx.service.FactoryService;
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
@RequestMapping("/api/v1/master-data/factories")
@Tag(name = "Factories", description = "Factory master data CRUD")
public class FactoryController {

    private final FactoryService service;

    public FactoryController(FactoryService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<Page<MasterDataDtos.FactoryResponse>>> list(
            @RequestParam(required = false) Long organizationId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(defaultValue = "id") String sort) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sort).ascending());
        return ResponseEntity.ok(ApiResponse.ok(service.findAll(organizationId, pageable), "Factories retrieved"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<MasterDataDtos.FactoryResponse>> get(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(service.findById(id), "Factory retrieved"));
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<MasterDataDtos.FactoryResponse>> create(@Valid @RequestBody MasterDataDtos.FactoryRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(service.create(request), "Factory created"));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<MasterDataDtos.FactoryResponse>> update(@PathVariable Long id,
                                                                              @Valid @RequestBody FactoryRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(service.update(id, request), "Factory updated"));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok(ApiResponse.ok(null, "Factory deleted"));
    }
}
