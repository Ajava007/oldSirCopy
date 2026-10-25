package com.abc.SpringBootSecqurityEx.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "work_order", uniqueConstraints = {
        @UniqueConstraint(name = "uk_wo_number", columnNames = "wo_number")
})
public class WorkOrder extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "wo_number", nullable = false, length = 30)
    private String woNumber;

    @Column(name = "plan_number", length = 30)
    private String planNumber;

    @Column(name = "model_code", nullable = false, length = 40)
    private String modelCode;

    @Column(name = "line_code", length = 30)
    private String lineCode;

    @Column(nullable = false)
    private Integer targetQuantity;

    @Column(nullable = false)
    @Builder.Default
    private Integer producedQuantity = 0;

    @Column(nullable = false)
    @Builder.Default
    private Integer rejectedQuantity = 0;

    @Column(nullable = false, length = 20)
    @Builder.Default
    private String status = "DRAFT"; // DRAFT, RELEASED, IN_PROGRESS, PAUSED, COMPLETED, CANCELLED

    @Column(name = "released_at")
    private LocalDateTime releasedAt;

    @Column(name = "started_at")
    private LocalDateTime startedAt;

    @Column(name = "completed_at")
    private LocalDateTime completedAt;

    @Column(name = "generated_vin_from", length = 20)
    private String generatedVinFrom;

    @Column(name = "generated_vin_to", length = 20)
    private String generatedVinTo;
}
