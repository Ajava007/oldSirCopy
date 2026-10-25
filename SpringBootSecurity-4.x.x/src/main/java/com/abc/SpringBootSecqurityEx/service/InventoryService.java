package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.InventoryDtos;
import com.abc.SpringBootSecqurityEx.entity.InventoryItem;
import com.abc.SpringBootSecqurityEx.entity.StockTransaction;
import com.abc.SpringBootSecqurityEx.repository.InventoryItemRepository;
import com.abc.SpringBootSecqurityEx.repository.StockTransactionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

@Service
public class InventoryService {

    private static final Set<String> OUTBOUND_TYPES = Set.of("ISSUE", "SCRAP");
    private static final Set<String> INBOUND_TYPES = Set.of("RECEIPT", "ADJUST");

    private final InventoryItemRepository itemRepository;
    private final StockTransactionRepository txnRepository;

    public InventoryService(InventoryItemRepository itemRepository, StockTransactionRepository txnRepository) {
        this.itemRepository = itemRepository;
        this.txnRepository = txnRepository;
    }

    @Transactional(readOnly = true)
    public Page<InventoryDtos.InventoryItemResponse> findAll(Pageable pageable) {
        return itemRepository.findAll(pageable).map(this::toItemResponse);
    }

    @Transactional(readOnly = true)
    public List<InventoryDtos.StockTransactionResponse> findTransactions(String partCode) {
        return txnRepository.findByPartCodeOrderByCreatedAtDesc(partCode).stream().map(this::toTxnResponse).toList();
    }

    @Transactional
    public InventoryDtos.InventoryItemResponse adjust(InventoryDtos.StockAdjustRequest req) {
        String type = req.txnType().toUpperCase();
        if (!OUTBOUND_TYPES.contains(type) && !INBOUND_TYPES.contains(type)) {
            throw new IllegalStateException("Unsupported transaction type: " + type);
        }
        InventoryItem item = itemRepository
                .findByPartCodeAndWarehouseAndLotNumber(req.partCode(), req.warehouse(), req.lotNumber())
                .orElseGet(() -> InventoryItem.builder()
                        .partCode(req.partCode()).warehouse(req.warehouse()).lotNumber(req.lotNumber())
                        .onHand(BigDecimal.ZERO).reserved(BigDecimal.ZERO).status("AVAILABLE").build());

        if ("QUARANTINE".equals(item.getStatus()) || "BLOCKED".equals(item.getStatus())) {
            throw new IllegalStateException("Stock is " + item.getStatus() + " and cannot be moved.");
        }

        BigDecimal signedQty = OUTBOUND_TYPES.contains(type) ? req.quantity().negate() : req.quantity();
        BigDecimal newOnHand = item.getOnHand().add(signedQty);
        if (newOnHand.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalStateException("Insufficient stock: on hand " + item.getOnHand() + ", requested " + req.quantity());
        }
        item.setOnHand(newOnHand);

        // Immutable transaction log — append only
        txnRepository.save(StockTransaction.builder()
                .partCode(req.partCode()).warehouse(req.warehouse()).txnType(type)
                .quantity(signedQty).referenceType(req.referenceType()).referenceId(req.referenceId())
                .remark(req.remark()).build());

        return toItemResponse(itemRepository.save(item));
    }

    private InventoryDtos.InventoryItemResponse toItemResponse(InventoryItem i) {
        return new InventoryDtos.InventoryItemResponse(i.getId(), i.getPartCode(), i.getWarehouse(), i.getLocation(),
                i.getLotNumber(), i.getSerialNumber(), i.getOnHand(), i.getReserved(),
                i.getOnHand().subtract(i.getReserved()), i.getStatus(), i.getCreatedAt(), i.getUpdatedAt());
    }

    private InventoryDtos.StockTransactionResponse toTxnResponse(StockTransaction t) {
        return new InventoryDtos.StockTransactionResponse(t.getId(), t.getPartCode(), t.getWarehouse(), t.getTxnType(),
                t.getQuantity(), t.getReferenceType(), t.getReferenceId(), t.getRemark(), t.getCreatedAt());
    }
}
