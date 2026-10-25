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
@Table(name = "ncr", uniqueConstraints = {
        @UniqueConstraint(name = "uk_ncr_number", columnNames = "ncr_number")
})
public class NcrRecord extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ncr_number", nullable = false, length = 30)
    private String ncrNumber;

    @Column(name = "defect_id")
    private Long defectId;

    @Column(name = "vin", length = 20)
    private String vin;

    @Column(nullable = false, length = 20)
    @Builder.Default
    private String status = "OPEN"; // OPEN, INVESTIGATING, RESOLVED, VERIFIED, CLOSED

    @Column(length = 500)
    private String containment;

    @Column(name = "root_cause", length = 500)
    private String rootCause;

    @Column(name = "corrective_action", length = 500)
    private String correctiveAction;

    @Column(name = "closed_at")
    private LocalDateTime closedAt;
}
