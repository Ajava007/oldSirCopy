package com.abc.SpringBootSecqurityEx.controller;


import com.abc.SpringBootSecqurityEx.dtos.ApiResponse;
import com.abc.SpringBootSecqurityEx.dtos.EngineeringDtos;
import com.abc.SpringBootSecqurityEx.service.BomService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/engineering/bom")
@Tag(name = "BOM", description = "Bill of Materials rows — multi-level, circular-reference prevented")
public class BomController {
    private final BomService service;
    public BomController(BomService service) { this.service = service; }

    @GetMapping
    public ResponseEntity<ApiResponse<List<EngineeringDtos.BomRowResponse>>> byParent(@RequestParam String parentPartCode) {
        return ResponseEntity.ok(ApiResponse.ok(service.findByParent(parentPartCode), "BOM rows retrieved"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<EngineeringDtos.BomRowResponse>> get(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(service.findById(id), "BOM row retrieved"));
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<EngineeringDtos.BomRowResponse>> create(@Valid @RequestBody EngineeringDtos.BomRowRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(service.create(request), "BOM row created"));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<EngineeringDtos.BomRowResponse>> update(@PathVariable Long id, @Valid @RequestBody EngineeringDtos.BomRowRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(service.update(id, request), "BOM row updated"));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok(ApiResponse.ok(null, "BOM row deleted"));
    }
}
