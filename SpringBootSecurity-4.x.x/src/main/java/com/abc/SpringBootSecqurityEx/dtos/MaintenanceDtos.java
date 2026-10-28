
        package com.abc.SpringBootSecqurityEx.dtos;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.Instant;
import java.time.LocalDateTime;

public final class MaintenanceDtos {

    private MaintenanceDtos() {}

    public record AssetRequest(
            @NotBlank String assetCode,
            @NotBlank @Size(max = 150) String name,
            String level,
            Long parentId,
            String lineCode,
            String status
    ) {}

    public record AssetResponse(
            Long id,
            String assetCode,
            String name,
            String level,
            Long parentId,
            String lineCode,
            String status,
            Instant createdAt
    ) {}

    public record MwoRequest(
            @NotBlank String mwoNumber,
            @NotBlank String assetCode,
            String type,
            @NotBlank @Size(max = 300) String problem,
            String technician,
            @Min(1) Integer plannedDurationMin,
            LocalDateTime scheduledStart
    ) {}

    public record MwoResponse(
            Long id,
            String mwoNumber,
            String assetCode,
            String type,
            String status,
            String problem,
            String technician,
            Integer plannedDurationMin,
            Integer actualDurationMin,
            LocalDateTime scheduledStart,
            LocalDateTime startedAt,
            LocalDateTime completedAt,
            Instant createdAt
    ) {}

    public record TransitionRequest(
            @NotBlank String targetStatus,

            // Maintenance work-order field
            @Min(1) Integer actualDurationMin,

            // Production work-order fields
            @Min(0) Integer producedQuantity,
            @Min(0) Integer rejectedQuantity
    ) {}

    public record DowntimeRequest(
            @NotBlank String assetCode,
            String lineCode,
            @NotNull LocalDateTime startTime,
            LocalDateTime endTime,
            @NotBlank String category,
            @Size(max = 300) String reason,
            String mwoNumber
    ) {}

    public record DowntimeResponse(
            Long id,
            String assetCode,
            String lineCode,
            LocalDateTime startTime,
            LocalDateTime endTime,
            Integer durationMin,
            String category,
            String reason,
            String mwoNumber,
            Instant createdAt
    ) {}

    public record ReliabilityResponse(
            String assetCode,
            long failureCount,
            double totalDowntimeMin,
            double mtbfMin,
            double mttrMin
    ) {}
}