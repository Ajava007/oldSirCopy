package com.abc.SpringBootSecqurityEx.repository;

import com.abc.SpringBootSecqurityEx.entity.WorkOrderOperation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkOrderOperationRepository extends JpaRepository<WorkOrderOperation, Long> {
    List<WorkOrderOperation> findByWoIdOrderByOperationNumberAsc(Long woId);
}
