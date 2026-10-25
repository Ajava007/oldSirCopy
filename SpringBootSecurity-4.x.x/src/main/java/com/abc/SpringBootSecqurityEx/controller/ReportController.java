package com.abc.SpringBootSecqurityEx.controller;

import com.veynax.common.dto.ApiResponse;
import com.veynax.reports.entity.GeneratedReport;
import com.veynax.reports.service.ReportService;
import io.swagger.v3.oas.annotations.tags.Tag;
import net.sf.jasperreports.engine.JRException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/reports")
@Tag(name = "Reports", description = "JasperReports PDF generation with audit log")
public class ReportController {

    private final ReportService reportService;

    public ReportController(ReportService reportService) { this.reportService = reportService; }

    @GetMapping("/history")
    public ResponseEntity<ApiResponse<Page<GeneratedReport>>> history(
            @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size) {
        return ResponseEntity.ok(ApiResponse.ok(reportService.history(PageRequest.of(page, size)), "Report history retrieved"));
    }

    @GetMapping(value = "/vin-genealogy", produces = MediaType.APPLICATION_PDF_VALUE)
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<byte[]> vinGenealogy(
            @RequestParam String vin,
            @RequestParam(required = false) String model,
            @RequestParam(required = false) String buildDate,
            @RequestParam(required = false) String qualityStatus,
            Authentication auth) throws JRException {
        String user = auth != null ? auth.getName() : "anonymous";
        byte[] pdf = reportService.generateVinReport(vin, model, buildDate, qualityStatus, user);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentDispositionFormData("attachment", "vin-genealogy-" + vin + ".pdf");
        return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF).body(pdf);
    }
}
