package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.QualityDtos;
import com.abc.SpringBootSecqurityEx.entity.Defect;
import com.abc.SpringBootSecqurityEx.entity.Inspection;
import com.abc.SpringBootSecqurityEx.repository.DefectRepository;
import com.abc.SpringBootSecqurityEx.repository.InspectionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class InspectionService {

    private static final AtomicLong DEFECT_SEQ = new AtomicLong(1);

    private final InspectionRepository inspectionRepository;
    private final DefectRepository defectRepository;

    public InspectionService(InspectionRepository inspectionRepository, DefectRepository defectRepository) {
        this.inspectionRepository = inspectionRepository;
        this.defectRepository = defectRepository;
    }

    @Transactional(readOnly = true)
    public Page<QualityDtos.InspectionResponse> findAll(Pageable pageable) {
        return inspectionRepository.findAll(pageable).map(this::toResponse);
    }

    @Transactional(readOnly = true)
    public Page<QualityDtos.DefectResponse> findDefects(Pageable pageable) {
        return defectRepository.findAll(pageable).map(d -> new QualityDtos.DefectResponse(
                d.getId(), d.getDefectNumber(), d.getInspectionId(), d.getVin(), d.getPartCode(),
                d.getDescription(), d.getSeverity(), d.getStatus(), d.getCreatedAt()));
    }

    @Transactional(readOnly = true)
    public List<QualityDtos.InspectionResponse> findByVin(String vin) {
        return inspectionRepository.findByVin(vin).stream().map(this::toResponse).toList();
    }

    @Transactional
    public QualityDtos.InspectionResponse record(QualityDtos.InspectionRequest req) {
        if (inspectionRepository.existsByInspectionNumber(req.inspectionNumber())) {
            throw new IllegalStateException("Inspection number already exists: " + req.inspectionNumber());
        }
        Inspection insp = Inspection.builder()
                .inspectionNumber(req.inspectionNumber()).type(req.type().toUpperCase())
                .vin(req.vin()).partCode(req.partCode()).woNumber(req.woNumber())
                .inspectorName(req.inspectorName()).result(req.result().toUpperCase())
                .notes(req.notes()).inspectedAt(LocalDateTime.now()).build();
        insp = inspectionRepository.save(insp);

        // Spec §19: failed inspection automatically creates a defect
        if ("FAIL".equals(insp.getResult())) {
            Defect defect = Defect.builder()
                    .defectNumber("DEF-" + String.format("%05d", DEFECT_SEQ.getAndIncrement()))
                    .inspectionId(insp.getId()).vin(insp.getVin()).partCode(insp.getPartCode())
                    .description("Auto-created from failed inspection " + insp.getInspectionNumber())
                    .severity("MAJOR").status("OPEN").build();
            defectRepository.save(defect);
        }
        return toResponse(insp);
    }

    private QualityDtos.InspectionResponse toResponse(Inspection i) {
        return new QualityDtos.InspectionResponse(i.getId(), i.getInspectionNumber(), i.getType(), i.getVin(),
                i.getPartCode(), i.getWoNumber(), i.getInspectorName(), i.getResult(), i.getNotes(),
                i.getInspectedAt(), i.getCreatedAt());
    }
}
