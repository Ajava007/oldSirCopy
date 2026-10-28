package com.abc.SpringBootSecqurityEx.service;

import com.abc.SpringBootSecqurityEx.entity.*;
import com.abc.SpringBootSecqurityEx.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/** Adds a small, readable first-run dataset to empty business tables. Existing rows are preserved. */
@Component
@Order(2)
public class OperationalDataInitializer implements CommandLineRunner {
    private static final int ROWS = 20;
    private static final String BRAND = "Northstar Motors";

    private final OrganizationRepository organizations;
    private final FactoryRepository factories;
    private final VehicleModelRepository models;
    private final PartRepository parts;
    private final BomRowRepository bomRows;
    private final RoutingOperationRepository routes;
    private final SupplierRepository suppliers;
    private final PurchaseOrderRepository purchaseOrders;
    private final InventoryItemRepository inventory;
    private final StockTransactionRepository stockTransactions;
    private final MrpRunRepository mrpRuns;
    private final ProductionPlanRepository plans;
    private final WorkOrderRepository workOrders;
    private final WorkOrderOperationRepository workOrderOperations;
    private final InspectionRepository inspections;
    private final DefectRepository defects;
    private final NcrRepository ncrs;
    private final EmployeeRepository employees;
    private final CertificationRepository certifications;
    private final ShiftAssignmentRepository shifts;
    private final AssetRepository assets;
    private final MaintenanceWorkOrderRepository maintenanceOrders;
    private final DowntimeEntryRepository downtime;
    private final CustomerRepository customers;
    private final DealerRepository dealers;
    private final SalesOrderRepository salesOrders;
    private final YardSlotRepository yardSlots;
    private final GeneratedReportRepository reports;

    public OperationalDataInitializer(
            OrganizationRepository organizations, FactoryRepository factories, VehicleModelRepository models,
            PartRepository parts, BomRowRepository bomRows, RoutingOperationRepository routes,
            SupplierRepository suppliers, PurchaseOrderRepository purchaseOrders,
            InventoryItemRepository inventory, StockTransactionRepository stockTransactions, MrpRunRepository mrpRuns,
            ProductionPlanRepository plans, WorkOrderRepository workOrders, WorkOrderOperationRepository workOrderOperations,
            InspectionRepository inspections, DefectRepository defects, NcrRepository ncrs,
            EmployeeRepository employees, CertificationRepository certifications, ShiftAssignmentRepository shifts,
            AssetRepository assets, MaintenanceWorkOrderRepository maintenanceOrders, DowntimeEntryRepository downtime,
            CustomerRepository customers, DealerRepository dealers, SalesOrderRepository salesOrders,
            YardSlotRepository yardSlots, GeneratedReportRepository reports) {
        this.organizations = organizations;
        this.factories = factories;
        this.models = models;
        this.parts = parts;
        this.bomRows = bomRows;
        this.routes = routes;
        this.suppliers = suppliers;
        this.purchaseOrders = purchaseOrders;
        this.inventory = inventory;
        this.stockTransactions = stockTransactions;
        this.mrpRuns = mrpRuns;
        this.plans = plans;
        this.workOrders = workOrders;
        this.workOrderOperations = workOrderOperations;
        this.inspections = inspections;
        this.defects = defects;
        this.ncrs = ncrs;
        this.employees = employees;
        this.certifications = certifications;
        this.shifts = shifts;
        this.assets = assets;
        this.maintenanceOrders = maintenanceOrders;
        this.downtime = downtime;
        this.customers = customers;
        this.dealers = dealers;
        this.salesOrders = salesOrders;
        this.yardSlots = yardSlots;
        this.reports = reports;
    }

    @Override
    @Transactional
    public void run(String... args) {
        seedOrganizations();
        seedFactories();
        seedModels();
        seedParts();
        seedBillOfMaterials();
        seedRoutes();
        seedSuppliers();
        seedPurchaseOrders();
        seedInventory();
        seedStockTransactions();
        seedMrp();
        seedProductionPlans();
        seedWorkOrders();
        seedInspections();
        seedDefectsAndNcrs();
        seedEmployeesAndShifts();
        seedMaintenance();
        seedSales();
        seedReports();
    }

