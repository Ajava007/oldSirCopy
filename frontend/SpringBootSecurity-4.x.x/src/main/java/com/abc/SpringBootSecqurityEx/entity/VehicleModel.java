package com.abc.SpringBootSecqurityEx.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "vehicle_model", uniqueConstraints = {
        @UniqueConstraint(name = "uk_vehicle_model_code", columnNames = "model_code")
})
public class VehicleModel extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "model_code", nullable = false, length = 30)
    private String modelCode;

    @Column(name = "model_name", nullable = false, length = 150)
    private String modelName;

    @Column(nullable = false, length = 80)
    private String brand;

    @Column(name = "vehicle_type", length = 40)
    private String vehicleType;

    @Column(length = 40)
    private String segment;

    @Column(name = "model_year", length = 10)
    private String modelYear;

    @Column(name = "fuel_type", length = 30)
    private String fuelType;

    @Column(length = 30)
    private String transmission;

    @Column(name = "base_price", precision = 18, scale = 2)
    private BigDecimal basePrice;

    @Column(nullable = false, length = 20)
    @Builder.Default
    private String status = "DRAFT";
}
