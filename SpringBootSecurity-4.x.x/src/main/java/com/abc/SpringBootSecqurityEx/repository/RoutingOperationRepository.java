package com.abc.SpringBootSecqurityEx.repository;

import com.abc.SpringBootSecqurityEx.entity.RoutingOperation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoutingOperationRepository extends JpaRepository<RoutingOperation, Long> {
    List<RoutingOperation> findByModelCodeOrderByOperationNumberAsc(String modelCode);
    boolean existsByModelCodeAndOperationNumber(String modelCode, Integer operationNumber);
}
