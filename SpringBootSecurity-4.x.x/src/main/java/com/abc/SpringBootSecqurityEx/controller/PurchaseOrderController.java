package com.abc.SpringBootSecqurityEx.controller;


import com.abc.SpringBootSecqurityEx.dtos.ApiResponse;
import com.abc.SpringBootSecqurityEx.dtos.SupplyChainDtos;
import com.abc.SpringBootSecqurityEx.service.PurchaseOrderService;
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
@RequestMapping("/api/v1/supply-chain/purchase-orders")
@Tag(name = "Purchase Orders", description = "PO lifecycle with enforced state machine")
public class PurchaseOrderController {
    private final PurchaseOrderService service;
    public PurchaseOrderController(PurchaseOrderService service) { this.service = service; }

    @GetMapping
    public ResponseEntity<ApiResponse<Page<SupplyChainDtos.PurchaseOrderResponse>>> list(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(defaultValue = "id") String sort) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sort).descending());
        return ResponseEntity.ok(ApiResponse.ok(service.findAll(pageable), "Purchase orders retrieved"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<SupplyChainDtos.PurchaseOrderResponse>> get(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(service.findById(id), "Purchase order retrieved"));
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<SupplyChainDtos.PurchaseOrderResponse>> create(@Valid @RequestBody SupplyChainDtos.PurchaseOrderRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(service.create(request), "Purchase order created (DRAFT)"));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<SupplyChainDtos.PurchaseOrderResponse>> update(@PathVariable Long id, @Valid @RequestBody SupplyChainDtos.PurchaseOrderRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(service.update(id, request), "Purchase order updated"));
    }

    @PostMapping("/{id}/transition")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<SupplyChainDtos.PurchaseOrderResponse>> transition(@PathVariable Long id,
                                                                                         @Valid @RequestBody SupplyChainDtos.StatusTransitionRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(service.transition(id, request), "Status transitioned"));
    }

    @PostMapping("/{id}/receive")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<SupplyChainDtos.PurchaseOrderResponse>> receive(
            @PathVariable Long id, @Valid @RequestBody SupplyChainDtos.ReceiveRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(service.receive(id, request), "Purchase order received into inventory"));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok(ApiResponse.ok(null, "Purchase order deleted"));
    }
}