    private void seedOrganizations() {
        if (organizations.count() > 0) return;
        List<Organization> rows = new ArrayList<>();
        for (int i = 1; i <= ROWS; i++) rows.add(Organization.builder()
                .code(code("ORG", i)).name(site(i) + " Motor Group")
                .country(country(i)).address(city(i) + " Industrial Road").status("ACTIVE").build());
        organizations.saveAll(rows);
    }

    private void seedFactories() {
        if (factories.count() > 0) return;
        List<Organization> orgRows = organizations.findAll();
        List<Factory> rows = new ArrayList<>();
        for (int i = 1; i <= ROWS; i++) rows.add(Factory.builder()
                .organizationId(orgRows.get((i - 1) % orgRows.size()).getId())
                .code(code("PLANT", i)).name(city(i) + " Assembly Plant")
                .location(city(i) + ", " + country(i)).timeZone("UTC").status("ACTIVE").build());
        factories.saveAll(rows);
    }

    private void seedModels() {
        if (models.count() > 0) return;
        List<VehicleModel> rows = new ArrayList<>();
        for (int i = 1; i <= ROWS; i++) rows.add(VehicleModel.builder()
                .modelCode(code("AUTO", i)).modelName(vehicleName(i)).brand(BRAND)
                .vehicleType(i % 3 == 0 ? "Van" : i % 2 == 0 ? "SUV" : "Car")
                .segment(i % 2 == 0 ? "Family" : "City").modelYear(String.valueOf(LocalDate.now().getYear()))
                .fuelType(i % 4 == 0 ? "Electric" : "Hybrid").transmission("Automatic")
                .basePrice(new BigDecimal(18000 + i * 850)).status("ACTIVE").build());
        models.saveAll(rows);
    }

    private void seedParts() {
        if (parts.count() > 0) return;
        String[] names = {"Brake Pad", "Oil Filter", "Air Filter", "Wheel", "Door Panel", "Seat Belt", "Head Light", "Battery", "Mirror", "Radiator", "Fuel Pump", "Spark Plug", "Wiper Blade", "Steering Rack", "Floor Mat", "Window Glass", "Door Handle", "Fan Belt", "Coolant Hose", "Safety Sensor"};
        List<Part> rows = new ArrayList<>();
        for (int i = 1; i <= ROWS; i++) rows.add(Part.builder()
                .partCode(code("PART", i)).name(names[i - 1])
                .description(names[i - 1] + " for " + BRAND + " vehicles")
                .uom("EA").category(i % 5 == 0 ? "ASSEMBLY" : "PURCHASED")
                .standardCost(new BigDecimal(12 + i * 7)).revision("A").status("ACTIVE").build());
        parts.saveAll(rows);
    }

    private void seedBillOfMaterials() {
        if (bomRows.count() > 0) return;
        List<BomRow> rows = new ArrayList<>();
        for (int i = 1; i <= ROWS; i++) rows.add(BomRow.builder()
                .parentPartCode(code("AUTO", 1)).componentPartCode(code("PART", i))
                .quantity(BigDecimal.valueOf(i % 4 == 0 ? 4 : 1)).scrapFactor(new BigDecimal("0.02"))
                .optional(false).level(1).effectiveFrom(LocalDate.now().minusDays(30))
                .remark("Install " + (i % 4 == 0 ? 4 : 1) + " " + partName(i) + " on each vehicle.").build());
        bomRows.saveAll(rows);
    }

    private void seedRoutes() {
        if (routes.count() > 0) return;
        String[] steps = {"Check order", "Prepare frame", "Fit doors", "Fit seats", "Fit wheels", "Fit brakes", "Fit lights", "Fit battery", "Fit engine", "Connect wires", "Fill fluids", "Check windows", "Set wheel angle", "Test brakes", "Test lights", "Road test", "Check noise", "Clean vehicle", "Final check", "Move to yard"};
        List<RoutingOperation> rows = new ArrayList<>();
        for (int i = 1; i <= ROWS; i++) rows.add(RoutingOperation.builder()
                .modelCode(code("AUTO", 1)).operationNumber(i * 10).operationName(steps[i - 1])
                .workCenter("Line " + ((i - 1) % 4 + 1)).setupTimeSec(60)
                .cycleTimeSec(180 + i * 10).instructions("Complete " + steps[i - 1].toLowerCase() + " and record the result.").build());
        routes.saveAll(rows);
    }

