package com.abc.SpringBootSecqurityEx.repository;

import com.abc.SpringBootSecqurityEx.entity.SalesPayment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;

public interface SalesPaymentRepository extends JpaRepository<SalesPayment, Long> {
    List<SalesPayment> findBySalesOrderIdOrderByCreatedAtDesc(Long salesOrderId);

    @Query("select coalesce(sum(p.amount), 0) from SalesPayment p where p.salesOrder.id = :salesOrderId")
    BigDecimal totalPaid(@Param("salesOrderId") Long salesOrderId);
}
