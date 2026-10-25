package com.abc.SpringBootSecqurityEx.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "asset", uniqueConstraints = {
        @UniqueConstraint(name = "uk_asset_code", columnNames = "asset_code")
})
public class Asset extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "asset_code", nullable = false, length = 30)
    private String assetCode;

    @Column(nullable = false, length = 150)
    private String name;

    @Column(nullable = false, length = 20)
    @Builder.Default
    private String level = "MACHINE"; // FACTORY, AREA, LINE, MACHINE, COMPONENT

    @Column(name = "parent_id")
    private Long parentId;

    @Column(length = 30)
    private String lineCode;

    @Column(nullable = false, length = 20)
    @Builder.Default
    private String status = "OPERATIONAL"; // OPERATIONAL, DEGRADED, OUT_OF_SERVICE, MAINTENANCE
}
