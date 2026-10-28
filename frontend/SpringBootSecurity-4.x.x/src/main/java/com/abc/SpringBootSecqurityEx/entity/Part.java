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
@Table(name = "part", uniqueConstraints = {
        @UniqueConstraint(name = "uk_part_code", columnNames = "part_code")
})
public class Part extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "part_code", nullable = false, length = 40)
    private String partCode;

    @Column(nullable = false, length = 150)
    private String name;

    @Column(length = 500)
    private String description;

    @Column(nullable = false, length = 10)
    private String uom;

    @Column(nullable = false, length = 30)
    @Builder.Default
    private String category = "PURCHASED"; // RAW, PURCHASED, SUBASSEMBLY, ASSEMBLY

    @Column(name = "standard_cost", precision = 18, scale = 4)
    private BigDecimal standardCost;

    @Column(length = 10)
    private String revision;

    @Column(nullable = false, length = 20)
    @Builder.Default
    private String status = "DRAFT"; // DRAFT, ACTIVE, OBSOLETE
}
