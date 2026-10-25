package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.InventoryDtos;
import com.abc.SpringBootSecqurityEx.entity.InventoryItem;
import com.abc.SpringBootSecqurityEx.entity.MrpRun;
import com.abc.SpringBootSecqurityEx.repository.InventoryItemRepository;
import com.abc.SpringBootSecqurityEx.repository.MrpRunRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class MrpService {

    private final InventoryItemRepository itemRepository;
    private final MrpRunRepository mrpRunRepository;

    public MrpService(InventoryItemRepository itemRepository, MrpRunRepository mrpRunRepository) {
        this.itemRepository = itemRepository;
        this.mrpRunRepository = mrpRunRepository;
    }

    @Transactional
    public List<InventoryDtos.MrpResultResponse> calculate(InventoryDtos.MrpRequest req) {
        String runNumber = "MRP-" + req.planDate().format(DateTimeFormatter.ofPattern("yyyyMMdd")) + "-" + System.currentTimeMillis() % 10000;
        List<InventoryDtos.MrpResultResponse> results = req.demand().stream().map(line -> {
            BigDecimal onHand = totalOnHand(line.partCode());
            BigDecimal receipts = line.scheduledReceipts() != null ? line.scheduledReceipts() : BigDecimal.ZERO;
            // Net shortage = gross requirement - on hand - scheduled receipts (negative means surplus)
            BigDecimal net = line.grossRequirement().subtract(onHand).subtract(receipts);
            String action = net.compareTo(BigDecimal.ZERO) > 0
                    ? (net.compareTo(line.grossRequirement().multiply(new BigDecimal("0.5"))) > 0 ? "EXPEDITE" : "ORDER")
                    : "NONE";
            MrpRun run = MrpRun.builder()
                    .runNumber(runNumber).planDate(req.planDate()).partCode(line.partCode())
                    .grossRequirement(line.grossRequirement()).onHand(onHand).scheduledReceipts(receipts)
                    .netShortage(net.max(BigDecimal.ZERO)).action(action).build();
            mrpRunRepository.save(run);
            return new InventoryDtos.MrpResultResponse(runNumber, req.planDate(), line.partCode(), line.grossRequirement(),
                    onHand, receipts, net, action);
        }).toList();
        return results;
    }

    @Transactional(readOnly = true)
    public List<InventoryDtos.MrpResultResponse> findByRun(String runNumber) {
        return mrpRunRepository.findByRunNumberOrderByNetShortageDesc(runNumber).stream()
                .map(r -> new InventoryDtos.MrpResultResponse(r.getRunNumber(), r.getPlanDate(), r.getPartCode(),
                        r.getGrossRequirement(), r.getOnHand(), r.getScheduledReceipts(), r.getNetShortage(), r.getAction()))
                .toList();
    }

    private BigDecimal totalOnHand(String partCode) {
        return itemRepository.findByPartCode(partCode).stream()
                .filter(i -> "AVAILABLE".equals(i.getStatus()))
                .map(InventoryItem::getOnHand)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}
