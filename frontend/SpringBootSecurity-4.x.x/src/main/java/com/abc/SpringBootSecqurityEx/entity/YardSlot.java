package com.abc.SpringBootSecqurityEx.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "yard_slot", uniqueConstraints = {
        @UniqueConstraint(name = "uk_yard_slot", columnNames = {"row_code", "slot_number"})
})
public class YardSlot extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "row_code", nullable = false, length = 10)
    private String rowCode;

    @Column(name = "slot_number", nullable = false)
    private Integer slotNumber;

    @Column(name = "vin", length = 20)
    private String vin; // occupied by this VIN, null = empty

    @Column(nullable = false, length = 20)
    @Builder.Default
    private String status = "EMPTY"; // EMPTY, OCCUPIED, QUARANTINE
}
