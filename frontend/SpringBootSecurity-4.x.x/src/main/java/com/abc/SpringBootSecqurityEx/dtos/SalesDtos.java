package com.abc.SpringBootSecqurityEx.dtos;

import jakarta.validation.constraints.*;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;

public final class SalesDtos {
    private SalesDtos() {}

    public record CustomerRequest(
            @NotBlank @Size(max = 150) String name,
            @NotBlank @Email String email,
            @Size(max = 30) String phone,
            @Size(max = 200) String address) {}

    public record CustomerResponse(Long id, String name, String email, String phone, String address, Instant createdAt) {}

    public record DealerRequest(
            @NotBlank @Size(max = 30) String code,
            @NotBlank @Size(max = 150) String name,
            @Size(max = 100) String city,
            @Email String contactEmail,
            String status) {}

    public record DealerResponse(Long id, String code, String name, String city, String contactEmail, String status, Instant createdAt) {}

    public record SalesOrderRequest(
            @NotBlank String soNumber,
            @NotNull Long customerId,
            String dealerCode,
            @NotBlank String modelCode,
            @NotNull LocalDate orderDate,
            @DecimalMin(value = "0") BigDecimal totalAmount) {}

    public record SalesOrderResponse(
            Long id, String soNumber, Long customerId, String dealerCode, String vin, String modelCode,
            LocalDate orderDate, BigDecimal totalAmount, String status, String paymentStatus,
            LocalDateTime dispatchedAt, LocalDateTime deliveredAt, Instant createdAt) {}

    public record PaymentRequest(@NotNull @DecimalMin(value = "0.01") BigDecimal amount,
                                 @NotBlank @Size(max = 30) String method,
                                 @Size(max = 100) String reference) {}

    public record PaymentResponse(Long id, Long salesOrderId, String soNumber, BigDecimal amount,
                                  String method, String reference, String status, Instant paidAt) {}

    public record AllocateRequest(@NotBlank String vin) {}
    public record TransitionRequest(@NotBlank String targetStatus) {}

    public record YardSlotResponse(
            Long id, String rowCode, Integer slotNumber, String vin, String status) {}
}
