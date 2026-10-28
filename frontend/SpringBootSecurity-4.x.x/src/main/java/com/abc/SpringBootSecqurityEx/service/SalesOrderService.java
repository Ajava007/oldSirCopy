package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.MaintenanceDtos;
import com.abc.SpringBootSecqurityEx.dtos.SalesDtos;
import com.abc.SpringBootSecqurityEx.entity.SalesOrder;
import com.abc.SpringBootSecqurityEx.entity.SalesPayment;
import com.abc.SpringBootSecqurityEx.repository.CustomerRepository;
import com.abc.SpringBootSecqurityEx.repository.SalesPaymentRepository;
import com.abc.SpringBootSecqurityEx.repository.SalesOrderRepository;
import com.abc.SpringBootSecqurityEx.repository.YardSlotRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.Set;

@Service
public class SalesOrderService {

    // Spec §25: Customer Order → Approval → Reservation → Allocation → Dispatch → Delivery
    private static final Map<String, Set<String>> ALLOWED = Map.of(
            "DRAFT",     Set.of("CONFIRMED", "CANCELLED"),
            "CONFIRMED", Set.of("ALLOCATED", "CANCELLED"),
            "ALLOCATED", Set.of("DISPATCHED", "CANCELLED"),
            "DISPATCHED", Set.of("DELIVERED"),
            "DELIVERED", Set.of(),
            "CANCELLED", Set.of()
    );

    private final SalesOrderRepository soRepository;
    private final SalesPaymentRepository paymentRepository;
    private final CustomerRepository customerRepository;
    private final YardSlotRepository yardSlotRepository;

    public SalesOrderService(SalesOrderRepository soRepository, SalesPaymentRepository paymentRepository, CustomerRepository customerRepository,
                             YardSlotRepository yardSlotRepository) {
        this.soRepository = soRepository;
        this.paymentRepository = paymentRepository;
        this.customerRepository = customerRepository;
        this.yardSlotRepository = yardSlotRepository;
    }

    @Transactional(readOnly = true)
    public Page<SalesDtos.SalesOrderResponse> findAll(Pageable pageable) {
        return soRepository.findAll(pageable).map(this::toResponse);
    }

    @Transactional
    public SalesDtos.SalesOrderResponse create(SalesDtos.SalesOrderRequest req) {
        if (soRepository.existsBySoNumber(req.soNumber())) {
            throw new IllegalStateException("Sales order number already exists: " + req.soNumber());
        }
        if (!customerRepository.existsById(req.customerId())) {
            throw new EntityNotFoundException("Customer not found: " + req.customerId());
        }
        SalesOrder so = SalesOrder.builder()
                .soNumber(req.soNumber()).customerId(req.customerId()).dealerCode(req.dealerCode())
                .modelCode(req.modelCode()).orderDate(req.orderDate()).totalAmount(req.totalAmount())
                .status("DRAFT").paymentStatus("PENDING").build();
        return toResponse(soRepository.save(so));
    }

    @Transactional
    public SalesDtos.SalesOrderResponse allocate(Long id, SalesDtos.AllocateRequest req) {
        SalesOrder so = soRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Sales order not found: " + id));
        if (!"CONFIRMED".equals(so.getStatus())) {
            throw new IllegalStateException("Only CONFIRMED orders can be allocated. Current: " + so.getStatus());
        }
        // Spec §25: prevent double allocation — one VIN = one active order
        soRepository.findByVinAndStatusNot(req.vin(), "CANCELLED").ifPresent(existing -> {
            throw new IllegalStateException("VIN " + req.vin() + " is already allocated to order " + existing.getSoNumber());
        });
        so.setVin(req.vin());
        so.setStatus("ALLOCATED");
        // Auto-assign first empty yard slot
        yardSlotRepository.findFirstByStatusOrderByIdAsc("EMPTY").ifPresent(slot -> {
            slot.setVin(req.vin());
            slot.setStatus("OCCUPIED");
            yardSlotRepository.save(slot);
        });
        return toResponse(soRepository.save(so));
    }