    private void seedSuppliers() {
        if (suppliers.count() > 0) return;
        String[] names = {"Clear Road Parts", "North Star Metals", "Bright Beam Lights", "Safe Drive Belts", "City Wheel Works", "Green Power Cells", "Fresh Air Filters", "Cool Engine Parts", "Easy Glass Supply", "Good Grip Rubber", "Fast Stop Brakes", "Clean Flow Pumps", "Strong Seat Works", "Open Road Sensors", "Blue Line Wires", "Quiet Ride Parts", "Front Gate Tools", "Simple Fit Plastics", "Ready Stock Supply", "Daily Ship Goods"};
        List<Supplier> rows = new ArrayList<>();
        for (int i = 1; i <= ROWS; i++) rows.add(Supplier.builder()
                .code(code("SUP", i)).company(names[i - 1]).category(category(i))
                .country(country(i)).rating(new BigDecimal("4.0"))
                .contactEmail("orders" + i + "@supplier.example").phone("+1-555-01" + String.format("%02d", i))
                .status("ACTIVE").build());
        suppliers.saveAll(rows);
    }

    private void seedPurchaseOrders() {
        if (purchaseOrders.count() > 0) return;
        List<PurchaseOrder> rows = new ArrayList<>();
        for (int i = 1; i <= ROWS; i++) {
            PurchaseOrder po = PurchaseOrder.builder().poNumber(code("PO", i)).supplierCode(code("SUP", i))
                    .orderDate(LocalDate.now().minusDays(i)).status(i % 3 == 0 ? "APPROVED" : "SUBMITTED")
                    .totalAmount(new BigDecimal(250 + i * 125)).currency("USD")
                    .requestedBy("Buyer " + i).notes("Order " + i + " for vehicle parts.").items(new ArrayList<>()).build();
            BigDecimal unitPrice = new BigDecimal(25 + i * 4);
            int quantity = i % 5 + 1;
            po.setTotalAmount(unitPrice.multiply(BigDecimal.valueOf(quantity)));
            po.getItems().add(PurchaseOrderItem.builder().purchaseOrder(po).partCode(code("PART", i))
                    .description(partName(i)).quantity(quantity).unitPrice(unitPrice).build());
            rows.add(po);
        }
        purchaseOrders.saveAll(rows);
    }

    private void seedInventory() {
        if (inventory.count() > 0) return;
        List<InventoryItem> rows = new ArrayList<>();
        for (int i = 1; i <= ROWS; i++) rows.add(InventoryItem.builder()
                .partCode(code("PART", i)).warehouse("Main Warehouse").location("Rack " + ((i - 1) % 5 + 1))
                .lotNumber(code("LOT", i)).onHand(BigDecimal.valueOf(40 + i * 5))
                .reserved(BigDecimal.valueOf(i % 6)).status("AVAILABLE").build());
        inventory.saveAll(rows);
    }

    private void seedStockTransactions() {
        if (stockTransactions.count() > 0) return;
        List<StockTransaction> rows = new ArrayList<>();
        for (int i = 1; i <= ROWS; i++) rows.add(StockTransaction.builder()
                .partCode(code("PART", i)).warehouse("Main Warehouse").txnType("RECEIPT")
                .quantity(BigDecimal.valueOf(40 + i * 5)).referenceType("PO").referenceId(code("PO", i))
                .remark("Received " + partName(i) + " from supplier.").build());
        stockTransactions.saveAll(rows);
    }

