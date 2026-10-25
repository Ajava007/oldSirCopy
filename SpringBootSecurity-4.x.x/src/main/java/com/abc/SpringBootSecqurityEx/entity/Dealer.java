package com.abc.SpringBootSecqurityEx.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "dealer", uniqueConstraints = {
        @UniqueConstraint(name = "uk_dealer_code", columnNames = "code")
})
public class Dealer extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 30)
    private String code;

    @Column(nullable = false, length = 150)
    private String name;

    @Column(length = 100)
    private String city;

    @Column(length = 120)
    private String contactEmail;

    @Column(nullable = false, length = 20)
    @Builder.Default
    private String status = "ACTIVE";
}
