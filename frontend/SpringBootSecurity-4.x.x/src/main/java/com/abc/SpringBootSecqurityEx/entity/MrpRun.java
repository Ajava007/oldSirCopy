package com.abc.SpringBootSecqurityEx.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "mrp_run")
public class MrpRun extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "run_number", nullable = false, length = 30)
    private String runNumber;

    @Column(name = "plan_date", nullable = false)
    private LocalDate planDate;

    @Column(name = "part_code", nullable = false, length = 40)
    private String partCode;

    @Column(name = "gross_requirement", nullable = false, precision = 18, scale = 4)
    private BigDecimal grossRequirement;

    @Column(name = "on_hand", nullable = false, precision = 18, scale = 4)
    private BigDecimal onHand;

    @Column(name = "scheduled_receipts", nullable = false, precision = 18, scale = 4)
    private BigDecimal scheduledReceipts;

    @Column(name = "net_shortage", nullable = false, precision = 18, scale = 4)
    private BigDecimal netShortage;

    @Column(length = 20)
    @Builder.Default
    private String action = "NONE"; // NONE, ORDER, EXPEDITE
}
