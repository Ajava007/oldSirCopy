package com.abc.SpringBootSecqurityEx.dtos;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public final class ProductionDtos {
    private ProductionDtos() {}

    public record PlanRequest(
            @NotBlank String planNumber,
            @NotBlank String factoryCode,
            @NotBlank String modelCode,
            String variantCode,
            @NotNull @Min(1) Integer quantity,
            String lineCode,
            @NotNull LocalDate plannedStart,
            @NotNull LocalDate plannedFinish,
            String status) {}

    public record PlanResponse(
            Long id, String planNumber, String factoryCode, String modelCode, String variantCode,
            Integer quantity, String lineCode, LocalDate plannedStart, LocalDate plannedFinish,
            String status, Instant createdAt) {}

    public record WoRequest(
            @NotBlank String woNumber,
            String planNumber,
            @NotBlank String modelCode,
            String lineCode,
            @NotNull @Min(1) Integer targetQuantity,
            List<WoOpRequest> operations) {}

    public record WoOpRequest(
            @NotNull @Min(1) Integer operationNumber,
            @NotBlank String operationName,
            String workCenter) {}

    public record WoResponse(
            Long id, String woNumber, String planNumber, String modelCode, String lineCode,
            Integer targetQuantity, Integer producedQuantity, Integer rejectedQuantity, String status,
            LocalDateTime releasedAt, LocalDateTime startedAt, LocalDateTime completedAt,
            String generatedVinFrom, String generatedVinTo, List<WoOpResponse> operations, Instant createdAt) {}

    public record WoOpResponse(
            Long id, Integer operationNumber, String operationName, String workCenter,
            String status, String operatorName, LocalDateTime startedAt, LocalDateTime completedAt) {}

    public record TransitionRequest(
            @NotBlank String targetStatus,
            String operatorName,
            @Min(0) Integer producedQuantity,
            @Min(0) Integer rejectedQuantity) {}
}