    private void seedMrp() {
        if (mrpRuns.count() > 0) return;
        List<MrpRun> rows = new ArrayList<>();
        for (int i = 1; i <= ROWS; i++) {
            BigDecimal need = BigDecimal.valueOf(20 + i * 2);
            BigDecimal onHand = BigDecimal.valueOf(40 + i * 5);
            rows.add(MrpRun.builder().runNumber("MRP-STARTER-001").planDate(LocalDate.now())
                    .partCode(code("PART", i)).grossRequirement(need).onHand(onHand)
                    .scheduledReceipts(BigDecimal.ZERO).netShortage(BigDecimal.ZERO).action("NONE").build());
        }
        mrpRuns.saveAll(rows);
    }

    private void seedProductionPlans() {
        if (plans.count() > 0) return;
        List<ProductionPlan> rows = new ArrayList<>();
        for (int i = 1; i <= ROWS; i++) rows.add(ProductionPlan.builder()
                .planNumber(code("PLAN", i)).factoryCode(code("PLANT", i)).modelCode(code("AUTO", i))
                .quantity(10 + i).lineCode("Line " + ((i - 1) % 4 + 1))
                .plannedStart(LocalDate.now().plusDays(i)).plannedFinish(LocalDate.now().plusDays(i + 7))
                .status(i < 4 ? "IN_PROGRESS" : "PLANNED").build());
        plans.saveAll(rows);
    }

    private void seedWorkOrders() {
        if (workOrders.count() > 0) return;
        List<WorkOrder> rows = new ArrayList<>();
        for (int i = 1; i <= ROWS; i++) rows.add(WorkOrder.builder()
                .woNumber(code("WO", i)).planNumber(code("PLAN", i)).modelCode(code("AUTO", i))
                .lineCode("Line " + ((i - 1) % 4 + 1)).targetQuantity(10 + i)
                .producedQuantity(i < 4 ? i * 2 : 0).rejectedQuantity(i % 7 == 0 ? 1 : 0)
                .status(i < 4 ? "IN_PROGRESS" : "RELEASED")
                .generatedVinFrom(vin(i)).generatedVinTo(vin(i)).build());
        List<WorkOrder> saved = workOrders.saveAll(rows);
        List<WorkOrderOperation> operations = new ArrayList<>();
        for (WorkOrder wo : saved) operations.add(WorkOrderOperation.builder()
                .woId(wo.getId()).operationNumber(10).operationName("Final vehicle check")
                .workCenter(wo.getLineCode()).status("PENDING").build());
        workOrderOperations.saveAll(operations);
    }

    private void seedInspections() {
        if (inspections.count() > 0) return;
        List<Inspection> rows = new ArrayList<>();
        for (int i = 1; i <= ROWS; i++) rows.add(Inspection.builder()
                .inspectionNumber(code("CHECK", i)).type(i % 3 == 0 ? "INCOMING" : "FINAL")
                .vin(vin(i)).partCode(code("PART", i)).woNumber(code("WO", i))
                .inspectorName("Inspector " + i).result(i % 8 == 0 ? "FAIL" : "PASS")
                .notes(i % 8 == 0 ? "Light needs a second check." : "Checked and ready.")
                .inspectedAt(LocalDateTime.now().minusDays(i)).build());
        inspections.saveAll(rows);
    }

    private void seedDefectsAndNcrs() {
        if (defects.count() == 0) {
            List<Inspection> checkRows = inspections.findAll();
            List<Defect> rows = new ArrayList<>();
            for (int i = 1; i <= ROWS; i++) rows.add(Defect.builder()
                    .defectNumber(code("ISSUE", i)).inspectionId(checkRows.get((i - 1) % checkRows.size()).getId())
                    .vin(vin(i)).partCode(code("PART", i)).description("Check fit and finish on " + partName(i) + ".")
                    .severity(i % 5 == 0 ? "MAJOR" : "MINOR").status(i % 4 == 0 ? "REWORKED" : "OPEN").build());
            defects.saveAll(rows);
        }
        if (ncrs.count() > 0) return;
        List<Defect> defectRows = defects.findAll();
        List<NcrRecord> rows = new ArrayList<>();
        for (int i = 1; i <= ROWS; i++) rows.add(NcrRecord.builder()
                .ncrNumber(code("NCR", i)).defectId(defectRows.get((i - 1) % defectRows.size()).getId())
                .vin(vin(i)).status(i % 4 == 0 ? "RESOLVED" : "OPEN")
                .containment("Hold the vehicle until the part is checked.")
                .rootCause(i % 4 == 0 ? "Part was not fitted evenly." : null)
                .correctiveAction(i % 4 == 0 ? "Refit and check again." : null).build());
        ncrs.saveAll(rows);
    }

