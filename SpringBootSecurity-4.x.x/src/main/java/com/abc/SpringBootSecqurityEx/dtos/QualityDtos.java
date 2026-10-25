package com.abc.SpringBootSecqurityEx.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.List;

public final class QualityDtos {
    private QualityDtos() {}

    public record InspectionRequest(
            @NotBlank String inspectionNumber,
            @NotBlank String type,
            String vin,
            String partCode,
            String woNumber,
            String inspectorName,
            @NotBlank String result, // PASS, FAIL
            @Size(max = 500) String notes) {}

    public record InspectionResponse(
            Long id, String inspectionNumber, String type, String vin, String partCode,
            String woNumber, String inspectorName, String result, String notes,
            LocalDateTime inspectedAt, Instant createdAt) {}

    public record DefectRequest(
            @NotBlank String defectNumber,
            Long inspectionId,
            String vin,
            String partCode,
            @NotBlank @Size(max = 150) String description,
            @NotBlank String severity) {} // MINOR, MAJOR, CRITICAL

    public record DefectResponse(
            Long id, String defectNumber, Long inspectionId, String vin, String partCode,
            String description, String severity, String status, Instant createdAt) {}

    public record NcrRequest(
            @NotBlank String ncrNumber,
            Long defectId,
            String vin,
            @Size(max = 500) String containment) {}

    public record NcrResponse(
            Long id, String ncrNumber, Long defectId, String vin, String status,
            String containment, String rootCause, String correctiveAction,
            LocalDateTime closedAt, Instant createdAt) {}

    public record NcrTransitionRequest(
            @NotBlank String targetStatus,
            @Size(max = 500) String rootCause,
            @Size(max = 500) String correctiveAction) {}

    public record GateCheckResponse(
            String vin, boolean releasable, List<String> blockingReasons,
            long openDefects, long openNcrs, boolean finalInspectionPassed) {}
}
