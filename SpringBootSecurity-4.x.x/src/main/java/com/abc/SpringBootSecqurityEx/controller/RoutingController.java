package com.abc.SpringBootSecqurityEx.controller;


import com.abc.SpringBootSecqurityEx.dtos.ApiResponse;
import com.abc.SpringBootSecqurityEx.dtos.EngineeringDtos;
import com.abc.SpringBootSecqurityEx.service.RoutingService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/engineering/routing")
@Tag(name = "Routing", description = "Manufacturing routing operations per model")
public class RoutingController {
    private final RoutingService service;
    public RoutingController(RoutingService service) { this.service = service; }

    @GetMapping
    public ResponseEntity<ApiResponse<List<EngineeringDtos.RoutingOperationResponse>>> byModel(@RequestParam String modelCode) {
        return ResponseEntity.ok(ApiResponse.ok(service.findByModel(modelCode), "Routing operations retrieved"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<EngineeringDtos.RoutingOperationResponse>> get(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(service.findById(id), "Routing operation retrieved"));
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<EngineeringDtos.RoutingOperationResponse>> create(@Valid @RequestBody EngineeringDtos.RoutingOperationRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(service.create(request), "Routing operation created"));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<EngineeringDtos.RoutingOperationResponse>> update(@PathVariable Long id, @Valid @RequestBody EngineeringDtos.RoutingOperationRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(service.update(id, request), "Routing operation updated"));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok(ApiResponse.ok(null, "Routing operation deleted"));
    }
}
