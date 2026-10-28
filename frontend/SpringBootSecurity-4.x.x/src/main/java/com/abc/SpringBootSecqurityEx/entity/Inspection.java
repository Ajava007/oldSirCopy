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
@Table(name = "inspection")
public class Inspection extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "inspection_number", nullable = false, length = 30)
    private String inspectionNumber;

    @Column(nullable = false, length = 20)
    private String type; // INCOMING, IN_PROCESS, FINAL

    @Column(name = "vin", length = 20)
    private String vin;

    @Column(name = "part_code", length = 40)
    private String partCode;

    @Column(name = "wo_number", length = 30)
    private String woNumber;

    @Column(name = "inspector_name", length = 120)
    private String inspectorName;

    @Column(nullable = false, length = 10)
    @Builder.Default
    private String result = "PENDING"; // PASS, FAIL, PENDING

    @Column(length = 500)
    private String notes;

    @Column(name = "inspected_at")
    private LocalDateTime inspectedAt;
}
