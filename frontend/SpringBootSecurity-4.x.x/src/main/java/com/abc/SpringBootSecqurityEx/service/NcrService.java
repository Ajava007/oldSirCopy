package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.QualityDtos;
import com.abc.SpringBootSecqurityEx.entity.NcrRecord;
import com.abc.SpringBootSecqurityEx.repository.NcrRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.Set;

@Service
public class NcrService {

    // Spec §19: NCR workflow — OPEN → INVESTIGATING → RESOLVED → VERIFIED → CLOSED
    private static final Map<String, Set<String>> ALLOWED = Map.of(
            "OPEN",          Set.of("INVESTIGATING", "CLOSED"),
            "INVESTIGATING", Set.of("RESOLVED"),
            "RESOLVED",      Set.of("VERIFIED"),
            "VERIFIED",      Set.of("CLOSED"),
            "CLOSED",        Set.of()
    );

    private final NcrRepository repository;

    public NcrService(NcrRepository repository) { this.repository = repository; }

    @Transactional(readOnly = true)
    public Page<QualityDtos.NcrResponse> findAll(Pageable pageable) {
        return repository.findAll(pageable).map(this::toResponse);
    }

    @Transactional
    public QualityDtos.NcrResponse create(QualityDtos.NcrRequest req) {
        if (repository.existsByNcrNumber(req.ncrNumber())) {
            throw new IllegalStateException("NCR number already exists: " + req.ncrNumber());
        }
        NcrRecord ncr = NcrRecord.builder()
                .ncrNumber(req.ncrNumber()).defectId(req.defectId()).vin(req.vin())
                .containment(req.containment()).status("OPEN").build();
        return toResponse(repository.save(ncr));
    }

    @Transactional
    public QualityDtos.NcrResponse transition(Long id, QualityDtos.NcrTransitionRequest req) {
        NcrRecord ncr = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("NCR not found: " + id));
        String target = req.targetStatus().toUpperCase();
        Set<String> allowed = ALLOWED.getOrDefault(ncr.getStatus(), Set.of());
        if (!allowed.contains(target)) {
            throw new IllegalStateException("Invalid NCR transition: " + ncr.getStatus() + " → " + target
                    + ". Allowed: " + allowed);
        }
        // Root cause required before RESOLVED; corrective action required before VERIFIED
        if ("RESOLVED".equals(target) && (req.rootCause() == null || req.rootCause().isBlank())) {
            throw new IllegalStateException("Root cause is required before RESOLVED.");
        }
        if ("VERIFIED".equals(target) && (req.correctiveAction() == null || req.correctiveAction().isBlank())) {
            throw new IllegalStateException("Corrective action is required before VERIFIED.");
        }
        ncr.setStatus(target);
        if (req.rootCause() != null) ncr.setRootCause(req.rootCause());
        if (req.correctiveAction() != null) ncr.setCorrectiveAction(req.correctiveAction());
        if ("CLOSED".equals(target)) ncr.setClosedAt(LocalDateTime.now());
        return toResponse(repository.save(ncr));
    }

    private QualityDtos.NcrResponse toResponse(NcrRecord n) {
        return new QualityDtos.NcrResponse(n.getId(), n.getNcrNumber(), n.getDefectId(), n.getVin(), n.getStatus(),
                n.getContainment(), n.getRootCause(), n.getCorrectiveAction(), n.getClosedAt(), n.getCreatedAt());
    }
}
