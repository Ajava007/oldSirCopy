package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.WorkforceDtos;
import com.abc.SpringBootSecqurityEx.entity.Certification;
import com.abc.SpringBootSecqurityEx.entity.Employee;
import com.abc.SpringBootSecqurityEx.repository.CertificationRepository;
import com.abc.SpringBootSecqurityEx.repository.EmployeeRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
public class WorkforceService {

    private static final long EXPIRY_WARNING_DAYS = 30;

    private final EmployeeRepository employeeRepository;
    private final CertificationRepository certRepository;

    public WorkforceService(EmployeeRepository employeeRepository, CertificationRepository certRepository) {
        this.employeeRepository = employeeRepository;
        this.certRepository = certRepository;
    }

    @Transactional
    public WorkforceDtos.CertificationResponse issueCert(WorkforceDtos.CertificationRequest req) {
        if (!employeeRepository.existsById(req.employeeId())) {
            throw new EntityNotFoundException("Employee not found: " + req.employeeId());
        }
        certRepository.findByEmployeeIdAndSkillCode(req.employeeId(), req.skillCode()).ifPresent(c -> {
            throw new IllegalStateException("Employee already certified for " + req.skillCode() + ". Renew instead.");
        });
        Certification cert = Certification.builder()
                .employeeId(req.employeeId()).skillCode(req.skillCode().toUpperCase())
                .level(req.level() != null ? req.level().toUpperCase() : "BASIC")
                .issuedDate(req.issuedDate()).expiryDate(req.expiryDate())
                .status(computeStatus(req.expiryDate())).build();
        cert = certRepository.save(cert);
        return toResponse(cert);
    }

    @Transactional(readOnly = true)
    public List<WorkforceDtos.CertificationResponse> certsForEmployee(Long employeeId) {
        return certRepository.findByEmployeeId(employeeId).stream().map(this::toResponse).toList();
    }

    // Spec §27: only certified personnel can perform specific operations.
    @Transactional(readOnly = true)
    public WorkforceDtos.QualificationResponse checkQualification(Long employeeId, String skillCode) {
        Employee emp = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new EntityNotFoundException("Employee not found: " + employeeId));
        if (!"ACTIVE".equals(emp.getStatus())) {
            return new WorkforceDtos.QualificationResponse(employeeId, emp.getFullName(), skillCode, false,
                    "Employee status is " + emp.getStatus());
        }
        return certRepository.findByEmployeeIdAndSkillCode(employeeId, skillCode.toUpperCase())
                .map(cert -> {
                    String status = computeStatus(cert.getExpiryDate());
                    if ("EXPIRED".equals(status)) {
                        return new WorkforceDtos.QualificationResponse(employeeId, emp.getFullName(), skillCode, false,
                                "Certification expired on " + cert.getExpiryDate());
                    }
                    return new WorkforceDtos.QualificationResponse(employeeId, emp.getFullName(), skillCode, true,
                            "Certified at " + cert.getLevel() + " level" + ("EXPIRING".equals(status) ? " (expiring soon)" : ""));
                })
                .orElseGet(() -> new WorkforceDtos.QualificationResponse(employeeId, emp.getFullName(), skillCode, false,
                        "No certification for skill " + skillCode));
    }

    @Transactional(readOnly = true)
    public List<WorkforceDtos.CertificationResponse> expiringSoon() {
        return certRepository.findAll().stream()
                .filter(c -> "EXPIRING".equals(computeStatus(c.getExpiryDate())))
                .map(this::toResponse).toList();
    }

    private String computeStatus(LocalDate expiry) {
        if (expiry == null) return "VALID";
        LocalDate today = LocalDate.now();
        if (expiry.isBefore(today)) return "EXPIRED";
        if (expiry.isBefore(today.plusDays(EXPIRY_WARNING_DAYS))) return "EXPIRING";
        return "VALID";
    }

    private WorkforceDtos.CertificationResponse toResponse(Certification c) {
        return new WorkforceDtos.CertificationResponse(c.getId(), c.getEmployeeId(), c.getSkillCode(), c.getLevel(),
                c.getIssuedDate(), c.getExpiryDate(), computeStatus(c.getExpiryDate()), c.getCreatedAt());
    }
}
