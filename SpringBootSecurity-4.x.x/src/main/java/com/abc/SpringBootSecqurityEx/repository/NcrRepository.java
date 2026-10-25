package com.abc.SpringBootSecqurityEx.repository;

import com.abc.SpringBootSecqurityEx.entity.NcrRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NcrRepository extends JpaRepository<NcrRecord, Long> {
    List<NcrRecord> findByVin(String vin);
    long countByVinAndStatusNot(String vin, String status);
    boolean existsByNcrNumber(String ncrNumber);
}
