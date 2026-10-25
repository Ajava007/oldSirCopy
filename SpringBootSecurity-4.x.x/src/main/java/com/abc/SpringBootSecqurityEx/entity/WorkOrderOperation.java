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
@Table(name = "work_order_operation", uniqueConstraints = {
        @UniqueConstraint(name = "uk_wo_op", columnNames = {"wo_id", "operation_number"})
})
public class WorkOrderOperation extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "wo_id", nullable = false)
    private Long woId;

    @Column(name = "operation_number", nullable = false)
    private Integer operationNumber;

    @Column(name = "operation_name", nullable = false, length = 150)
    private String operationName;

    @Column(name = "work_center", length = 60)
    private String workCenter;

    @Column(nullable = false, length = 20)
    @Builder.Default
    private String status = "PENDING"; // PENDING, IN_PROGRESS, COMPLETED, SKIPPED

    @Column(name = "operator_name", length = 120)
    private String operatorName;

    @Column(name = "started_at")
    private LocalDateTime startedAt;

    @Column(name = "completed_at")
    private LocalDateTime completedAt;
}
