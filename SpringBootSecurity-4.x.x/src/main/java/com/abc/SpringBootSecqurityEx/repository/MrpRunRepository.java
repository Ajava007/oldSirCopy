package com.abc.SpringBootSecqurityEx.repository;

import com.abc.SpringBootSecqurityEx.entity.MrpRun;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MrpRunRepository extends JpaRepository<MrpRun, Long> {
    List<MrpRun> findByRunNumberOrderByNetShortageDesc(String runNumber);
}
