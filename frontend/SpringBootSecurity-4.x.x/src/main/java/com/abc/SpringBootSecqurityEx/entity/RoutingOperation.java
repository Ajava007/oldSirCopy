package com.abc.SpringBootSecqurityEx.entity;


import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "routing_operation", uniqueConstraints = {
        @UniqueConstraint(name = "uk_routing_model_op", columnNames = {"model_code", "operation_number"})
})
public class RoutingOperation extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "model_code", nullable = false, length = 40)
    private String modelCode;

    @Column(name = "operation_number", nullable = false)
    private Integer operationNumber;

    @Column(name = "operation_name", nullable = false, length = 150)
    private String operationName;

    @Column(name = "work_center", nullable = false, length = 60)
    private String workCenter;

    @Column(name = "setup_time_sec", nullable = false)
    @Builder.Default
    private Integer setupTimeSec = 0;

    @Column(name = "cycle_time_sec", nullable = false)
    @Builder.Default
    private Integer cycleTimeSec = 60;

    @Column(length = 1000)
    private String instructions;
}
