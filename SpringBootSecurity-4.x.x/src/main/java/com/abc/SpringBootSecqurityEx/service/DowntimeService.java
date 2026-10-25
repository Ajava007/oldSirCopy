package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.MaintenanceDtos;
import com.abc.SpringBootSecqurityEx.entity.DowntimeEntry;
import com.abc.SpringBootSecqurityEx.repository.DowntimeEntryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class DowntimeService {

    private final DowntimeEntryRepository repository;

    public DowntimeService(DowntimeEntryRepository repository) { this.repository = repository; }

    @Transactional
    public MaintenanceDtos.DowntimeResponse log(MaintenanceDtos.DowntimeRequest req) {
        DowntimeEntry entry = DowntimeEntry.builder()
                .assetCode(req.assetCode()).lineCode(req.lineCode()).startTime(req.startTime())
                .endTime(req.endTime()).category(req.category().toUpperCase())
                .reason(req.reason()).mwoNumber(req.mwoNumber()).build();
        if (req.endTime() != null) {
            entry.setDurationMin((int) ChronoUnit.MINUTES.between(req.startTime(), req.endTime()));
        }
        entry = repository.save(entry);
        return toResponse(entry);
    }

    @Transactional(readOnly = true)
    public List<MaintenanceDtos.DowntimeResponse> findAll() {
        return repository.findAll().stream().map(this::toResponse).toList();
    }

    // Spec §21: MTBF = total operating time / number of failures; MTTR = total downtime / number of failures
    @Transactional(readOnly = true)
    public List<MaintenanceDtos.ReliabilityResponse> reliability(String assetCode) {
        List<DowntimeEntry> entries = (assetCode != null)
                ? repository.findByAssetCodeAndEndTimeIsNotNull(assetCode)
                : repository.findByEndTimeIsNotNull();
        Map<String, List<DowntimeEntry>> byAsset = entries.stream()
                .collect(Collectors.groupingBy(DowntimeEntry::getAssetCode));
        // Assume 24h/day = 1440 min/day over a 30-day window as operating baseline
        final double OPERATING_WINDOW_MIN = 30.0 * 1440.0;
        return byAsset.entrySet().stream().map(e -> {
            long count = e.getValue().size();
            double totalDowntime = e.getValue().stream().mapToInt(d -> d.getDurationMin() != null ? d.getDurationMin() : 0).sum();
            double mtbf = count > 0 ? (OPERATING_WINDOW_MIN - totalDowntime) / count : OPERATING_WINDOW_MIN;
            double mttr = count > 0 ? totalDowntime / count : 0.0;
            return new MaintenanceDtos.ReliabilityResponse(e.getKey(), count, totalDowntime, mtbf, mttr);
        }).toList();
    }

    private MaintenanceDtos.DowntimeResponse toResponse(DowntimeEntry d) {
        return new MaintenanceDtos.DowntimeResponse(d.getId(), d.getAssetCode(), d.getLineCode(), d.getStartTime(),
                d.getEndTime(), d.getDurationMin(), d.getCategory(), d.getReason(), d.getMwoNumber(), d.getCreatedAt());
    }
}
