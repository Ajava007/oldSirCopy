import {
  signal,
  ɵɵdefineInjectable
} from "./chunk-UYLOIQ7B.js";

// src/app/core/services/mock-data.service.ts
var MockDataService = class _MockDataService {
  constructor() {
    this.organizations = signal([
      { id: 1, code: "VXN", name: "VeynaX Automotive Corp", country: "Germany", address: "Stuttgart", status: "ACTIVE" },
      { id: 2, code: "VXN-IN", name: "VeynaX India Pvt Ltd", country: "India", address: "Pune", status: "ACTIVE" }
    ]);
    this.factories = signal([
      { id: 1, organizationId: 1, code: "PLANT-DE", name: "Stuttgart Assembly Plant", location: "Stuttgart, DE", timeZone: "Europe/Berlin", status: "ACTIVE" },
      { id: 2, organizationId: 2, code: "PLANT-IN", name: "Pune Assembly Plant", location: "Pune, IN", timeZone: "Asia/Kolkata", status: "ACTIVE" }
    ]);
    this.vehicleModels = signal([
      { id: 1, modelCode: "SUVX-2026", modelName: "VeynaX SUV X", brand: "VeynaX", vehicleType: "SUV", segment: "Mid-size", modelYear: "2026", fuelType: "Hybrid", transmission: "8AT", basePrice: 38500, status: "ACTIVE" },
      { id: 2, modelCode: "SED-2026", modelName: "VeynaX Sedan S", brand: "VeynaX", vehicleType: "Sedan", segment: "Compact", modelYear: "2026", fuelType: "Petrol", transmission: "7DCT", basePrice: 27900, status: "ACTIVE" },
      { id: 3, modelCode: "EVX-2027", modelName: "VeynaX EV X", brand: "VeynaX", vehicleType: "Electric", segment: "Mid-size", modelYear: "2027", fuelType: "Electric", transmission: "Single-speed", basePrice: 52e3, status: "DRAFT" }
    ]);
    this.parts = [
      { id: 1, code: "ENG-2.0T", name: "2.0L Turbo Engine", category: "Engine", uom: "EA", cost: 3200, status: "ACTIVE" },
      { id: 2, code: "TRN-8AT", name: "8-Speed Automatic Transmission", category: "Powertrain", uom: "EA", cost: 1800, status: "ACTIVE" },
      { id: 3, code: "BAT-75KWH", name: "75 kWh Battery Pack", category: "Electrical", uom: "EA", cost: 8400, status: "ACTIVE" },
      { id: 4, code: "BDY-DOOR-FL", name: "Front Left Door Assembly", category: "Body", uom: "EA", cost: 420, status: "ACTIVE" },
      { id: 5, code: "INT-SEAT-L", name: "Leather Seat Set", category: "Interior", uom: "SET", cost: 950, status: "ACTIVE" },
      { id: 6, code: "ECU-ENG", name: "Engine Control Unit", category: "Electronics", uom: "EA", cost: 380, status: "ACTIVE" },
      { id: 7, code: "TIR-235-55R18", name: "All-Season Tire 235/55 R18", category: "Tires", uom: "EA", cost: 145, status: "ACTIVE" },
      { id: 8, code: "CHS-FRAME", name: "Chassis Frame", category: "Body", uom: "EA", cost: 1100, status: "ACTIVE" },
      { id: 9, code: "INF-12IN", name: '12" Infotainment Unit', category: "Electronics", uom: "EA", cost: 520, status: "ACTIVE" },
      { id: 10, code: "EXH-CAT", name: "Catalytic Converter", category: "Powertrain", uom: "EA", cost: 610, status: "ACTIVE" }
    ];
    this.bom = [
      { level: 0, code: "SUVX-2026", name: "VeynaX SUV X (Finished Vehicle)", qty: 1, uom: "EA", type: "Vehicle" },
      { level: 1, code: "PW-TRAIN", name: "Powertrain System", qty: 1, uom: "SET", type: "Subassembly" },
      { level: 2, code: "ENG-2.0T", name: "2.0L Turbo Engine", qty: 1, uom: "EA", type: "Component" },
      { level: 2, code: "TRN-8AT", name: "8-Speed Auto Transmission", qty: 1, uom: "EA", type: "Component" },
      { level: 2, code: "EXH-CAT", name: "Catalytic Converter", qty: 1, uom: "EA", type: "Component" },
      { level: 1, code: "BODY-SYS", name: "Body System", qty: 1, uom: "SET", type: "Subassembly" },
      { level: 2, code: "CHS-FRAME", name: "Chassis Frame", qty: 1, uom: "EA", type: "Component" },
      { level: 2, code: "BDY-DOOR-FL", name: "Front Left Door", qty: 1, uom: "EA", type: "Component" },
      { level: 1, code: "ELEC-SYS", name: "Electrical System", qty: 1, uom: "SET", type: "Subassembly" },
      { level: 2, code: "ECU-ENG", name: "Engine Control Unit", qty: 1, uom: "EA", type: "Component" },
      { level: 2, code: "BAT-75KWH", name: "75 kWh Battery (hybrid assist)", qty: 1, uom: "EA", type: "Component" },
      { level: 1, code: "INT-SYS", name: "Interior System", qty: 1, uom: "SET", type: "Subassembly" },
      { level: 2, code: "INT-SEAT-L", name: "Leather Seat Set", qty: 1, uom: "SET", type: "Component" },
      { level: 2, code: "INF-12IN", name: '12" Infotainment', qty: 1, uom: "EA", type: "Component" },
      { level: 1, code: "TIR-WHL", name: "Wheels & Tires", qty: 1, uom: "SET", type: "Subassembly" },
      { level: 2, code: "TIR-235-55R18", name: "All-Season Tire", qty: 5, uom: "EA", type: "Component" }
    ];
    this.routing = [
      { seq: 10, name: "Stamping", workCenter: "WC-STAMP-01", machine: "Press-2500T", setupMin: 45, cycleMin: 1.2 },
      { seq: 20, name: "Body Welding", workCenter: "WC-BODY-01", machine: "RobotLine-A", setupMin: 60, cycleMin: 2.4 },
      { seq: 30, name: "Painting", workCenter: "WC-PAINT-01", machine: "PaintBooth-3", setupMin: 90, cycleMin: 4.1 },
      { seq: 40, name: "Engine Assembly", workCenter: "WC-ENG-01", machine: "EngineAssy-1", setupMin: 30, cycleMin: 3 },
      { seq: 50, name: "Trim & Final Assembly", workCenter: "WC-FINAL-01", machine: "ConveyorLine-1", setupMin: 20, cycleMin: 2.8 },
      { seq: 60, name: "Diagnostics & Testing", workCenter: "WC-TEST-01", machine: "DynoTest-2", setupMin: 10, cycleMin: 1.8 },
      { seq: 70, name: "Final Inspection", workCenter: "WC-QA-01", machine: "Manual", setupMin: 5, cycleMin: 2.2 }
    ];
    this.suppliers = [
      { id: 1, code: "SUP-BOSCH", company: "Bosch GmbH", category: "Electronics", country: "Germany", rating: 4.7, status: "APPROVED" },
      { id: 2, code: "SUP-CONTI", company: "Continental AG", category: "Tires", country: "Germany", rating: 4.5, status: "APPROVED" },
      { id: 3, code: "SUP-LG", company: "LG Energy Solution", category: "Battery", country: "South Korea", rating: 4.6, status: "APPROVED" },
      { id: 4, code: "SUP-MAGNA", company: "Magna Steyr", category: "Body", country: "Austria", rating: 4.3, status: "APPROVED" },
      { id: 5, code: "SUP-ZF", company: "ZF Friedrichshafen", category: "Transmission", country: "Germany", rating: 4.8, status: "APPROVED" },
      { id: 6, code: "SUP-DENSO", company: "Denso Corp", category: "Engine Components", country: "Japan", rating: 4.4, status: "PROBATION" }
    ];
    this.purchaseOrders = [
      { id: "PO-2026-0011", supplier: "Bosch GmbH", date: "2026-09-20", total: 152e3, status: "RECEIVED", items: 3 },
      { id: "PO-2026-0012", supplier: "LG Energy Solution", date: "2026-09-21", total: 84e4, status: "PARTIAL", items: 1 },
      { id: "PO-2026-0013", supplier: "Continental AG", date: "2026-09-22", total: 58e3, status: "OPEN", items: 2 },
      { id: "PO-2026-0014", supplier: "ZF Friedrichshafen", date: "2026-09-23", total: 27e4, status: "OPEN", items: 1 },
      { id: "PO-2026-0015", supplier: "Magna Steyr", date: "2026-09-24", total: 96e3, status: "APPROVED", items: 4 }
    ];
    this.stock = [
      { id: 1, partCode: "ENG-2.0T", name: "2.0L Turbo Engine", warehouse: "WH-PLANT-DE", onHand: 42, reserved: 15, uom: "EA", value: 134400 },
      { id: 2, partCode: "TRN-8AT", name: "8-Speed Transmission", warehouse: "WH-PLANT-DE", onHand: 38, reserved: 15, uom: "EA", value: 68400 },
      { id: 3, partCode: "BAT-75KWH", name: "75 kWh Battery Pack", warehouse: "WH-PLANT-DE", onHand: 12, reserved: 10, uom: "EA", value: 100800 },
      { id: 4, partCode: "TIR-235-55R18", name: "All-Season Tire", warehouse: "WH-PLANT-DE", onHand: 320, reserved: 75, uom: "EA", value: 46400 },
      { id: 5, partCode: "ECU-ENG", name: "Engine Control Unit", warehouse: "WH-PLANT-DE", onHand: 55, reserved: 15, uom: "EA", value: 20900 },
      { id: 6, partCode: "INT-SEAT-L", name: "Leather Seat Set", warehouse: "WH-PLANT-IN", onHand: 24, reserved: 8, uom: "SET", value: 22800 }
    ];
    this.stockTxns = [
      { id: "TXN-9001", date: "2026-09-25 08:12", type: "RECEIPT", partCode: "ECU-ENG", qty: 20, warehouse: "WH-PLANT-DE", ref: "GRN-4412" },
      { id: "TXN-9002", date: "2026-09-25 09:40", type: "ISSUE", partCode: "ENG-2.0T", qty: -5, warehouse: "WH-PLANT-DE", ref: "WO-2026-007" },
      { id: "TXN-9003", date: "2026-09-25 10:15", type: "RESERVATION", partCode: "BAT-75KWH", qty: -3, warehouse: "WH-PLANT-DE", ref: "WO-2026-008" },
      { id: "TXN-9004", date: "2026-09-25 11:02", type: "TRANSFER", partCode: "TIR-235-55R18", qty: 40, warehouse: "WH-PLANT-DE", ref: "TRF-118" },
      { id: "TXN-9005", date: "2026-09-25 13:30", type: "SCRAP", partCode: "BDY-DOOR-FL", qty: -2, warehouse: "WH-PLANT-DE", ref: "SCRAP-33" }
    ];
    this.mrp = [
      { partCode: "ENG-2.0T", name: "2.0L Turbo Engine", required: 60, onHand: 42, reserved: 15, incoming: 10, shortage: 23 },
      { partCode: "TRN-8AT", name: "8-Speed Transmission", required: 60, onHand: 38, reserved: 15, incoming: 20, shortage: 17 },
      { partCode: "BAT-75KWH", name: "75 kWh Battery Pack", required: 30, onHand: 12, reserved: 10, incoming: 40, shortage: 0 },
      { partCode: "TIR-235-55R18", name: "All-Season Tire", required: 300, onHand: 320, reserved: 75, incoming: 0, shortage: 55 },
      { partCode: "ECU-ENG", name: "Engine Control Unit", required: 60, onHand: 55, reserved: 15, incoming: 20, shortage: 0 }
    ];
    this.productionPlans = [
      { id: "PP-2026-W39", model: "SUVX-2026", qty: 240, line: "Line-A", start: "2026-09-22", end: "2026-09-28", status: "IN_PROGRESS" },
      { id: "PP-2026-W39-B", model: "SED-2026", qty: 180, line: "Line-B", start: "2026-09-22", end: "2026-09-28", status: "IN_PROGRESS" },
      { id: "PP-2026-W40", model: "SUVX-2026", qty: 260, line: "Line-A", start: "2026-09-29", end: "2026-10-05", status: "PLANNED" },
      { id: "PP-2026-W40-B", model: "EVX-2027", qty: 50, line: "Line-B", start: "2026-09-29", end: "2026-10-05", status: "PLANNED" }
    ];
    this.workOrders = [
      { id: "WO-2026-007", plan: "PP-2026-W39", model: "SUVX-2026", qty: 60, completed: 42, rejected: 2, line: "Line-A", status: "IN_PROGRESS" },
      { id: "WO-2026-008", plan: "PP-2026-W39", model: "SUVX-2026", qty: 60, completed: 18, rejected: 0, line: "Line-A", status: "IN_PROGRESS" },
      { id: "WO-2026-009", plan: "PP-2026-W39-B", model: "SED-2026", qty: 60, completed: 60, rejected: 1, line: "Line-B", status: "COMPLETED" },
      { id: "WO-2026-010", plan: "PP-2026-W39-B", model: "SED-2026", qty: 60, completed: 30, rejected: 0, line: "Line-B", status: "PAUSED" },
      { id: "WO-2026-011", plan: "PP-2026-W40", model: "SUVX-2026", qty: 65, completed: 0, rejected: 0, line: "Line-A", status: "RELEASED" }
    ];
    this.shopFloor = {
      line: "Line-A",
      workOrder: "WO-2026-008",
      model: "SUVX-2026",
      operation: "Trim & Final Assembly",
      target: 60,
      actual: 18,
      reject: 0,
      rework: 1,
      taktMin: 2.8,
      operators: 14,
      machine: "ConveyorLine-1",
      status: "RUNNING"
    };
    this.inspections = [
      { id: "INS-5521", part: "SUVX-2026", operation: "Final Inspection", result: "PASS", inspector: "M. Weber", date: "2026-09-25 07:30" },
      { id: "INS-5522", part: "ENG-2.0T", operation: "Engine Assembly", result: "PASS", inspector: "K. Sharma", date: "2026-09-25 08:15" },
      { id: "INS-5523", part: "SUVX-2026", operation: "Painting", result: "CONDITIONAL_PASS", inspector: "M. Weber", date: "2026-09-25 09:00" },
      { id: "INS-5524", part: "SED-2026", operation: "Final Inspection", result: "FAIL", inspector: "A. Kumar", date: "2026-09-25 09:45" },
      { id: "INS-5525", part: "BAT-75KWH", operation: "Incoming Quality", result: "PASS", inspector: "J. Lee", date: "2026-09-25 10:20" }
    ];
    this.defects = [
      { id: "DEF-1023", vin: "VX1SUVX2026A00042", category: "Paint", severity: "Minor", description: "Orange peel on left rear fender", status: "REWORKED" },
      { id: "DEF-1024", vin: "VX1SUVX2026A00043", category: "Electrical", severity: "Major", description: "Infotainment screen flicker", status: "OPEN" },
      { id: "DEF-1025", vin: "VX1SED2026B00101", category: "Assembly", severity: "Minor", description: "Door trim misalignment", status: "REWORKED" },
      { id: "DEF-1026", vin: "VX1SUVX2026A00044", category: "Engine", severity: "Critical", description: "Coolant leak at water pump", status: "IN_NCR" },
      { id: "DEF-1027", vin: "VX1SUVX2026A00045", category: "Interior", severity: "Minor", description: "Seat leather scratch", status: "CLOSED" }
    ];
    this.ncrs = [
      { id: "NCR-2026-014", title: "Coolant leak - water pump batch", vin: "VX1SUVX2026A00044", status: "INVESTIGATION", owner: "Quality Eng.", due: "2026-09-30" },
      { id: "NCR-2026-013", title: "Paint orange peel - Booth 3", vin: "VX1SUVX2026A00042", status: "CORRECTIVE_ACTION", owner: "Paint Sup.", due: "2026-09-28" },
      { id: "NCR-2026-012", title: "Door trim gap out of spec", vin: "VX1SED2026B00101", status: "CLOSED", owner: "Assembly Sup.", due: "2026-09-24" }
    ];
    this.vins = [
      { vin: "VX1SUVX2026A00042", model: "SUVX-2026", config: "SUVX-2026-BLACK-2.0-AUTO", workOrder: "WO-2026-007", line: "Line-A", engineSerial: "ENG20T-88421", batterySerial: "BAT75-55210", qualityStatus: "RELEASED", salesOrder: "SO-2026-1102", paymentStatus: "PAID", buildDate: "2026-09-24" },
      { vin: "VX1SUVX2026A00043", model: "SUVX-2026", config: "SUVX-2026-RED-2.0-AUTO", workOrder: "WO-2026-007", line: "Line-A", engineSerial: "ENG20T-88422", batterySerial: "BAT75-55211", qualityStatus: "HOLD", salesOrder: "SO-2026-1103", paymentStatus: "PARTIAL", buildDate: "2026-09-24" },
      { vin: "VX1SUVX2026A00044", model: "SUVX-2026", config: "SUVX-2026-WHITE-2.0-AUTO", workOrder: "WO-2026-008", line: "Line-A", engineSerial: "ENG20T-88423", batterySerial: "BAT75-55212", qualityStatus: "QUARANTINE", salesOrder: "SO-2026-1104", paymentStatus: "PENDING", buildDate: "2026-09-25" },
      { vin: "VX1SED2026B00101", model: "SED-2026", config: "SED-2026-BLUE-1.5-DCT", workOrder: "WO-2026-009", line: "Line-B", engineSerial: "ENG15T-33011", batterySerial: "\u2014", qualityStatus: "RELEASED", salesOrder: "SO-2026-1098", paymentStatus: "PAID", buildDate: "2026-09-23" },
      { vin: "VX1SED2026B00102", model: "SED-2026", config: "SED-2026-SILVER-1.5-DCT", workOrder: "WO-2026-009", line: "Line-B", engineSerial: "ENG15T-33012", batterySerial: "\u2014", qualityStatus: "RELEASED", salesOrder: "SO-2026-1099", paymentStatus: "PAID", buildDate: "2026-09-23" }
    ];
    this.salesOrders = [
      { id: "SO-2026-1102", customer: "AutoHaus Munich GmbH", model: "SUVX-2026", qty: 5, amount: 192500, status: "DELIVERED" },
      { id: "SO-2026-1103", customer: "MotorCity Berlin", model: "SUVX-2026", qty: 3, amount: 115500, status: "ALLOCATED" },
      { id: "SO-2026-1104", customer: "DriveWell India", model: "SUVX-2026", qty: 10, amount: 385e3, status: "CONFIRMED" },
      { id: "SO-2026-1098", customer: "AutoHaus Munich GmbH", model: "SED-2026", qty: 8, amount: 223200, status: "DELIVERED" },
      { id: "SO-2026-1105", customer: "Premium Motors UK", model: "EVX-2027", qty: 2, amount: 104e3, status: "PENDING" }
    ];
    this.payments = [
      { id: "PAY-7781", order: "SO-2026-1102", method: "Bank Transfer", amount: 192500, status: "VERIFIED", date: "2026-09-20" },
      { id: "PAY-7782", order: "SO-2026-1103", method: "Card", amount: 5e4, status: "VERIFIED", date: "2026-09-21" },
      { id: "PAY-7783", order: "SO-2026-1103", method: "Card", amount: 65500, status: "PENDING", date: "\u2014" },
      { id: "PAY-7784", order: "SO-2026-1098", method: "Cash", amount: 223200, status: "VERIFIED", date: "2026-09-18" },
      { id: "PAY-7785", order: "SO-2026-1104", method: "Bank Transfer", amount: 385e3, status: "PENDING", date: "\u2014" }
    ];
    this.employees = [
      { id: 1, name: "Markus Weber", role: "Quality Inspector", factory: "PLANT-DE", shift: "Morning", skill: "Final Inspection", status: "ACTIVE" },
      { id: 2, name: "Amit Kumar", role: "Line Supervisor", factory: "PLANT-IN", shift: "Morning", skill: "Assembly", status: "ACTIVE" },
      { id: 3, name: "Joon Lee", role: "Battery Technician", factory: "PLANT-DE", shift: "Night", skill: "HV Battery", status: "ACTIVE" },
      { id: 4, name: "Sofia Rossi", role: "Maintenance Tech", factory: "PLANT-DE", shift: "Afternoon", skill: "Robotics", status: "ACTIVE" },
      { id: 5, name: "Raj Patel", role: "Operator", factory: "PLANT-IN", shift: "Morning", skill: "Welding", status: "ACTIVE" },
      { id: 6, name: "Elena Fischer", role: "Production Planner", factory: "PLANT-DE", shift: "Morning", skill: "Scheduling", status: "ON_LEAVE" }
    ];
    this.machines = [
      { id: "M-001", name: "Press-2500T", workCenter: "WC-STAMP-01", type: "Stamping Press", status: "RUNNING", nextMaintenance: "2026-10-02" },
      { id: "M-002", name: "RobotLine-A", workCenter: "WC-BODY-01", type: "Welding Robots", status: "RUNNING", nextMaintenance: "2026-09-29" },
      { id: "M-003", name: "PaintBooth-3", workCenter: "WC-PAINT-01", type: "Paint Booth", status: "DOWNTIME", nextMaintenance: "2026-09-26" },
      { id: "M-004", name: "ConveyorLine-1", workCenter: "WC-FINAL-01", type: "Assembly Conveyor", status: "RUNNING", nextMaintenance: "2026-10-05" },
      { id: "M-005", name: "DynoTest-2", workCenter: "WC-TEST-01", type: "Dynamometer", status: "RUNNING", nextMaintenance: "2026-10-10" }
    ];
    this.maintenanceOrders = [
      { id: "MO-3301", machine: "PaintBooth-3", type: "Corrective", priority: "HIGH", status: "IN_PROGRESS", due: "2026-09-26" },
      { id: "MO-3302", machine: "RobotLine-A", type: "Preventive", priority: "MEDIUM", status: "PLANNED", due: "2026-09-29" },
      { id: "MO-3303", machine: "Press-2500T", type: "Preventive", priority: "MEDIUM", status: "PLANNED", due: "2026-10-02" },
      { id: "MO-3300", machine: "ConveyorLine-1", type: "Preventive", priority: "LOW", status: "COMPLETED", due: "2026-09-20" }
    ];
    this.variants = [
      { code: "SUVX-A", model: "SUVX-2026", engine: "2.0L Turbo", transmission: "8AT", trim: "Sport", market: "EU", modelYear: "2026" },
      { code: "SUVX-B", model: "SUVX-2026", engine: "2.0L Turbo-Hybrid", transmission: "8AT", trim: "Premium", market: "EU", modelYear: "2026" },
      { code: "SED-A", model: "SED-2026", engine: "1.5L Turbo", transmission: "7DCT", trim: "Comfort", market: "Global", modelYear: "2026" },
      { code: "EVX-A", model: "EVX-2027", engine: "Electric 250kW", transmission: "Single-speed", trim: "Launch", market: "EU/US", modelYear: "2027" }
    ];
    this.configOptions = [
      { group: "Engine", code: "ENG-20T", label: "2.0L Turbo", price: 0 },
      { group: "Engine", code: "ENG-20TH", label: "2.0L Turbo-Hybrid", price: 2500 },
      { group: "Engine", code: "ENG-EV", label: "Electric 250kW", price: 0 },
      { group: "Exterior Color", code: "COL-BLK", label: "Onyx Black", price: 0 },
      { group: "Exterior Color", code: "COL-RED", label: "Inferno Red", price: 650 },
      { group: "Exterior Color", code: "COL-WHT", label: "Arctic White", price: 0 },
      { group: "Wheels", code: "WHL-18", label: '18" Alloy', price: 0 },
      { group: "Wheels", code: "WHL-20", label: '20" Forged', price: 1200 },
      { group: "Interior", code: "INT-LTH", label: "Leather Nappa", price: 1800 },
      { group: "Interior", code: "INT-CLO", label: "Cloth", price: 0 },
      { group: "Safety", code: "SAFE-PKG", label: "Advanced Safety Package", price: 950 },
      { group: "Infotainment", code: "INF-12", label: '12" Touchscreen', price: 0 },
      { group: "Infotainment", code: "INF-15", label: '15" Curved Display', price: 1400 },
      { group: "Battery", code: "BAT-75", label: "75 kWh", price: 0 },
      { group: "Battery", code: "BAT-100", label: "100 kWh Long Range", price: 4500 }
    ];
    this.yardSlots = [
      { id: "A-01", row: "A", position: 1, vin: "VX1SUVX2026A00042", model: "SUVX-2026", qualityStatus: "RELEASED", releaseStatus: "RELEASED", salesStatus: "SOLD", allocationStatus: "ALLOCATED" },
      { id: "A-02", row: "A", position: 2, vin: "VX1SUVX2026A00043", model: "SUVX-2026", qualityStatus: "HOLD", releaseStatus: "HOLD", salesStatus: "SOLD", allocationStatus: "ALLOCATED" },
      { id: "A-03", row: "A", position: 3, vin: "VX1SUVX2026A00044", model: "SUVX-2026", qualityStatus: "QUARANTINE", releaseStatus: "NOT_RELEASED", salesStatus: "CONFIRMED", allocationStatus: "PENDING" },
      { id: "A-04", row: "A", position: 4, vin: null, model: "\u2014", qualityStatus: "\u2014", releaseStatus: "EMPTY", salesStatus: "\u2014", allocationStatus: "\u2014" },
      { id: "B-01", row: "B", position: 1, vin: "VX1SED2026B00101", model: "SED-2026", qualityStatus: "RELEASED", releaseStatus: "RELEASED", salesStatus: "SOLD", allocationStatus: "DISPATCHED" },
      { id: "B-02", row: "B", position: 2, vin: "VX1SED2026B00102", model: "SED-2026", qualityStatus: "RELEASED", releaseStatus: "RELEASED", salesStatus: "SOLD", allocationStatus: "ALLOCATED" },
      { id: "B-03", row: "B", position: 3, vin: null, model: "\u2014", qualityStatus: "\u2014", releaseStatus: "EMPTY", salesStatus: "\u2014", allocationStatus: "\u2014" },
      { id: "C-01", row: "C", position: 1, vin: null, model: "\u2014", qualityStatus: "\u2014", releaseStatus: "EMPTY", salesStatus: "\u2014", allocationStatus: "\u2014" }
    ];
    this.approvalQueues = [
      { id: "APR-101", type: "PO", title: "PO-2026-004 \u2014 Battery cells (120 units)", requestedBy: "Procurement Officer", date: "2026-09-27", priority: "HIGH", detail: "Supplier: LG Energy Solution \xB7 Value: $180,000 \xB7 Above threshold, requires manager approval.", status: "PENDING" },
      { id: "APR-102", type: "QUALITY_RELEASE", title: "Quality release \u2014 VIN \u2026A00044", requestedBy: "Quality Inspector", date: "2026-09-27", priority: "HIGH", detail: "Vehicle has 1 open NCR. Release blocked until NCR-003 closed.", status: "PENDING" },
      { id: "APR-103", type: "VEHICLE_RELEASE", title: "Vehicle release \u2014 VIN \u2026B00102", requestedBy: "Production Supervisor", date: "2026-09-26", priority: "MEDIUM", detail: "All inspections passed, payment verified. Ready for dispatch.", status: "PENDING" },
      { id: "APR-104", type: "ECR", title: "ECR-007 \u2014 Add ADAS option to SUVX-B", requestedBy: "Engineering", date: "2026-09-25", priority: "MEDIUM", detail: "Affects BOM + routing. Cross-functional review required.", status: "PENDING" },
      { id: "APR-105", type: "MAINTENANCE", title: "MO-2026-012 \u2014 Emergency repair Press-2500T", requestedBy: "Maintenance Tech", date: "2026-09-27", priority: "HIGH", detail: "Hydraulic leak. Est. downtime 4h. Spare part required.", status: "PENDING" },
      { id: "APR-106", type: "PO", title: "PO-2026-005 \u2014 Brake calipers (500 units)", requestedBy: "Procurement Officer", date: "2026-09-24", priority: "LOW", detail: "Supplier: Continental AG \xB7 Value: $45,000.", status: "PENDING" }
    ];
    this.safetyIncidents = [
      { id: "INC-001", date: "2026-09-25", type: "Incident", severity: "Major", location: "Line-A / Stamping", description: "Operator hand laceration from sheet metal edge. First aid administered.", status: "UNDER_INVESTIGATION", reportedBy: "Raj Patel" },
      { id: "INC-002", date: "2026-09-22", type: "Near Miss", severity: "Minor", location: "Line-B / Paint", description: "Forklift near-miss with pedestrian at blind corner.", status: "CLOSED", reportedBy: "Sofia Rossi" },
      { id: "INC-003", date: "2026-09-20", type: "Hazard", severity: "Moderate", location: "Warehouse", description: "Spill on aisle not signposted. Cleaned and cone placed.", status: "CLOSED", reportedBy: "Markus Weber" }
    ];
    this.ppeChecks = [
      { id: "PPE-01", area: "Stamping", required: "Safety glasses, gloves, ear protection", compliance: 96, lastCheck: "2026-09-26" },
      { id: "PPE-02", area: "Paint", required: "Respirator, coveralls, gloves", compliance: 92, lastCheck: "2026-09-25" },
      { id: "PPE-03", area: "Assembly", required: "Safety shoes, glasses", compliance: 98, lastCheck: "2026-09-27" }
    ];
    this.safetyTraining = [
      { id: "TRN-01", employee: "Raj Patel", course: "Lockout/Tagout", expiry: "2026-12-01", status: "VALID" },
      { id: "TRN-02", employee: "Sofia Rossi", course: "Hazardous Materials", expiry: "2026-10-15", status: "EXPIRING_SOON" },
      { id: "TRN-03", employee: "Markus Weber", course: "Forklift Operation", expiry: "2026-08-30", status: "EXPIRED" }
    ];
    this.scheduleSlots = [
      { line: "Line-A", time: "08:00", model: "SUVX-2026", variant: "SUVX-A", color: "#2563eb" },
      { line: "Line-A", time: "08:08", model: "SUVX-2026", variant: "SUVX-A", color: "#2563eb" },
      { line: "Line-A", time: "08:16", model: "EVX-2027", variant: "EVX-A", color: "#0d9488" },
      { line: "Line-A", time: "08:24", model: "EVX-2027", variant: "EVX-A", color: "#0d9488" },
      { line: "Line-A", time: "08:32", model: "SUVX-2026", variant: "SUVX-B", color: "#2563eb" },
      { line: "Line-A", time: "08:40", model: "SED-2026", variant: "SED-A", color: "#7c3aed" },
      { line: "Line-B", time: "08:00", model: "SED-2026", variant: "SED-A", color: "#7c3aed" },
      { line: "Line-B", time: "08:08", model: "SED-2026", variant: "SED-A", color: "#7c3aed" },
      { line: "Line-B", time: "08:16", model: "SUVX-2026", variant: "SUVX-A", color: "#2563eb" },
      { line: "Line-B", time: "08:24", model: "SUVX-2026", variant: "SUVX-A", color: "#2563eb" },
      { line: "Line-B", time: "08:32", model: "EVX-2027", variant: "EVX-A", color: "#0d9488" },
      { line: "Line-B", time: "08:40", model: "EVX-2027", variant: "EVX-A", color: "#0d9488" }
    ];
    this.auditLog = [
      { id: "AUD-1001", timestamp: "2026-09-27 14:32:11", user: "System Admin", role: "SUPER_ADMIN", action: "UPDATE", entity: "VehicleModel", entityId: "SUVX-2026", detail: "basePrice 42000 \u2192 42500", ip: "10.0.1.15" },
      { id: "AUD-1002", timestamp: "2026-09-27 13:05:44", user: "Plant Manager", role: "MANAGER", action: "CREATE", entity: "WorkOrder", entityId: "WO-2026-009", detail: "Created WO for EVX-2027, qty 40", ip: "10.0.1.22" },
      { id: "AUD-1003", timestamp: "2026-09-27 11:48:02", user: "Quality Inspector", role: "QUALITY_INSPECTOR", action: "UPDATE", entity: "VIN", entityId: "VX1SUVX2026A00044", detail: "qualityStatus RELEASED \u2192 HOLD (NCR-003)", ip: "10.0.1.30" },
      { id: "AUD-1004", timestamp: "2026-09-27 09:12:55", user: "System Admin", role: "SUPER_ADMIN", action: "DELETE", entity: "Organization", entityId: "3", detail: 'Deleted test org "Acme Test Co."', ip: "10.0.1.15" },
      { id: "AUD-1005", timestamp: "2026-09-26 16:40:19", user: "Procurement Officer", role: "MANAGER", action: "CREATE", entity: "PurchaseOrder", entityId: "PO-2026-005", detail: "Created PO, value $45,000", ip: "10.0.1.41" },
      { id: "AUD-1006", timestamp: "2026-09-26 15:22:08", user: "Viewer", role: "VIEWER", action: "LOGIN", entity: "Session", entityId: "\u2014", detail: "Logged in from new device", ip: "10.0.2.88" }
    ];
  }
  vinGenealogy(vin) {
    return {
      lots: [
        { part: "ENG-2.0T", lot: "LOT-ENG-2210", supplier: "Denso Corp" },
        { part: "BAT-75KWH", lot: "LOT-BAT-1140", supplier: "LG Energy Solution" },
        { part: "ECU-ENG", lot: "LOT-ECU-8830", supplier: "Bosch GmbH" },
        { part: "TIR-235-55R18", lot: "LOT-TIR-5520", supplier: "Continental AG" }
      ],
      operators: [
        { op: "Body Welding", name: "Raj Patel" },
        { op: "Painting", name: "Sofia Rossi" },
        { op: "Trim & Final", name: "Markus Weber" },
        { op: "Final Inspection", name: "Amit Kumar" }
      ],
      machineHistory: [
        { machine: "Press-2500T", operation: "Stamping" },
        { machine: "RobotLine-A", operation: "Body Welding" },
        { machine: "PaintBooth-3", operation: "Painting" },
        { machine: "ConveyorLine-1", operation: "Trim & Final" },
        { machine: "DynoTest-2", operation: "Diagnostics" }
      ],
      inspectionHistory: [
        { id: "INS-5521", result: "PASS", inspector: "M. Weber" },
        { id: "INS-5523", result: "CONDITIONAL_PASS", inspector: "M. Weber" },
        { id: "INS-5526", result: "PASS (re-inspection)", inspector: "A. Kumar" }
      ],
      reworkHistory: vin === "VX1SUVX2026A00042" ? [
        { defect: "Paint orange peel", action: "Repainted left rear fender", date: "2026-09-24" }
      ] : [],
      releaseChecklist: [
        { label: "All inspections passed", passed: true },
        { label: "No open critical defects", passed: vin !== "VX1SUVX2026A00044" },
        { label: "All NCRs closed", passed: vin !== "VX1SUVX2026A00044" },
        { label: "Rework reinspected", passed: true },
        { label: "Payment verified", passed: vin !== "VX1SUVX2026A00044" }
      ]
    };
  }
  // Dashboard stats
  stats() {
    return {
      vehiclesBuilt: 1247,
      openWorkOrders: this.workOrders.filter((w) => w.status !== "COMPLETED").length,
      openDefects: this.defects.filter((d) => d.status === "OPEN" || d.status === "IN_NCR").length,
      openNcrs: this.ncrs.filter((n) => n.status !== "CLOSED").length,
      pendingPayments: this.payments.filter((p) => p.status === "PENDING").reduce((s, p) => s + p.amount, 0),
      firstPassYield: 96.4,
      oee: 78.2
    };
  }
  static {
    this.\u0275fac = function MockDataService_Factory(t) {
      return new (t || _MockDataService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MockDataService, factory: _MockDataService.\u0275fac, providedIn: "root" });
  }
};

export {
  MockDataService
};
//# sourceMappingURL=chunk-4P265WU7.js.map
