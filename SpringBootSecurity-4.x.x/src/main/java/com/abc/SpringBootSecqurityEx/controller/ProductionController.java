package com.abc.SpringBootSecqurityEx.controller;


import com.abc.SpringBootSecqurityEx.dtos.ApiResponse;
import com.abc.SpringBootSecqurityEx.dtos.MaintenanceDtos;
import com.abc.SpringBootSecqurityEx.dtos.ProductionDtos;
import com.abc.SpringBootSecqurityEx.service.ProductionPlanService;
import com.abc.SpringBootSecqurityEx.service.WorkOrderService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/production")
@Tag(name = "Production", description = "Production plans, work orders with state machine, shop-floor active board")
public class ProductionController {

    private final ProductionPlanService planService;
    private final WorkOrderService woService;

    public ProductionController(ProductionPlanService planService, WorkOrderService woService) {
        this.planService = planService;
        this.woService = woService;
    }

    @GetMapping("/plans")
    public ResponseEntity<ApiResponse<Page<ProductionDtos.PlanResponse>>> plans(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("plannedStart").descending());
        return ResponseEntity.ok(ApiResponse.ok(planService.findAll(pageable), "Plans retrieved"));
    }

    @PostMapping("/plans")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<ProductionDtos.PlanResponse>> createPlan(@Valid @RequestBody ProductionDtos.PlanRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(planService.create(request), "Plan created"));
    }

    @GetMapping("/work-orders")
    public ResponseEntity<ApiResponse<Page<ProductionDtos.WoResponse>>> workOrders(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("id").descending());
        return ResponseEntity.ok(ApiResponse.ok(woService.findAll(pageable), "Work orders retrieved"));
    }

    @GetMapping("/material-check")
    public ResponseEntity<ApiResponse<ProductionDtos.MaterialCheckResponse>> checkMaterials(
            @RequestParam String modelCode, @RequestParam(defaultValue = "1") int quantity) {
        return ResponseEntity.ok(ApiResponse.ok(woService.checkMaterials(modelCode, quantity), "Material availability checked"));
    }

    @GetMapping("/shop-floor/active")
    public ResponseEntity<ApiResponse<List<ProductionDtos.WoResponse>>> activeOnLine(@RequestParam String lineCode) {
        return ResponseEntity.ok(ApiResponse.ok(woService.activeOnLine(lineCode), "Active work orders on line"));
    }

    @PostMapping("/work-orders")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<ProductionDtos.WoResponse>> createWo(@Valid @RequestBody ProductionDtos.WoRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(woService.create(request), "Work order created (DRAFT)"));
    }

    @PostMapping("/work-orders/{id}/transition")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER','SUPERVISOR')")
    public ResponseEntity<ApiResponse<ProductionDtos.WoResponse>> transition(@PathVariable Long id,
                                                                             @Valid @RequestBody MaintenanceDtos.TransitionRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(woService.transition(id, request), "Work order status transitioned"));
    }
}