    private void seedEmployeesAndShifts() {
        if (employees.count() == 0) {
            List<Employee> rows = new ArrayList<>();
            for (int i = 1; i <= ROWS; i++) rows.add(Employee.builder()
                    .employeeCode(code("WORKER", i)).fullName("Worker " + i)
                    .email("worker" + i + "@northstar.example").phone("+1-555-02" + String.format("%02d", i))
                    .department(department(i)).factoryCode(code("PLANT", i)).hireDate(LocalDate.now().minusDays(400 + i))
                    .status("ACTIVE").build());
            employees.saveAll(rows);
        }
        List<Employee> people = employees.findAll();
        if (certifications.count() == 0) {
            List<Certification> rows = new ArrayList<>();
            for (int i = 1; i <= ROWS; i++) rows.add(Certification.builder()
                    .employeeId(people.get((i - 1) % people.size()).getId()).skillCode("VEHICLE_CHECK")
                    .level(i % 3 == 0 ? "ADVANCED" : "BASIC").issuedDate(LocalDate.now().minusDays(90))
                    .expiryDate(LocalDate.now().plusDays(275)).status("VALID").build());
            certifications.saveAll(rows);
        }
        if (shifts.count() > 0) return;
        List<ShiftAssignment> rows = new ArrayList<>();
        for (int i = 1; i <= ROWS; i++) rows.add(ShiftAssignment.builder()
                .employeeId(people.get((i - 1) % people.size()).getId()).shiftDate(LocalDate.now())
                .shift(i % 3 == 0 ? "NIGHT" : i % 2 == 0 ? "AFTERNOON" : "MORNING")
                .lineCode("Line " + ((i - 1) % 4 + 1)).workCenter("Assembly").build());
        shifts.saveAll(rows);
    }

    private void seedMaintenance() {
        if (assets.count() == 0) {
            List<Asset> rows = new ArrayList<>();
            for (int i = 1; i <= ROWS; i++) rows.add(Asset.builder()
                    .assetCode(code("MACHINE", i)).name(machineName(i)).level("MACHINE")
                    .lineCode("Line " + ((i - 1) % 4 + 1)).status("OPERATIONAL").build());
            assets.saveAll(rows);
        }
        if (maintenanceOrders.count() == 0) {
            List<MaintenanceWorkOrder> rows = new ArrayList<>();
            for (int i = 1; i <= ROWS; i++) rows.add(MaintenanceWorkOrder.builder()
                    .mwoNumber(code("REPAIR", i)).assetCode(code("MACHINE", i))
                    .type(i % 2 == 0 ? "PREVENTIVE" : "CORRECTIVE")
                    .status(i % 4 == 0 ? "COMPLETED" : "SCHEDULED")
                    .problem("Check " + machineName(i) + " and replace worn parts.")
                    .technician("Tech " + i).plannedDurationMin(60 + i * 5)
                    .scheduledStart(LocalDateTime.now().plusDays(i)).build());
            maintenanceOrders.saveAll(rows);
        }
        if (downtime.count() > 0) return;
        List<DowntimeEntry> rows = new ArrayList<>();
        for (int i = 1; i <= ROWS; i++) rows.add(DowntimeEntry.builder()
                .assetCode(code("MACHINE", i)).lineCode("Line " + ((i - 1) % 4 + 1))
                .startTime(LocalDateTime.now().minusDays(i)).endTime(LocalDateTime.now().minusDays(i).plusMinutes(20 + i))
                .durationMin(20 + i).category(i % 2 == 0 ? "MAINTENANCE" : "CHECK")
                .reason("Routine machine check.").mwoNumber(code("REPAIR", i)).build());
        downtime.saveAll(rows);
    }

