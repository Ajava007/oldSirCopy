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
@Table(name = "inventory_item", uniqueConstraints = {
        @UniqueConstraint(name = "uk_inv_part_warehouse_lot", columnNames = {"part_code", "warehouse", "lot_number"})
})
public class InventoryItem extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "part_code", nullable = false, length = 40)
    private String partCode;

    @Column(nullable = false, length = 60)
    private String warehouse;

    @Column(length = 60)
    private String location;

    @Column(name = "lot_number", length = 40)
    private String lotNumber;

    @Column(name = "serial_number", length = 60)
    private String serialNumber;

    @Column(name = "on_hand", nullable = false, precision = 18, scale = 4)
    @Builder.Default
    private BigDecimal onHand = BigDecimal.ZERO;

    @Column(nullable = false, precision = 18, scale = 4)
    @Builder.Default
    private BigDecimal reserved = BigDecimal.ZERO;

    @Column(nullable = false, length = 20)
    @Builder.Default
    private String status = "AVAILABLE"; // AVAILABLE, QUARANTINE, BLOCKED
}
