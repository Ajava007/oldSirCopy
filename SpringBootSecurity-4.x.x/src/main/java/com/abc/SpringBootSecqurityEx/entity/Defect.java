package com.abc.SpringBootSecqurityEx.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "defect")
public class Defect extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "defect_number", nullable = false, length = 30)
    private String defectNumber;

    @Column(name = "inspection_id")
    private Long inspectionId;

    @Column(name = "vin", length = 20)
    private String vin;

    @Column(name = "part_code", length = 40)
    private String partCode;

    @Column(nullable = false, length = 150)
    private String description;

    @Column(nullable = false, length = 10)
    @Builder.Default
    private String severity = "MINOR"; // MINOR, MAJOR, CRITICAL

    @Column(nullable = false, length = 20)
    @Builder.Default
    private String status = "OPEN"; // OPEN, REWORKED, ACCEPTED_AS_IS, SCRAPPED
}
