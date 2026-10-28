package com.abc.SpringBootSecqurityEx.controller;


import com.abc.SpringBootSecqurityEx.dtos.ApiResponse;
import com.abc.SpringBootSecqurityEx.dtos.SupplyChainDtos;
import com.abc.SpringBootSecqurityEx.service.SupplierService;
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
@RequestMapping("/api/v1/supply-chain/suppliers")
@Tag(name = "Suppliers", description = "Supplier master data CRUD")
public class SupplierController {
    private final SupplierService service;
    public SupplierController(SupplierService service) { this.service = service; }

    @GetMapping
    public ResponseEntity<ApiResponse<Page<SupplyChainDtos.SupplierResponse>>> list(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(defaultValue = "code") String sort) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sort).ascending());
        return ResponseEntity.ok(ApiResponse.ok(service.findAll(pageable), "Suppliers retrieved"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<SupplyChainDtos.SupplierResponse>> get(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(service.findById(id), "Supplier retrieved"));
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<SupplyChainDtos.SupplierResponse>> create(@Valid @RequestBody SupplyChainDtos.SupplierRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(service.create(request), "Supplier created"));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<SupplyChainDtos.SupplierResponse>> update(@PathVariable Long id, @Valid @RequestBody SupplyChainDtos.SupplierRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(service.update(id, request), "Supplier updated"));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok(ApiResponse.ok(null, "Supplier deleted"));
    }
}
