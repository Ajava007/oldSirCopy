package com.abc.SpringBootSecqurityEx.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "production_plan", uniqueConstraints = {
        @UniqueConstraint(name = "uk_plan_number", columnNames = "plan_number")
})
public class ProductionPlan extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "plan_number", nullable = false, length = 30)
    private String planNumber;

    @Column(name = "factory_code", nullable = false, length = 30)
    private String factoryCode;

    @Column(name = "model_code", nullable = false, length = 40)
    private String modelCode;

    @Column(name = "variant_code", length = 40)
    private String variantCode;

    @Column(nullable = false)
    private Integer quantity;

    @Column(name = "line_code", length = 30)
    private String lineCode;

    @Column(name = "planned_start", nullable = false)
    private LocalDate plannedStart;

    @Column(name = "planned_finish", nullable = false)
    private LocalDate plannedFinish;

    @Column(nullable = false, length = 20)
    @Builder.Default
    private String status = "PLANNED"; // PLANNED, RELEASED, IN_PROGRESS, COMPLETED, CANCELLED
}