    @Transactional
    public SalesDtos.SalesOrderResponse transition(Long id, MaintenanceDtos.TransitionRequest req) {
        SalesOrder so = soRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Sales order not found: " + id));
        String target = req.targetStatus().toUpperCase();
        Set<String> allowed = ALLOWED.getOrDefault(so.getStatus(), Set.of());
        if (!allowed.contains(target)) {
            throw new IllegalStateException("Invalid SO transition: " + so.getStatus() + " → " + target
                    + ". Allowed: " + allowed);
        }
        // Spec §25: cannot dispatch until paid (configurable rule)
        if ("DISPATCHED".equals(target) && !"PAID".equals(so.getPaymentStatus())) {
            throw new IllegalStateException("Cannot dispatch — payment status is " + so.getPaymentStatus() + ". Payment required.");
        }
        LocalDateTime now = LocalDateTime.now();
        so.setStatus(target);
        if ("DISPATCHED".equals(target)) {
            so.setDispatchedAt(now);
            // Release yard slot on dispatch
            if (so.getVin() != null) {
                yardSlotRepository.findByVin(so.getVin()).ifPresent(slot -> {
                    slot.setVin(null);
                    slot.setStatus("EMPTY");
                    yardSlotRepository.save(slot);
                });
            }
        }
        if ("DELIVERED".equals(target)) so.setDeliveredAt(now);
        return toResponse(soRepository.save(so));
    }

    @Transactional
    public SalesDtos.SalesOrderResponse markPaid(Long id) {
        SalesOrder so = soRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Sales order not found: " + id));
        BigDecimal paid = paymentRepository.totalPaid(id);
        BigDecimal amount = so.getTotalAmount().subtract(paid);
        if (amount.signum() <= 0) throw new IllegalStateException("This sales order is already paid.");
        recordPayment(id, new SalesDtos.PaymentRequest(amount, "MANUAL", "Legacy mark-paid action"));
        return toResponse(soRepository.findById(id).orElseThrow());
    }

    @Transactional(readOnly = true)
    public java.util.List<SalesDtos.PaymentResponse> paymentHistory(Long orderId) {
        if (!soRepository.existsById(orderId)) throw new EntityNotFoundException("Sales order not found: " + orderId);
        return paymentRepository.findBySalesOrderIdOrderByCreatedAtDesc(orderId).stream().map(this::toPaymentResponse).toList();
    }

    @Transactional
    public SalesDtos.PaymentResponse recordPayment(Long orderId, SalesDtos.PaymentRequest request) {
        SalesOrder order = soRepository.findById(orderId)
                .orElseThrow(() -> new EntityNotFoundException("Sales order not found: " + orderId));
        BigDecimal total = order.getTotalAmount();
        if (total == null || total.signum() <= 0) throw new IllegalStateException("Enter a positive sales order amount before recording payment.");
        BigDecimal paid = paymentRepository.totalPaid(orderId);
        BigDecimal newPaid = paid.add(request.amount());
        if (newPaid.compareTo(total) > 0) throw new IllegalStateException("Payment exceeds the remaining balance of " + total.subtract(paid) + ".");
        SalesPayment payment = paymentRepository.save(SalesPayment.builder()
                .salesOrder(order).amount(request.amount()).method(request.method().trim().toUpperCase())
                .reference(request.reference()).status("RECORDED").build());
        order.setPaymentStatus(newPaid.compareTo(total) == 0 ? "PAID" : "PARTIAL");
        soRepository.save(order);
        return toPaymentResponse(payment);
    }

    private SalesDtos.PaymentResponse toPaymentResponse(SalesPayment payment) {
        return new SalesDtos.PaymentResponse(payment.getId(), payment.getSalesOrder().getId(),
                payment.getSalesOrder().getSoNumber(), payment.getAmount(), payment.getMethod(),
                payment.getReference(), payment.getStatus(), payment.getCreatedAt());
    }

    private SalesDtos.SalesOrderResponse toResponse(SalesOrder s) {
        return new SalesDtos.SalesOrderResponse(s.getId(), s.getSoNumber(), s.getCustomerId(), s.getDealerCode(),
                s.getVin(), s.getModelCode(), s.getOrderDate(), s.getTotalAmount(), s.getStatus(),
                s.getPaymentStatus(), s.getDispatchedAt(), s.getDeliveredAt(), s.getCreatedAt());
    }
}
