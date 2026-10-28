import { Injectable, signal } from '@angular/core';
import { Organization, Factory, VehicleModel } from '../models/master-data';

export interface Part { id: number; code: string; name: string; category: string; uom: string; cost: number; status: string; }
export interface BomRow { level: number; code: string; name: string; qty: number; uom: string; type: string; }
export interface RoutingOp { seq: number; name: string; workCenter: string; machine: string; setupMin: number; cycleMin: number; }
export interface Supplier { id: number; code: string; company: string; category: string; country: string; rating: number; status: string; }
export interface PurchaseOrder { id: string; supplier: string; date: string; total: number; status: string; items: number; }
export interface StockItem { id: number; partCode: string; name: string; warehouse: string; onHand: number; reserved: number; uom: string; value: number; }
export interface StockTxn { id: string; date: string; type: string; partCode: string; qty: number; warehouse: string; ref: string; }
export interface MrpRow { partCode: string; name: string; required: number; onHand: number; reserved: number; incoming: number; shortage: number; }
export interface ProductionPlan { id: string; model: string; qty: number; line: string; start: string; end: string; status: string; }
export interface WorkOrder { id: string; plan: string; model: string; qty: number; completed: number; rejected: number; line: string; status: string; }
export interface Inspection { id: string; part: string; operation: string; result: string; inspector: string; date: string; }
export interface Defect { id: string; vin: string; category: string; severity: string; description: string; status: string; }
export interface Ncr { id: string; title: string; vin: string; status: string; owner: string; due: string; }
export interface VinRecord { vin: string; model: string; config: string; workOrder: string; line: string; engineSerial: string; batterySerial: string; qualityStatus: string; salesOrder: string; paymentStatus: string; buildDate: string; lots?: { part: string; lot: string; supplier: string }[]; operators?: { op: string; name: string }[]; machineHistory?: { machine: string; operation: string }[]; inspectionHistory?: { id: string; result: string; inspector: string }[]; reworkHistory?: { defect: string; action: string; date: string }[]; releaseChecklist?: { label: string; passed: boolean }[]; }
export interface Variant { code: string; model: string; engine: string; transmission: string; trim: string; market: string; modelYear: string; }
export interface ConfigOption { group: string; code: string; label: string; price: number; }
export interface ApprovalItem { id: string; type: 'PO' | 'ECR' | 'QUALITY_RELEASE' | 'VEHICLE_RELEASE' | 'MAINTENANCE'; title: string; requestedBy: string; date: string; priority: 'HIGH' | 'MEDIUM' | 'LOW'; detail: string; status: 'PENDING'; }
export interface YardSlot { id: string; row: string; position: number; vin: string | null; model: string; qualityStatus: string; releaseStatus: string; salesStatus: string; allocationStatus: string; }
export interface SalesOrder { id: string; customer: string; model: string; qty: number; amount: number; status: string; }
export interface Payment { id: string; order: string; method: string; amount: number; status: string; date: string; }
export interface Customer { id: number; name: string; email: string; phone: string; address: string; }
export interface Dealer { id: number; code: string; name: string; city: string; email: string; status: string; }
export interface ReportRecord { id: number; name: string; format: string; generatedBy: string; createdAt: string; }
export interface Employee { id: number; name: string; role: string; factory: string; shift: string; skill: string; status: string; }
export interface Machine { id: string; name: string; workCenter: string; type: string; status: string; nextMaintenance: string; }
export interface MaintenanceOrder { id: string; machine: string; type: string; priority: string; status: string; due: string; }
export interface SafetyIncident { id: string; date: string; type: string; severity: string; location: string; description: string; status: string; reportedBy: string; }
export interface PpeCheck { id: string; area: string; required: string; compliance: number; lastCheck: string; }
export interface SafetyTraining { id: string; employee: string; course: string; expiry: string; status: string; }
export interface AuditLogEntry { id: string; timestamp: string; user: string; role: string; action: string; entity: string; entityId: string; detail: string; ip: string; }
export interface VinGenealogy {
  lots: { part: string; lot: string; supplier: string }[];
  operators: { op: string; name: string }[];
  machineHistory: { machine: string; operation: string }[];
  inspectionHistory: { id: string; result: string; inspector: string }[];
  reworkHistory: { defect: string; action: string; date: string }[];
  releaseChecklist: { label: string; passed: boolean }[];
}

@Injectable({ providedIn: 'root' })
export class AppDataService {
  organizations = signal<Organization[]>([]);
  factories = signal<Factory[]>([]);
  vehicleModels = signal<VehicleModel[]>([]);
  parts: Part[] = [];
  bom: BomRow[] = [];
  routing: RoutingOp[] = [];
  suppliers: Supplier[] = [];
  purchaseOrders: PurchaseOrder[] = [];
  stock: StockItem[] = [];
  stockTxns: StockTxn[] = [];
  mrp: MrpRow[] = [];
  productionPlans: ProductionPlan[] = [];
  workOrders: WorkOrder[] = [];
  shopFloor = { line: '', workOrder: '', model: '', operation: '', target: 0, actual: 0, reject: 0, rework: 0, taktMin: 0, operators: 0, machine: '', status: 'No active work' };
  inspections: Inspection[] = [];
  defects: Defect[] = [];
  ncrs: Ncr[] = [];
  vins: VinRecord[] = [];
  salesOrders: SalesOrder[] = [];
  payments: Payment[] = [];
  customers: Customer[] = [];
  dealers: Dealer[] = [];
  reports: ReportRecord[] = [];
  employees: Employee[] = [];
  machines: Machine[] = [];
  maintenanceOrders: MaintenanceOrder[] = [];
  variants: Variant[] = [];
  configOptions: ConfigOption[] = [];
  yardSlots: YardSlot[] = [];
  approvalQueues: ApprovalItem[] = [];
  safetyIncidents: SafetyIncident[] = [];
  ppeChecks: PpeCheck[] = [];
  safetyTraining: SafetyTraining[] = [];
  scheduleSlots: { line: string; time: string; model: string; variant: string; color: string }[] = [];
  auditLog: AuditLogEntry[] = [];

  vinGenealogy(_vin: string): VinGenealogy {
    return { lots: [], operators: [], machineHistory: [], inspectionHistory: [], reworkHistory: [], releaseChecklist: [] };
  }

  stats() {
    const vehiclesBuilt = this.workOrders.reduce((sum, row) => sum + row.completed, 0);
    const openWorkOrders = this.workOrders.filter(row => !['COMPLETED', 'CANCELLED'].includes(row.status)).length;
    const openNcrs = this.ncrs.filter(row => !['CLOSED', 'RESOLVED', 'VERIFIED'].includes(row.status)).length;
    const pendingPayments = this.salesOrders.filter(row => row.status !== 'PAID').reduce((sum, row) => sum + row.amount, 0);
    const passed = this.inspections.filter(row => row.result === 'PASS').length;
    const firstPassYield = this.inspections.length ? Math.round((passed / this.inspections.length) * 100) : 0;
    const openDefects = this.defects.filter(row => !['CLOSED', 'RESOLVED', 'REWORKED'].includes(row.status)).length;
    return { vehiclesBuilt, openWorkOrders, openDefects, openNcrs, pendingPayments, firstPassYield, oee: 0 };
  }
}
