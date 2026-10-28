package com.abc.SpringBootSecqurityEx.controller;


import com.abc.SpringBootSecqurityEx.dtos.ApiResponse;
import com.abc.SpringBootSecqurityEx.dtos.MaintenanceDtos;
import com.abc.SpringBootSecqurityEx.entity.Asset;
import com.abc.SpringBootSecqurityEx.repository.AssetRepository;
import com.abc.SpringBootSecqurityEx.service.DowntimeService;
import com.abc.SpringBootSecqurityEx.service.MaintenanceOrderService;
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
@RequestMapping("/api/v1/maintenance")
@Tag(name = "Maintenance", description = "Assets, maintenance work orders, downtime, MTBF/MTTR")
public class MaintenanceController {

    private final MaintenanceOrderService orderService;
    private final DowntimeService downtimeService;
    private final AssetRepository assetRepository;

    public MaintenanceController(MaintenanceOrderService orderService, DowntimeService downtimeService,
                                 AssetRepository assetRepository) {
        this.orderService = orderService;
        this.downtimeService = downtimeService;
        this.assetRepository = assetRepository;
    }

    @GetMapping("/assets")
    public ResponseEntity<ApiResponse<List<Asset>>> assets() {
        return ResponseEntity.ok(ApiResponse.ok(assetRepository.findAll(), "Assets retrieved"));
    }

    @PostMapping("/assets")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<Asset>> createAsset(@Valid @RequestBody MaintenanceDtos.AssetRequest request) {
        if (assetRepository.existsByAssetCode(request.assetCode())) {
            throw new IllegalStateException("Asset code already exists: " + request.assetCode());
        }
        Asset asset = Asset.builder()
                .assetCode(request.assetCode()).name(request.name())
                .level(request.level() != null ? request.level() : "MACHINE")
                .parentId(request.parentId()).lineCode(request.lineCode())
                .status(request.status() != null ? request.status() : "OPERATIONAL").build();
        return ResponseEntity.ok(ApiResponse.ok(assetRepository.save(asset), "Asset created"));
    }

    @GetMapping("/work-orders")
    public ResponseEntity<ApiResponse<Page<MaintenanceDtos.MwoResponse>>> workOrders(
            @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("id").descending());
        return ResponseEntity.ok(ApiResponse.ok(orderService.findAll(pageable), "Maintenance work orders retrieved"));
    }

    @PostMapping("/work-orders")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<MaintenanceDtos.MwoResponse>> createWo(@Valid @RequestBody MaintenanceDtos.MwoRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(orderService.create(request), "Maintenance WO created (DRAFT)"));
    }

    @PostMapping("/work-orders/{id}/transition")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<MaintenanceDtos.MwoResponse>> transition(@PathVariable Long id, @Valid @RequestBody MaintenanceDtos.TransitionRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(orderService.transition(id, request), "MWO transitioned"));
    }

    @GetMapping("/downtime")
    public ResponseEntity<ApiResponse<List<MaintenanceDtos.DowntimeResponse>>> downtime() {
        return ResponseEntity.ok(ApiResponse.ok(downtimeService.findAll(), "Downtime entries retrieved"));
    }

    @PostMapping("/downtime")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER','SUPERVISOR')")
    public ResponseEntity<ApiResponse<MaintenanceDtos.DowntimeResponse>> logDowntime(@Valid @RequestBody MaintenanceDtos.DowntimeRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(downtimeService.log(request), "Downtime logged"));
    }

    @GetMapping("/reliability")
    public ResponseEntity<ApiResponse<List<MaintenanceDtos.ReliabilityResponse>>> reliability(@RequestParam(required = false) String assetCode) {
        return ResponseEntity.ok(ApiResponse.ok(downtimeService.reliability(assetCode), "MTBF/MTTR calculated"));
    }
}
