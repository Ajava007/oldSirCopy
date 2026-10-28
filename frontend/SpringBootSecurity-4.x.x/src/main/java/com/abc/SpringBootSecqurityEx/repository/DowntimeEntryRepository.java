package com.abc.SpringBootSecqurityEx.repository;

import com.abc.SpringBootSecqurityEx.entity.DowntimeEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DowntimeEntryRepository extends JpaRepository<DowntimeEntry, Long> {
    List<DowntimeEntry> findByAssetCodeAndEndTimeIsNotNull(String assetCode);
    List<DowntimeEntry> findByEndTimeIsNotNull();
}
