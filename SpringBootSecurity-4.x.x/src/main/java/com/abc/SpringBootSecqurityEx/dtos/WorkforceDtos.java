package com.abc.SpringBootSecqurityEx.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.Instant;
import java.time.LocalDate;

public final class WorkforceDtos {
    private WorkforceDtos() {}

    public record EmployeeRequest(
            @NotBlank String employeeCode,
            @NotBlank @Size(max = 120) String fullName,
            @Email String email,
            @Size(max = 30) String phone,
            @Size(max = 60) String department,
            String factoryCode,
            LocalDate hireDate,
            String status) {}

    public record EmployeeResponse(
            Long id, String employeeCode, String fullName, String email, String phone,
            String department, String factoryCode, LocalDate hireDate, String status, Instant createdAt) {}

    public record CertificationRequest(
            @NotNull Long employeeId,
            @NotBlank String skillCode,
            String level,
            @NotNull LocalDate issuedDate,
            LocalDate expiryDate) {}

    public record CertificationResponse(
            Long id, Long employeeId, String skillCode, String level, LocalDate issuedDate,
            LocalDate expiryDate, String status, Instant createdAt) {}

    public record ShiftRequest(
            @NotNull Long employeeId,
            @NotNull LocalDate shiftDate,
            @NotBlank String shift,
            String lineCode,
            String workCenter) {}

    public record ShiftResponse(
            Long id, Long employeeId, LocalDate shiftDate, String shift, String lineCode,
            String workCenter, Instant createdAt) {}

    public record QualificationResponse(
            Long employeeId, String employeeName, String skillCode, boolean qualified,
            String reason) {}
}
