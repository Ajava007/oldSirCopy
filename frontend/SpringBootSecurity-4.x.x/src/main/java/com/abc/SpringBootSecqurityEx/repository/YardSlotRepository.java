package com.abc.SpringBootSecqurityEx.repository;

import com.abc.SpringBootSecqurityEx.entity.YardSlot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface YardSlotRepository extends JpaRepository<YardSlot, Long> {
    List<YardSlot> findAllByOrderByRowCodeAscSlotNumberAsc();
    Optional<YardSlot> findByRowCodeAndSlotNumber(String rowCode, Integer slotNumber);
    Optional<YardSlot> findFirstByStatusOrderByIdAsc(String status);
    Optional<YardSlot> findByVin(String vin);
}
