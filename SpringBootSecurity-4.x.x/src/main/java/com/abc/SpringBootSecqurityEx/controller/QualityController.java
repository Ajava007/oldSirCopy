package com.abc.SpringBootSecqurityEx.controller;

import com.abc.SpringBootSecqurityEx.dtos.ApiResponse;
import com.abc.SpringBootSecqurityEx.dtos.QualityDtos;
import com.abc.SpringBootSecqurityEx.service.InspectionService;
import com.abc.SpringBootSecqurityEx.service.NcrService;
import com.abc.SpringBootSecqurityEx.service.QualityGateService;
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
@RequestMapping("/api/v1/quality")
@Tag(name = "Quality", description = "Inspections, defects, NCR workflow, vehicle release gate")
public class QualityController {

    private final InspectionService inspectionService;
    private final NcrService ncrService;
    private final QualityGateService gateService;

    public QualityController(InspectionService inspectionService, NcrService ncrService, QualityGateService gateService) {
        this.inspectionService = inspectionService;
        this.ncrService = ncrService;
        this.gateService = gateService;
    }

    @GetMapping("/inspections")
    public ResponseEntity<ApiResponse<Page<QualityDtos.InspectionResponse>>> inspections(
            @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("id").descending());
        return ResponseEntity.ok(ApiResponse.ok(inspectionService.findAll(pageable), "Inspections retrieved"));
    }

    @GetMapping("/inspections/by-vin")
    public ResponseEntity<ApiResponse<List<QualityDtos.InspectionResponse>>> byVin(@RequestParam String vin) {
        return ResponseEntity.ok(ApiResponse.ok(inspectionService.findByVin(vin), "Inspections for VIN"));
    }

    @PostMapping("/inspections")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER','QUALITY_INSPECTOR')")
    public ResponseEntity<ApiResponse<QualityDtos.InspectionResponse>> record(@Valid @RequestBody QualityDtos.InspectionRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(inspectionService.record(request), "Inspection recorded — defect auto-created if FAIL"));
    }

    @GetMapping("/ncrs")
    public ResponseEntity<ApiResponse<Page<QualityDtos.NcrResponse>>> ncrs(
            @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("id").descending());
        return ResponseEntity.ok(ApiResponse.ok(ncrService.findAll(pageable), "NCRs retrieved"));
    }

    @PostMapping("/ncrs")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER','QUALITY_INSPECTOR')")
    public ResponseEntity<ApiResponse<QualityDtos.NcrResponse>> createNcr(@Valid @RequestBody QualityDtos.NcrRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(ncrService.create(request), "NCR created (OPEN)"));
    }

    @PostMapping("/ncrs/{id}/transition")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER','QUALITY_INSPECTOR')")
    public ResponseEntity<ApiResponse<QualityDtos.NcrResponse>> transitionNcr(@PathVariable Long id,
                                                                              @Valid @RequestBody NcrTransitionRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(ncrService.transition(id, request), "NCR transitioned"));
    }

    @GetMapping("/gate-check/{vin}")
    public ResponseEntity<ApiResponse<QualityDtos.GateCheckResponse>> gateCheck(@PathVariable String vin) {
        return ResponseEntity.ok(ApiResponse.ok(gateService.check(vin), "Quality release gate result"));
    }
}
