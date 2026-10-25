package com.abc.SpringBootSecqurityEx.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "stock_transaction")
public class StockTransaction extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "part_code", nullable = false, length = 40)
    private String partCode;

    @Column(nullable = false, length = 60)
    private String warehouse;

    @Column(name = "txn_type", nullable = false, length = 20)
    private String txnType; // RECEIPT, ISSUE, TRANSFER, ADJUST, RESERVE, RELEASE, SCRAP

    @Column(nullable = false, precision = 18, scale = 4)
    private BigDecimal quantity; // signed: + for in, - for out

    @Column(name = "reference_type", length = 30)
    private String referenceType; // PO, WO, COUNT

    @Column(name = "reference_id", length = 40)
    private String referenceId;

    @Column(length = 300)
    private String remark;
}
