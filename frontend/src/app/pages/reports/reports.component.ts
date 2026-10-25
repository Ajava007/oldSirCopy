import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../core/services/mock-data.service';

@Component({
  selector: 'vx-reports',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h5 class="fw-bold mb-1">Reports &amp; Analytics</h5>
    <p class="text-muted small mb-3">Operational KPIs from static data. JasperReports PDF documents (invoices, contracts, quality) land in Phase 8.</p>

    <div class="row g-3 mb-4">
      <div class="col-6 col-md-3"><div class="vx-card p-3"><div class="text-muted small text-uppercase">Vehicles Built</div><div class="display-6 fw-bold" style="color:#c47046;">{{ s.vehiclesBuilt }}</div><div class="small text-muted">YTD</div></div></div>
      <div class="col-6 col-md-3"><div class="vx-card p-3"><div class="text-muted small text-uppercase">First Pass Yield</div><div class="display-6 fw-bold" style="color:#6fbf73;">{{ s.firstPassYield }}%</div><div class="small text-muted">target ≥ 95%</div></div></div>
      <div class="col-6 col-md-3"><div class="vx-card p-3"><div class="text-muted small text-uppercase">OEE</div><div class="display-6 fw-bold" style="color:#7ba8b8;">{{ s.oee }}%</div><div class="small text-muted">Line-A</div></div></div>
      <div class="col-6 col-md-3"><div class="vx-card p-3"><div class="text-muted small text-uppercase">Payments Pending</div><div class="display-6 fw-bold" style="color:#d4a84a;">{{ (s.pendingPayments/1000).toFixed(0) }}k</div><div class="small text-muted">unverified</div></div></div>
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
  s = this.mock.stats();
  get woMix() {
    const list = this.mock.workOrders;
    return [
      { label: 'In Progress', value: list.filter(w => w.status === 'IN_PROGRESS').length, color: '#c47046' },
      { label: 'Completed', value: list.filter(w => w.status === 'COMPLETED').length, color: '#6fbf73' },
      { label: 'Paused', value: list.filter(w => w.status === 'PAUSED').length, color: '#d4a84a' },
      { label: 'Released', value: list.filter(w => w.status === 'RELEASED').length, color: '#7ba8b8' }
    ];
  }
  get totalWO() { return this.mock.workOrders.length || 1; }
  get shortageParts() { return this.mock.mrp.filter(x => x.shortage > 0); }
  constructor(public mock: MockDataService) {}
}
