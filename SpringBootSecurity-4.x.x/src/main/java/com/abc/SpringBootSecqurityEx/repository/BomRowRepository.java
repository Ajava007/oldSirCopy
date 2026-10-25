package com.abc.SpringBootSecqurityEx.repository;


import com.abc.SpringBootSecqurityEx.entity.BomRow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BomRowRepository extends JpaRepository<BomRow, Long> {
    List<BomRow> findByParentPartCodeOrderByLevelAscComponentPartCodeAsc(String parentPartCode);
    boolean existsByParentPartCodeAndComponentPartCode(String parentPartCode, String componentPartCode);
}
