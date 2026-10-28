package com.abc.SpringBootSecqurityEx.repository;


import com.abc.SpringBootSecqurityEx.entity.Asset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AssetRepository extends JpaRepository<Asset, Long> {
    boolean existsByAssetCode(String assetCode);
    List<Asset> findByParentId(Long parentId);
}
