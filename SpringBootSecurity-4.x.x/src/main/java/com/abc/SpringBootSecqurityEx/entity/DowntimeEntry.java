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
@Table(name = "downtime_entry")
public class DowntimeEntry extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "asset_code", nullable = false, length = 30)
    private String assetCode;

    @Column(name = "line_code", length = 30)
    private String lineCode;

    @Column(name = "start_time", nullable = false)
    private LocalDateTime startTime;

    @Column(name = "end_time")
    private LocalDateTime endTime;

    @Column(name = "duration_min")
    private Integer durationMin;

    @Column(nullable = false, length = 30)
    private String category; // MECHANICAL, ELECTRICAL, MATERIAL_SHORTAGE, QUALITY_HOLD, CHANGEOVER, TOOLING, OPERATOR, UTILITY, PLANNING, OTHER

    @Column(length = 300)
    private String reason;

    @Column(name = "mwo_number", length = 30)
    private String mwoNumber;
}
