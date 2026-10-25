package com.abc.SpringBootSecqurityEx.controller;


import com.abc.SpringBootSecqurityEx.dtos.ApiResponse;
import com.abc.SpringBootSecqurityEx.dtos.EngineeringDtos;
import com.abc.SpringBootSecqurityEx.service.PartService;
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
@RequestMapping("/api/v1/engineering/parts")
@Tag(name = "Parts", description = "Part master data CRUD")
public class PartController {
    private final PartService service;
    public PartController(PartService service) { this.service = service; }

    @GetMapping
    public ResponseEntity<ApiResponse<Page<EngineeringDtos.PartResponse>>> list(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(defaultValue = "partCode") String sort) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sort).ascending());
        return ResponseEntity.ok(ApiResponse.ok(service.findAll(pageable), "Parts retrieved"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<EngineeringDtos.PartResponse>> get(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(service.findById(id), "Part retrieved"));
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<EngineeringDtos.PartResponse>> create(@Valid @RequestBody EngineeringDtos.PartRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(service.create(request), "Part created"));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<EngineeringDtos.PartResponse>> update(@PathVariable Long id, @Valid @RequestBody PartRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(service.update(id, request), "Part updated"));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok(ApiResponse.ok(null, "Part deleted"));
    }
}
