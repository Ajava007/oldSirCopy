package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.WorkforceDtos;
import com.abc.SpringBootSecqurityEx.entity.ShiftAssignment;
import com.abc.SpringBootSecqurityEx.repository.EmployeeRepository;
import com.abc.SpringBootSecqurityEx.repository.ShiftAssignmentRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
public class ShiftService {

    private final ShiftAssignmentRepository shiftRepository;
    private final EmployeeRepository employeeRepository;

    public ShiftService(ShiftAssignmentRepository shiftRepository, EmployeeRepository employeeRepository) {
        this.shiftRepository = shiftRepository;
        this.employeeRepository = employeeRepository;
    }

    @Transactional
    public WorkforceDtos.ShiftResponse assign(WorkforceDtos.ShiftRequest req) {
        if (!employeeRepository.existsById(req.employeeId())) {
            throw new EntityNotFoundException("Employee not found: " + req.employeeId());
        }
        // Spec §27: conflict detection — one shift per employee per day
        if (shiftRepository.existsByEmployeeIdAndShiftDate(req.employeeId(), req.shiftDate())) {
            throw new IllegalStateException("Employee already has a shift on " + req.shiftDate());
        }
        ShiftAssignment s = ShiftAssignment.builder()
                .employeeId(req.employeeId()).shiftDate(req.shiftDate())
                .shift(req.shift().toUpperCase()).lineCode(req.lineCode()).workCenter(req.workCenter()).build();
        s = shiftRepository.save(s);
        return new WorkforceDtos.ShiftResponse(s.getId(), s.getEmployeeId(), s.getShiftDate(), s.getShift(),
                s.getLineCode(), s.getWorkCenter(), s.getCreatedAt());
    }

    @Transactional(readOnly = true)
    public List<WorkforceDtos.ShiftResponse> forDate(LocalDate date) {
        return shiftRepository.findByShiftDate(date).stream()
                .map(s -> new WorkforceDtos.ShiftResponse(s.getId(), s.getEmployeeId(), s.getShiftDate(), s.getShift(),
                        s.getLineCode(), s.getWorkCenter(), s.getCreatedAt()))
                .toList();
    }
}
