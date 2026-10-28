package com.abc.SpringBootSecqurityEx.controller;


import com.abc.SpringBootSecqurityEx.dtos.ApiResponse;
import com.abc.SpringBootSecqurityEx.dtos.InventoryDtos;
import com.abc.SpringBootSecqurityEx.service.InventoryService;
import com.abc.SpringBootSecqurityEx.service.MrpService;
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
@RequestMapping("/api/v1/inventory")
@Tag(name = "Inventory & MRP", description = "Stock balances, immutable transactions, MRP shortage calculation")
public class InventoryController {

    private final InventoryService inventoryService;
    private final MrpService mrpService;

    public InventoryController(InventoryService inventoryService, MrpService mrpService) {
        this.inventoryService = inventoryService;
        this.mrpService = mrpService;
    }

    @GetMapping("/items")
    public ResponseEntity<ApiResponse<Page<InventoryDtos.InventoryItemResponse>>> items(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(defaultValue = "partCode") String sort) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sort).ascending());
        return ResponseEntity.ok(ApiResponse.ok(inventoryService.findAll(pageable), "Inventory items retrieved"));
    }

    @GetMapping("/transactions")
    public ResponseEntity<ApiResponse<List<InventoryDtos.StockTransactionResponse>>> transactions(@RequestParam String partCode) {
        return ResponseEntity.ok(ApiResponse.ok(inventoryService.findTransactions(partCode), "Transactions retrieved"));
    }

    @PostMapping("/adjust")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<InventoryDtos.InventoryItemResponse>> adjust(@Valid @RequestBody InventoryDtos.StockAdjustRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(inventoryService.adjust(request), "Stock adjusted — transaction logged"));
    }

    @PostMapping("/mrp/calculate")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER')")
    public ResponseEntity<ApiResponse<List<InventoryDtos.MrpResultResponse>>> calculateMrp(@Valid @RequestBody InventoryDtos.MrpRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(mrpService.calculate(request), "MRP calculated — shortages identified"));
    }

    @GetMapping("/mrp/run/{runNumber}")
    public ResponseEntity<ApiResponse<List<InventoryDtos.MrpResultResponse>>> mrpRun(@PathVariable String runNumber) {
        return ResponseEntity.ok(ApiResponse.ok(mrpService.findByRun(runNumber), "MRP run retrieved"));
    }
}
