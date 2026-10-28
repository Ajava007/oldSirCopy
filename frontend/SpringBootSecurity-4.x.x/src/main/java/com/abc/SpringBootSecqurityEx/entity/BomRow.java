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
@Table(name = "bom_row", uniqueConstraints = {
        @UniqueConstraint(name = "uk_bom_parent_component", columnNames = {"parent_part_code", "component_part_code", "effective_from"})
})
public class BomRow extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "parent_part_code", nullable = false, length = 40)
    private String parentPartCode;

    @Column(name = "component_part_code", nullable = false, length = 40)
    private String componentPartCode;

    @Column(nullable = false, precision = 18, scale = 4)
    @Builder.Default
    private BigDecimal quantity = BigDecimal.ONE;

    @Column(name = "scrap_factor", precision = 5, scale = 4)
    @Builder.Default
    private BigDecimal scrapFactor = BigDecimal.ZERO;

    @Column(name = "is_optional", nullable = false)
    @Builder.Default
    private boolean optional = false;

    @Column(nullable = false)
    @Builder.Default
    private Integer level = 1;

    @Column(name = "effective_from")
    private LocalDate effectiveFrom;

    @Column(name = "effective_to")
    private LocalDate effectiveTo;

    @Column(length = 500)
    private String remark;
}
