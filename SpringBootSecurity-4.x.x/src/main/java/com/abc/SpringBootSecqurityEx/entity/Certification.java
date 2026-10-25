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
@Table(name = "certification", uniqueConstraints = {
        @UniqueConstraint(name = "uk_cert_emp_skill", columnNames = {"employee_id", "skill_code"})
})
public class Certification extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "employee_id", nullable = false)
    private Long employeeId;

    @Column(name = "skill_code", nullable = false, length = 30)
    private String skillCode; // e.g. WELDING, PAINTING, FINAL_INSPECT

    @Column(nullable = false, length = 10)
    @Builder.Default
    private String level = "BASIC"; // BASIC, INTERMEDIATE, ADVANCED, EXPERT

    @Column(name = "issued_date", nullable = false)
    private LocalDate issuedDate;

    @Column(name = "expiry_date")
    private LocalDate expiryDate; // null = no expiry

    @Column(nullable = false, length = 20)
    @Builder.Default
    private String status = "VALID"; // VALID, EXPIRING, EXPIRED
}
