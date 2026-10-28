package com.abc.SpringBootSecqurityEx.service;


import com.abc.SpringBootSecqurityEx.dtos.SalesDtos;
import com.abc.SpringBootSecqurityEx.entity.Customer;
import com.abc.SpringBootSecqurityEx.entity.Dealer;
import com.abc.SpringBootSecqurityEx.repository.CustomerRepository;
import com.abc.SpringBootSecqurityEx.repository.DealerRepository;
import com.abc.SpringBootSecqurityEx.repository.YardSlotRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SalesMasterService {

    private final CustomerRepository customerRepository;
    private final DealerRepository dealerRepository;
    private final YardSlotRepository yardSlotRepository;

    public SalesMasterService(CustomerRepository customerRepository, DealerRepository dealerRepository,
                              YardSlotRepository yardSlotRepository) {
        this.customerRepository = customerRepository;
        this.dealerRepository = dealerRepository;
        this.yardSlotRepository = yardSlotRepository;
    }

    @Transactional(readOnly = true)
    public Page<SalesDtos.CustomerResponse> customers(Pageable pageable) {
        return customerRepository.findAll(pageable).map(c ->
                new SalesDtos.CustomerResponse(c.getId(), c.getName(), c.getEmail(), c.getPhone(), c.getAddress(), c.getCreatedAt()));
    }

    @Transactional
    public SalesDtos.CustomerResponse createCustomer(SalesDtos.CustomerRequest req) {
        if (customerRepository.existsByEmail(req.email())) {
            throw new IllegalStateException("Customer email already exists: " + req.email());
        }
        Customer c = Customer.builder().name(req.name()).email(req.email()).phone(req.phone()).address(req.address()).build();
        c = customerRepository.save(c);
        return new SalesDtos.CustomerResponse(c.getId(), c.getName(), c.getEmail(), c.getPhone(), c.getAddress(), c.getCreatedAt());
    }

    @Transactional(readOnly = true)
    public Page<SalesDtos.DealerResponse> dealers(Pageable pageable) {
        return dealerRepository.findAll(pageable).map(d ->
                new SalesDtos.DealerResponse(d.getId(), d.getCode(), d.getName(), d.getCity(), d.getContactEmail(), d.getStatus(), d.getCreatedAt()));
    }

    @Transactional
    public SalesDtos.DealerResponse createDealer(SalesDtos.DealerRequest req) {
        if (dealerRepository.existsByCode(req.code())) {
            throw new IllegalStateException("Dealer code already exists: " + req.code());
        }
        Dealer d = Dealer.builder().code(req.code()).name(req.name()).city(req.city())
                .contactEmail(req.contactEmail()).status(req.status() != null ? req.status() : "ACTIVE").build();
        d = dealerRepository.save(d);
        return new SalesDtos.DealerResponse(d.getId(), d.getCode(), d.getName(), d.getCity(), d.getContactEmail(), d.getStatus(), d.getCreatedAt());
    }

    @Transactional(readOnly = true)
    public List<SalesDtos.YardSlotResponse> yardMap() {
        return yardSlotRepository.findAllByOrderByRowCodeAscSlotNumberAsc().stream()
                .map(s -> new SalesDtos.YardSlotResponse(s.getId(), s.getRowCode(), s.getSlotNumber(), s.getVin(), s.getStatus()))
                .toList();
    }
}
