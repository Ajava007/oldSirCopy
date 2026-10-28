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
@Table(name = "shift_assignment", uniqueConstraints = {
        @UniqueConstraint(name = "uk_shift_emp_date", columnNames = {"employee_id", "shift_date"})
})
public class ShiftAssignment extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "employee_id", nullable = false)
    private Long employeeId;

    @Column(name = "shift_date", nullable = false)
    private LocalDate shiftDate;

    @Column(nullable = false, length = 10)
    private String shift; // MORNING, AFTERNOON, NIGHT

    @Column(name = "line_code", length = 30)
    private String lineCode;

    @Column(length = 60)
    private String workCenter;
}
