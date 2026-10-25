package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.QualityDtos;
import com.abc.SpringBootSecqurityEx.entity.Inspection;
import com.abc.SpringBootSecqurityEx.repository.DefectRepository;
import com.abc.SpringBootSecqurityEx.repository.InspectionRepository;
import com.abc.SpringBootSecqurityEx.repository.NcrRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class QualityGateService {

    private final InspectionRepository inspectionRepository;
    private final DefectRepository defectRepository;
    private final NcrRepository ncrRepository;

    public QualityGateService(InspectionRepository inspectionRepository, DefectRepository defectRepository,
                              NcrRepository ncrRepository) {
        this.inspectionRepository = inspectionRepository;
        this.defectRepository = defectRepository;
        this.ncrRepository = ncrRepository;
    }

    // Spec §19: a failed vehicle cannot be dispatched.
    @Transactional(readOnly = true)
    public QualityDtos.GateCheckResponse check(String vin) {
        List<String> reasons = new ArrayList<>();

        List<Inspection> finals = inspectionRepository.findByVin(vin).stream()
                .filter(i -> "FINAL".equals(i.getType())).toList();
        boolean finalPassed = finals.stream().anyMatch(i -> "PASS".equals(i.getResult()));
        if (finals.isEmpty()) {
            reasons.add("No FINAL inspection recorded for this VIN.");
        } else if (!finalPassed) {
            reasons.add("FINAL inspection result is FAIL.");
        }

        long openDefects = defectRepository.countByVinAndStatusNot(vin, "SCRAPPED");
        if (openDefects > 0) {
            reasons.add(openDefects + " open/unresolved defect(s) exist.");
        }

        long openNcrs = ncrRepository.countByVinAndStatusNot(vin, "CLOSED");
        if (openNcrs > 0) {
            reasons.add(openNcrs + " open NCR(s) exist. All must be CLOSED before release.");
        }

        return new QualityDtos.GateCheckResponse(vin, reasons.isEmpty(), reasons, openDefects, openNcrs, finalPassed);
    }
}
