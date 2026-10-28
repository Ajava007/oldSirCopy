import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from '../../core/services/app-data.service';
import { BackendApiService } from '../../core/services/backend-api.service';

@Component({
  selector: 'vx-reports',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h5 class="fw-bold mb-1">Reports &amp; Analytics</h5>
    <p class="text-muted small mb-3">Work order, stock, and report records from the backend.</p>

    <div class="row g-3 mb-4">
      <div class="col-6 col-md-3"><div class="vx-card p-3"><div class="text-muted small text-uppercase">Vehicles Built</div><div class="display-6 fw-bold" style="color:#c47046;">{{ s.vehiclesBuilt }}</div><div class="small text-muted">YTD</div></div></div>
      <div class="col-6 col-md-3"><div class="vx-card p-3"><div class="text-muted small text-uppercase">Quality pass rate</div><div class="display-6 fw-bold" style="color:#6fbf73;">{{ s.firstPassYield }}%</div><div class="small text-muted">from inspection records</div></div></div>
      <div class="col-6 col-md-3"><div class="vx-card p-3"><div class="text-muted small text-uppercase">Open quality issues</div><div class="display-6 fw-bold" style="color:#7ba8b8;">{{ s.openNcrs }}</div><div class="small text-muted">from quality records</div></div></div>
      <div class="col-6 col-md-3"><div class="vx-card p-3"><div class="text-muted small text-uppercase">Payments Pending</div><div class="display-6 fw-bold" style="color:#d4a84a;">{{ s.pendingPayments.toLocaleString() }}</div><div class="small text-muted">from sales orders</div></div></div>
    </div>

    <div class="row g-3">
      <div class="col-12 col-md-6">
        <div class="vx-card p-4">
          <h6 class="fw-bold mb-3">Work Order Status Mix</h6>
          @for (row of woMix; track row.label) {
            <div class="mb-2">
              <div class="d-flex justify-content-between small mb-1"><span>{{ row.label }}</span><span class="mono">{{ row.value }}</span></div>
              <div style="height:10px;background:rgba(255,255,255,.08);border-radius:5px;overflow:hidden;"><div [style.width.%]="(row.value/totalWO)*100" [style.background]="row.color" style="height:100%;"></div></div>
            </div>
          }
        </div>
      </div>
      <div class="col-12">
        <div class="vx-card p-3">
          <h6 class="fw-bold mb-3">Recent reports</h6>
          @if (data.reports.length === 0) { <p class="small text-muted mb-0">No reports found.</p> }
          @for (report of data.reports; track report.id) {
            <div class="d-flex justify-content-between border-bottom py-2 small"><span>{{ report.name }} · {{ report.format }}</span><span>{{ report.generatedBy }} · {{ report.createdAt }}</span></div>
          }
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="vx-card p-4">
          <h6 class="fw-bold mb-3">MRP Shortage Exposure</h6>
          @for (m of shortageParts; track m.partCode) {
            <div class="mb-2">
              <div class="d-flex justify-content-between small mb-1"><span class="mono">{{ m.partCode }}</span><span class="mono" style="color:#d46a5a;">short {{ m.shortage }}</span></div>
              <div style="height:10px;background:rgba(255,255,255,.08);border-radius:5px;overflow:hidden;"><div [style.width.%]="(m.shortage/m.required)*100" style="height:100%;background:linear-gradient(90deg,#d46a5a,#c47046);"></div></div>
            </div>
          }
          <p class="small text-muted mt-3 mb-0">Shortage parts block production release until PO receipts cover the gap.</p>
        </div>
      </div>
    </div>
  `,
  styles: ['.mono{font-family:monospace;}']
})
export class ReportsComponent {
  get s() { return this.data.stats(); }
  get woMix() {
    const list = this.data.workOrders;
    return [
      { label: 'In Progress', value: list.filter(w => w.status === 'IN_PROGRESS').length, color: '#c47046' },
      { label: 'Completed', value: list.filter(w => w.status === 'COMPLETED').length, color: '#6fbf73' },
      { label: 'Paused', value: list.filter(w => w.status === 'PAUSED').length, color: '#d4a84a' },
      { label: 'Released', value: list.filter(w => w.status === 'RELEASED').length, color: '#7ba8b8' }
    ];
  }
  get totalWO() { return this.data.workOrders.length || 1; }
  get shortageParts() { return this.data.mrp.filter(x => x.shortage > 0); }
  constructor(public data: AppDataService, api: BackendApiService) {
    api.production.workOrders(0, 100).subscribe(res => {
      data.workOrders = res.data.content.map((w: any) => ({ id: w.woNumber, plan: w.planNumber ?? '', model: w.modelCode, qty: w.targetQuantity, completed: w.producedQuantity ?? 0, rejected: w.rejectedQuantity ?? 0, line: w.lineCode ?? '', status: w.status }));
    });
    api.inventory.items(0, 100).subscribe(res => {
      data.stock = res.data.content.map((item: any) => ({ id: item.id, partCode: item.partCode, name: item.partCode, warehouse: item.warehouse, onHand: item.onHand, reserved: item.reserved, uom: '', value: 0 }));
    });
    api.quality.inspections(0, 100).subscribe(res => {
      data.inspections = res.data.content.map((i: any) => ({ id: i.inspectionNumber, part: i.partCode ?? i.vin ?? '', operation: i.type, result: i.result, inspector: i.inspectorName ?? '', date: i.inspectedAt ?? i.createdAt }));
    });
    api.quality.ncrs(0, 100).subscribe(res => {
      data.ncrs = res.data.content.map((n: any) => ({ id: n.ncrNumber, title: n.containment ?? n.ncrNumber, vin: n.vin ?? '', status: n.status, owner: '', due: n.closedAt ?? '' }));
    });
    api.sales.orders(0, 100).subscribe(res => {
      data.salesOrders = res.data.content.map((o: any) => ({ id: o.soNumber, customer: String(o.customerId), model: o.modelCode, qty: 1, amount: o.totalAmount ?? 0, status: o.paymentStatus }));
    });
    api.reports.history(0, 100).subscribe(res => {
      data.reports = res.data.content.map((item: any) => ({ id: item.id, name: item.reportName, format: item.format, generatedBy: item.generatedBy ?? 'System', createdAt: item.createdAt ?? '' }));
    });
  }
}
