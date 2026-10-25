package com.abc.SpringBootSecqurityEx.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "sales_order", uniqueConstraints = {
        @UniqueConstraint(name = "uk_so_number", columnNames = "so_number")
})
public class SalesOrder extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "so_number", nullable = false, length = 30)
    private String soNumber;

    @Column(name = "customer_id", nullable = false)
    private Long customerId;

    @Column(name = "dealer_code", length = 30)
    private String dealerCode;

    @Column(name = "vin", length = 20)
    private String vin; // allocated VIN

    @Column(name = "model_code", nullable = false, length = 40)
    private String modelCode;

    @Column(name = "order_date", nullable = false)
    private LocalDate orderDate;

    @Column(name = "total_amount", precision = 18, scale = 2)
    private BigDecimal totalAmount;

    @Column(nullable = false, length = 20)
    @Builder.Default
    private String status = "DRAFT"; // DRAFT, CONFIRMED, ALLOCATED, DISPATCHED, DELIVERED, CANCELLED

    @Column(name = "payment_status", nullable = false, length = 20)
    @Builder.Default
    private String paymentStatus = "PENDING"; // PENDING, PAID, OVERDUE

    @Column(name = "dispatched_at")
    private LocalDateTime dispatchedAt;

    @Column(name = "delivered_at")
    private LocalDateTime deliveredAt;
}
