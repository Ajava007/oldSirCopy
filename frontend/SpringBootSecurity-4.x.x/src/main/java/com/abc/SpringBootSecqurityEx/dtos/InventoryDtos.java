package com.abc.SpringBootSecqurityEx.dtos;

import jakarta.validation.constraints.*;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;
import java.util.List;

public final class InventoryDtos {
    private InventoryDtos() {}

    public record InventoryItemResponse(
            Long id, String partCode, String warehouse, String location, String lotNumber,
            String serialNumber, BigDecimal onHand, BigDecimal reserved, BigDecimal available,
            String status, Instant createdAt, Instant updatedAt) {}

    public record StockAdjustRequest(
            @NotBlank String partCode,
            @NotBlank String warehouse,
            String lotNumber,
            @NotNull @DecimalMin(value = "0.0001", message = "Quantity must be positive") BigDecimal quantity,
            @NotBlank(message = "Transaction type is required") String txnType, // RECEIPT/ISSUE/SCRAP/ADJUST
            String referenceType,
            String referenceId,
            @Size(max = 300) String remark) {}

    public record StockTransactionResponse(
            Long id, String partCode, String warehouse, String txnType, BigDecimal quantity,
            String referenceType, String referenceId, String remark, Instant createdAt) {}

    public record MrpRequest(
            @NotNull LocalDate planDate,
            @NotEmpty List<MrpDemandLine> demand) {}

    public record MrpDemandLine(
            @NotBlank String partCode,
            @NotNull @DecimalMin(value = "0.0001") BigDecimal grossRequirement,
            @DecimalMin(value = "0") BigDecimal scheduledReceipts) {}

    public record MrpResultResponse(
            String runNumber, LocalDate planDate, String partCode, BigDecimal grossRequirement,
            BigDecimal onHand, BigDecimal scheduledReceipts, BigDecimal netShortage, String action) {}
}
