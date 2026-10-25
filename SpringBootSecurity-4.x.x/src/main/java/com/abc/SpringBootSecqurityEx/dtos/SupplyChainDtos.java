package com.abc.SpringBootSecqurityEx.dtos;

import jakarta.validation.constraints.*;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;
import java.util.List;

public final class SupplyChainDtos {
    private SupplyChainDtos() {}

    public record SupplierRequest(
            @NotBlank(message = "Supplier code is required") @Size(max = 30) String code,
            @NotBlank(message = "Company name is required") @Size(max = 150) String company,
            @Size(max = 60) String category,
            @Size(max = 60) String country,
            @DecimalMin(value = "0") @DecimalMax(value = "5") BigDecimal rating,
            @Email @Size(max = 120) String contactEmail,
            @Size(max = 30) String phone,
            String status) {}

    public record SupplierResponse(
            Long id, String code, String company, String category, String country,
            BigDecimal rating, String contactEmail, String phone, String status,
            Instant createdAt, Instant updatedAt) {}

    public record PoItemRequest(
            @Size(max = 40) String partCode,
            @NotBlank(message = "Item description is required") @Size(max = 150) String description,
            @NotNull @Min(1) Integer quantity,
            @NotNull @DecimalMin(value = "0.0001", message = "Unit price must be positive") BigDecimal unitPrice) {}

    public record PoItemResponse(
            Long id, String partCode, String description, Integer quantity, BigDecimal unitPrice, BigDecimal lineTotal) {}

    public record PurchaseOrderRequest(
            @NotBlank(message = "PO number is required") @Size(max = 30) String poNumber,
            @NotBlank(message = "Supplier code is required") @Size(max = 30) String supplierCode,
            @NotNull(message = "Order date is required") LocalDate orderDate,
            @Size(max = 3) String currency,
            @Size(max = 100) String requestedBy,
            @Size(max = 500) String notes,
            @NotEmpty(message = "PO must have at least one item") List<PoItemRequest> items) {}

    public record PurchaseOrderResponse(
            Long id, String poNumber, String supplierCode, LocalDate orderDate, String status,
            BigDecimal totalAmount, String currency, String requestedBy, String approvedBy, String notes,
            List<PoItemResponse> items, Instant createdAt, Instant updatedAt) {}

    public record StatusTransitionRequest(@NotBlank(message = "Target status is required") String targetStatus,
                                          @Size(max = 100) String actor) {}
}
