package com.abc.SpringBootSecqurityEx.entity;


import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "generated_report")
public class GeneratedReport extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "report_key", nullable = false, length = 50)
    private String reportKey;

    @Column(name = "report_name", nullable = false, length = 150)
    private String reportName;

    @Column(nullable = false, length = 10)
    @Builder.Default
    private String format = "PDF";

    @Column(columnDefinition = "TEXT")
    private String parameters;

    @Column(name = "generated_by", length = 100)
    private String generatedBy;

    @Column(name = "file_size_bytes")
    private Long fileSizeBytes;
}