    private void seedSales() {
        if (customers.count() == 0) {
            List<Customer> rows = new ArrayList<>();
            for (int i = 1; i <= ROWS; i++) rows.add(Customer.builder()
                    .name("Customer " + i).email("customer" + i + "@example.test")
                    .phone("+1-555-03" + String.format("%02d", i)).address(city(i) + " Main Street").build());
            customers.saveAll(rows);
        }
        if (dealers.count() == 0) {
            List<Dealer> rows = new ArrayList<>();
            for (int i = 1; i <= ROWS; i++) rows.add(Dealer.builder()
                    .code(code("DEALER", i)).name("Northstar Dealer " + i).city(city(i))
                    .contactEmail("sales" + i + "@dealer.example").status("ACTIVE").build());
            dealers.saveAll(rows);
        }
        if (salesOrders.count() == 0) {
            List<Customer> customerRows = customers.findAll();
            List<SalesOrder> rows = new ArrayList<>();
            for (int i = 1; i <= ROWS; i++) rows.add(SalesOrder.builder()
                    .soNumber(code("SALE", i)).customerId(customerRows.get((i - 1) % customerRows.size()).getId())
                    .dealerCode(code("DEALER", i)).vin(vin(i)).modelCode(code("AUTO", i))
                    .orderDate(LocalDate.now().minusDays(i)).totalAmount(new BigDecimal(20000 + i * 900))
                    .status(i <= 10 ? "ALLOCATED" : "CONFIRMED")
                    .paymentStatus(i % 3 == 0 ? "PAID" : "PENDING").build());
            salesOrders.saveAll(rows);
        }
        if (yardSlots.count() > 0) return;
        List<YardSlot> rows = new ArrayList<>();
        for (int i = 1; i <= ROWS; i++) rows.add(YardSlot.builder()
                .rowCode("ROW-" + ((i - 1) / 5 + 1)).slotNumber((i - 1) % 5 + 1)
                .vin(i <= 10 ? vin(i) : null).status(i <= 10 ? "OCCUPIED" : "EMPTY").build());
        yardSlots.saveAll(rows);
    }

    private void seedReports() {
        if (reports.count() > 0) return;
        List<GeneratedReport> rows = new ArrayList<>();
        for (int i = 1; i <= ROWS; i++) rows.add(GeneratedReport.builder()
                .reportKey(code("REPORT", i)).reportName(i % 2 == 0 ? "Daily Work Order Report" : "Stock Check Report")
                .format("PDF").parameters("{\"record\": " + i + "}")
                .generatedBy("System").fileSizeBytes(12000L + i * 250).build());
        reports.saveAll(rows);
    }

    private String code(String prefix, int number) { return prefix + "-" + String.format("%03d", number); }
    private String vin(int number) { return "NSM" + String.format("%05d", number); }
    private String vehicleName(int number) { return number % 3 == 0 ? "Family Van " + number : number % 2 == 0 ? "Family SUV " + number : "City Car " + number; }
    private String partName(int number) {
        String[] names = {"Brake Pad", "Oil Filter", "Air Filter", "Wheel", "Door Panel", "Seat Belt", "Head Light", "Battery", "Mirror", "Radiator", "Fuel Pump", "Spark Plug", "Wiper Blade", "Steering Rack", "Floor Mat", "Window Glass", "Door Handle", "Fan Belt", "Coolant Hose", "Safety Sensor"};
        return names[number - 1];
    }
    private String machineName(int number) { return number % 2 == 0 ? "Wheel Fitting Machine " + number : "Brake Test Machine " + number; }
    private String category(int number) { return number % 2 == 0 ? "Vehicle Parts" : "Safety Parts"; }
    private String department(int number) { return number % 3 == 0 ? "Quality" : number % 2 == 0 ? "Warehouse" : "Assembly"; }
    private String site(int number) { return number % 2 == 0 ? "East" : "North"; }
    private String country(int number) { return number % 2 == 0 ? "Canada" : "United States"; }
    private String city(int number) {
        String[] cities = {"Riverton", "Lakeview", "Fairview", "Oakwood", "Hillcrest", "Brookside", "Maplewood", "Kingston", "Franklin", "Georgetown"};
        return cities[(number - 1) % cities.length];
    }
}
