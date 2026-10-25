package com.abc.SpringBootSecqurityEx.controller;


import com.abc.SpringBootSecqurityEx.dtos.ApiResponse;
import com.abc.SpringBootSecqurityEx.dtos.MaintenanceDtos;
import com.abc.SpringBootSecqurityEx.dtos.SalesDtos;
import com.abc.SpringBootSecqurityEx.service.SalesMasterService;
import com.abc.SpringBootSecqurityEx.service.SalesOrderService;
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
@RequestMapping("/api/v1/sales")
@Tag(name = "Sales & Yard", description = "Customers, dealers, sales orders with allocation + dispatch gating, yard map")
public class SalesController {

    private final SalesOrderService orderService;
    private final SalesMasterService masterService;

    public SalesController(SalesOrderService orderService, SalesMasterService masterService) {
        this.orderService = orderService;
        this.masterService = masterService;
    }

    @GetMapping("/orders")
    public ResponseEntity<ApiResponse<Page<SalesDtos.SalesOrderResponse>>> orders(
            @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("id").descending());
        return ResponseEntity.ok(ApiResponse.ok(orderService.findAll(pageable), "Sales orders retrieved"));
    }

    @PostMapping("/orders")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER','SALES_MANAGER')")
    public ResponseEntity<ApiResponse<SalesDtos.SalesOrderResponse>> createOrder(@Valid @RequestBody SalesDtos.SalesOrderRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(orderService.create(request), "Sales order created (DRAFT)"));
    }

    @PostMapping("/orders/{id}/allocate")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER','SALES_MANAGER')")
    public ResponseEntity<ApiResponse<SalesDtos.SalesOrderResponse>> allocate(@PathVariable Long id, @Valid @RequestBody SalesDtos.AllocateRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(orderService.allocate(id, request), "VIN allocated — double-allocation prevented"));
    }

    @PostMapping("/orders/{id}/transition")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER','SALES_MANAGER')")
    public ResponseEntity<ApiResponse<SalesDtos.SalesOrderResponse>> transition(@PathVariable Long id, @Valid @RequestBody MaintenanceDtos.TransitionRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(orderService.transition(id, request), "Order status transitioned"));
    }

    @PostMapping("/orders/{id}/mark-paid")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER','SALES_MANAGER')")
    public ResponseEntity<ApiResponse<SalesDtos.SalesOrderResponse>> markPaid(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(orderService.markPaid(id), "Payment marked PAID"));
    }

    @GetMapping("/customers")
    public ResponseEntity<ApiResponse<Page<SalesDtos.CustomerResponse>>> customers(
            @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size) {
        return ResponseEntity.ok(ApiResponse.ok(masterService.customers(PageRequest.of(page, size)), "Customers retrieved"));
    }

    @PostMapping("/customers")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER','SALES_MANAGER')")
    public ResponseEntity<ApiResponse<SalesDtos.CustomerResponse>> createCustomer(@Valid @RequestBody SalesDtos.CustomerRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(masterService.createCustomer(request), "Customer created"));
    }

    @GetMapping("/dealers")
    public ResponseEntity<ApiResponse<Page<SalesDtos.DealerResponse>>> dealers(
            @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size) {
        return ResponseEntity.ok(ApiResponse.ok(masterService.dealers(PageRequest.of(page, size)), "Dealers retrieved"));
    }

    @PostMapping("/dealers")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<SalesDtos.DealerResponse>> createDealer(@Valid @RequestBody SalesDtos.DealerRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(masterService.createDealer(request), "Dealer created"));
    }

    @GetMapping("/yard/map")
    public ResponseEntity<ApiResponse<List<SalesDtos.YardSlotResponse>>> yardMap() {
        return ResponseEntity.ok(ApiResponse.ok(masterService.yardMap(), "Yard map retrieved"));
    }
}
