package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.entity.GeneratedReport;
import com.abc.SpringBootSecqurityEx.repository.GeneratedReportRepository;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.export.SimpleExporterInput;
import net.sf.jasperreports.export.SimpleOutputStreamExporterOutput;
import net.sf.jasperreports.pdf.JRPdfExporter;
import org.springframework.core.io.ClassPathResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

@Service
public class ReportService {

    private final GeneratedReportRepository reportRepository;

    public ReportService(GeneratedReportRepository reportRepository) {
        this.reportRepository = reportRepository;
    }

    @Transactional(readOnly = true)
    public Page<GeneratedReport> history(Pageable pageable) {
        return reportRepository.findAll(pageable);
    }

    // Spec §33: JasperReports PDF generation, audit-logged, parameterized.
    @Transactional
    public byte[] generateVinReport(String vin, String model, String buildDate, String qualityStatus, String generatedBy) throws JRException {
        Map<String, Object> params = new HashMap<>();
        params.put("vin", vin != null ? vin : "UNKNOWN");
        params.put("model", model != null ? model : "UNKNOWN");
        params.put("buildDate", buildDate != null ? buildDate : "UNKNOWN");
        params.put("qualityStatus", qualityStatus != null ? qualityStatus : "UNKNOWN");
        params.put("generatedAt", LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));

        InputStream template;
        try {
            template = new ClassPathResource("reports/vin_report.jrxml").getInputStream();
        } catch (java.io.IOException e) {
            throw new JRException("Report template not found: reports/vin_report.jrxml", e);
        }
        JasperReport compiled = JasperCompileManager.compileReport(template);
        JasperPrint print = JasperFillManager.fillReport(compiled, params, new JREmptyDataSource());

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        JRPdfExporter exporter = new JRPdfExporter();
        exporter.setExporterInput(new SimpleExporterInput(print));
        exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(out));
        exporter.exportReport();
        byte[] pdf = out.toByteArray();

        // Immutable audit log of every report generation
        reportRepository.save(GeneratedReport.builder()
                .reportKey("VIN_GENEALOGY").reportName("VIN Genealogy Certificate — " + vin)
                .format("PDF").generatedBy(generatedBy).fileSizeBytes((long) pdf.length)
                .parameters("vin=" + vin + ";model=" + model).build());
        return pdf;
    }
}
