package com.abc.SpringBootSecqurityEx.repository;


import com.abc.SpringBootSecqurityEx.entity.ProductionPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductionPlanRepository extends JpaRepository<ProductionPlan, Long> {
    boolean existsByPlanNumber(String planNumber);
}
