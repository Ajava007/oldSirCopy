package com.abc.SpringBootSecqurityEx.dtos;

import jakarta.validation.constraints.*;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;

public final class EngineeringDtos {
    private EngineeringDtos() {}

    public record PartRequest(
            @NotBlank(message = "Part code is required") @Size(max = 40) String partCode,
            @NotBlank(message = "Part name is required") @Size(max = 150) String name,
            @Size(max = 500) String description,
            @NotBlank(message = "UOM is required") @Size(max = 10) String uom,
            @Size(max = 30) String category,
            @DecimalMin(value = "0", message = "Standard cost cannot be negative") BigDecimal standardCost,
            @Size(max = 10) String revision,
            String status) {}

    public record PartResponse(
            Long id, String partCode, String name, String description, String uom,
            String category, BigDecimal standardCost, String revision, String status,
            Instant createdAt, Instant updatedAt) {}

    public record BomRowRequest(
            @NotBlank(message = "Parent part code is required") @Size(max = 40) String parentPartCode,
            @NotBlank(message = "Component part code is required") @Size(max = 40) String componentPartCode,
            @NotNull(message = "Quantity is required") @DecimalMin(value = "0.0001", message = "Quantity must be positive") BigDecimal quantity,
            @DecimalMin(value = "0", message = "Scrap factor cannot be negative") @DecimalMax(value = "1", message = "Scrap factor cannot exceed 1") BigDecimal scrapFactor,
            Boolean optional,
            @Min(1) Integer level,
            LocalDate effectiveFrom,
            LocalDate effectiveTo,
            @Size(max = 500) String remark) {}

    public record BomRowResponse(
            Long id, String parentPartCode, String componentPartCode, BigDecimal quantity,
            BigDecimal scrapFactor, boolean optional, Integer level,
            LocalDate effectiveFrom, LocalDate effectiveTo, String remark,
            Instant createdAt, Instant updatedAt) {}

    public record RoutingOperationRequest(
            @NotBlank(message = "Model code is required") @Size(max = 40) String modelCode,
            @NotNull(message = "Operation number is required") @Min(1) Integer operationNumber,
            @NotBlank(message = "Operation name is required") @Size(max = 150) String operationName,
            @NotBlank(message = "Work center is required") @Size(max = 60) String workCenter,
            @Min(0) Integer setupTimeSec,
            @NotNull(message = "Cycle time is required") @Min(1) Integer cycleTimeSec,
            @Size(max = 1000) String instructions) {}

    public record RoutingOperationResponse(
            Long id, String modelCode, Integer operationNumber, String operationName,
            String workCenter, Integer setupTimeSec, Integer cycleTimeSec, String instructions,
            Instant createdAt, Instant updatedAt) {}
}
