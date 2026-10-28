package com.abc.SpringBootSecqurityEx.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;
import java.time.Instant;

public final class MasterDataDtos {
    private MasterDataDtos() {}

    public record OrganizationRequest(
            @NotBlank(message = "Code is required") @Size(max = 30) String code,
            @NotBlank(message = "Name is required") @Size(max = 150) String name,
            @Size(max = 100) String country,
            @Size(max = 200) String address,
            String status) {}

    public record OrganizationResponse(
            Long id, String code, String name, String country, String address,
            String status, Instant createdAt, Instant updatedAt) {}

    public record FactoryRequest(
            @NotNull(message = "Organization id is required") Long organizationId,
            @NotBlank(message = "Code is required") @Size(max = 30) String code,
            @NotBlank(message = "Name is required") @Size(max = 150) String name,
            @Size(max = 200) String location,
            @Size(max = 50) String timeZone,
            String status) {}

    public record FactoryResponse(
            Long id, Long organizationId, String code, String name, String location,
            String timeZone, String status, Instant createdAt, Instant updatedAt) {}

    public record VehicleModelRequest(
            @NotBlank(message = "Model code is required") @Size(max = 30) String modelCode,
            @NotBlank(message = "Model name is required") @Size(max = 150) String modelName,
            @NotBlank(message = "Brand is required") @Size(max = 80) String brand,
            @Size(max = 40) String vehicleType,
            @Size(max = 40) String segment,
            @Size(max = 10) String modelYear,
            @Size(max = 30) String fuelType,
            @Size(max = 30) String transmission,
            BigDecimal basePrice,
            String status) {}

    public record VehicleModelResponse(
            Long id, String modelCode, String modelName, String brand, String vehicleType,
            String segment, String modelYear, String fuelType, String transmission,
            BigDecimal basePrice, String status, Instant createdAt, Instant updatedAt) {}
}
