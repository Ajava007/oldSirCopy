package com.abc.SpringBootSecqurityEx.controller;


import com.abc.SpringBootSecqurityEx.dtos.ApiResponse;
import com.abc.SpringBootSecqurityEx.dtos.WorkforceDtos;
import com.abc.SpringBootSecqurityEx.entity.Employee;
import com.abc.SpringBootSecqurityEx.repository.EmployeeRepository;
import com.abc.SpringBootSecqurityEx.service.ShiftService;
import com.abc.SpringBootSecqurityEx.service.WorkforceService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/v1/workforce")
@Tag(name = "Workforce", description = "Employees, certifications/skills, shift assignments, qualification checks")
public class WorkforceController {

    private final EmployeeRepository employeeRepository;
    private final WorkforceService workforceService;
    private final ShiftService shiftService;

    public WorkforceController(EmployeeRepository employeeRepository, WorkforceService workforceService,
                               ShiftService shiftService) {
        this.employeeRepository = employeeRepository;
        this.workforceService = workforceService;
        this.shiftService = shiftService;
    }

    @GetMapping("/employees")
    public ResponseEntity<ApiResponse<Page<Employee>>> employees(
            @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(ApiResponse.ok(employeeRepository.findAll(pageable), "Employees retrieved"));
    }

    @PostMapping("/employees")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER','HR_MANAGER')")
    public ResponseEntity<ApiResponse<Employee>> createEmployee(@Valid @RequestBody WorkforceDtos.EmployeeRequest request) {
        if (employeeRepository.existsByEmployeeCode(request.employeeCode())) {
            throw new IllegalStateException("Employee code already exists: " + request.employeeCode());
        }
        Employee e = Employee.builder()
                .employeeCode(request.employeeCode()).fullName(request.fullName()).email(request.email())
                .phone(request.phone()).department(request.department()).factoryCode(request.factoryCode())
                .hireDate(request.hireDate()).status(request.status() != null ? request.status() : "ACTIVE").build();
        return ResponseEntity.ok(ApiResponse.ok(employeeRepository.save(e), "Employee created"));
    }

    @GetMapping("/certifications/{employeeId}")
    public ResponseEntity<ApiResponse<List<WorkforceDtos.CertificationResponse>>> certs(@PathVariable Long employeeId) {
        return ResponseEntity.ok(ApiResponse.ok(workforceService.certsForEmployee(employeeId), "Certifications retrieved"));
    }

    @PostMapping("/certifications")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER','HR_MANAGER')")
    public ResponseEntity<ApiResponse<WorkforceDtos.CertificationResponse>> issueCert(@Valid @RequestBody WorkforceDtos.CertificationRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(workforceService.issueCert(request), "Certification issued"));
    }

    @GetMapping("/certifications/expiring-soon")
    public ResponseEntity<ApiResponse<List<WorkforceDtos.CertificationResponse>>> expiringSoon() {
        return ResponseEntity.ok(ApiResponse.ok(workforceService.expiringSoon(), "Certifications expiring within 30 days"));
    }

    @GetMapping("/qualification/check")
    public ResponseEntity<ApiResponse<WorkforceDtos.QualificationResponse>> checkQualification(
            @RequestParam Long employeeId, @RequestParam String skillCode) {
        return ResponseEntity.ok(ApiResponse.ok(workforceService.checkQualification(employeeId, skillCode), "Qualification check result"));
    }

    @GetMapping("/shifts")
    public ResponseEntity<ApiResponse<List<WorkforceDtos.ShiftResponse>>> shifts(@RequestParam LocalDate date) {
        return ResponseEntity.ok(ApiResponse.ok(shiftService.forDate(date), "Shift roster for date"));
    }

    @PostMapping("/shifts")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN','FACTORY_ADMIN','MANAGER','HR_MANAGER')")
    public ResponseEntity<ApiResponse<WorkforceDtos.ShiftResponse>> assignShift(@Valid @RequestBody WorkforceDtos.ShiftRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(shiftService.assign(request), "Shift assigned — conflict-checked"));
    }
}
