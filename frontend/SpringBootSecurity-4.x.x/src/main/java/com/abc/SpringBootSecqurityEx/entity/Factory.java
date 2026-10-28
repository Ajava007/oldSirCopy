package com.abc.SpringBootSecqurityEx.entity;


import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "factory", uniqueConstraints = {
        @UniqueConstraint(name = "uk_factory_code", columnNames = {"organization_id", "code"})
})
public class Factory extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "organization_id", nullable = false)
    private Long organizationId;

    @Column(nullable = false, length = 30)
    private String code;

    @Column(nullable = false, length = 150)
    private String name;

    @Column(length = 200)
    private String location;

    @Column(name = "time_zone", length = 50)
    private String timeZone;

    @Column(nullable = false, length = 20)
    @Builder.Default
    private String status = "ACTIVE";
}
