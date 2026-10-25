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
@Table(name = "maintenance_work_order", uniqueConstraints = {
        @UniqueConstraint(name = "uk_mwo_number", columnNames = "mwo_number")
})
public class MaintenanceWorkOrder extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "mwo_number", nullable = false, length = 30)
    private String mwoNumber;

    @Column(name = "asset_code", nullable = false, length = 30)
    private String assetCode;

    @Column(nullable = false, length = 20)
    @Builder.Default
    private String type = "CORRECTIVE"; // PREVENTIVE, CORRECTIVE, PREDICTIVE, EMERGENCY

    @Column(nullable = false, length = 20)
    @Builder.Default
    private String status = "DRAFT"; // DRAFT, SCHEDULED, IN_PROGRESS, COMPLETED, VERIFIED, CANCELLED

    @Column(nullable = false, length = 300)
    private String problem;

    @Column(length = 120)
    private String technician;

    @Column(name = "planned_duration_min")
    private Integer plannedDurationMin;

    @Column(name = "actual_duration_min")
    private Integer actualDurationMin;

    @Column(name = "scheduled_start")
    private LocalDateTime scheduledStart;

    @Column(name = "started_at")
    private LocalDateTime startedAt;

    @Column(name = "completed_at")
    private LocalDateTime completedAt;
}
