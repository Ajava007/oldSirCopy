import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService, VinRecord } from '../../core/services/mock-data.service';

type Tab = 'summary' | 'genealogy' | 'release';

@Component({
  selector: 'vx-vin-traceability',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h5 class="fw-bold mb-1" style="color:#0f172a;">VIN Traceability — Digital Thread</h5>
    <p class="mb-3" style="color:#64748b;font-size:.9rem;">Signature feature: full lifecycle genealogy per VIN. Select a VIN, then explore summary, genealogy, and release gating.</p>

    <div class="d-flex flex-wrap gap-2 mb-3">
      @for (v of mock.vins; track v.vin) {
        <button class="btn btn-sm" [class.btn-primary]="selected()?.vin===v.vin" [class.btn-outline-secondary]="selected()?.vin!==v.vin" (click)="selected.set(v)">
          <span class="mono" style="font-size:.75rem;">{{ v.vin }}</span>
        </button>
      }
    </div>

    @if (selected(); as v) {
      <div class="vx-card p-4 mb-3">
        <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
          <div>
            <div class="mono fw-bold" style="font-size:18px;color:#2563eb;">{{ v.vin }}</div>
            <div style="color:#64748b;font-size:.85rem;">{{ v.model }} · {{ v.config }} · Built {{ v.buildDate }} · {{ v.line }}</div>
          </div>
          <div class="d-flex gap-2 flex-wrap">
            <span class="badge" [style.background]="v.qualityStatus==='RELEASED'?'rgba(5,150,105,.15)':v.qualityStatus==='HOLD'?'rgba(217,119,6,.15)':'rgba(220,38,38,.15)'" [style.color]="v.qualityStatus==='RELEASED'?'#059669':v.qualityStatus==='HOLD'?'#d97706':'#dc2626'">Quality: {{ v.qualityStatus }}</span>
            <span class="badge" [style.background]="v.paymentStatus==='PAID'?'rgba(5,150,105,.15)':'rgba(217,119,6,.15)'" [style.color]="v.paymentStatus==='PAID'?'#059669':'#d97706'">Payment: {{ v.paymentStatus }}</span>
            <span class="badge" style="background:rgba(37,99,235,.1);color:#2563eb;">WO {{ v.workOrder }}</span>
          </div>
        </div>
        <div class="d-flex flex-wrap gap-2 align-items-center mb-2">
          @for (step of thread(v); track step.label; let last = $last) {
            <div class="px-2 py-1 rounded small" [style.background]="step.done ? 'rgba(37,99,235,.08)' : '#f8fafc'" [style.border]="step.done ? '1px solid #2563eb' : '1px solid #e2e8f0'" [style.color]="step.done ? '#1e40af' : '#94a3b8'">{{ step.label }}</div>
            @if (!last) { <span style="color:#2563eb;">→</span> }
          }
        </div>
      </div>

      <ul class="nav nav-pills gap-1 mb-3">
        <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='summary'" (click)="tab.set('summary')">Summary</button></li>
        <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='genealogy'" (click)="tab.set('genealogy')">Genealogy Timeline</button></li>
        <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='release'" (click)="tab.set('release')">Release Checklist</button></li>
      </ul>

      @if (tab()==='summary') {
        <div class="row g-2">
          <div class="col-12 col-md-6"><div class="vx-card p-3"><table class="table table-sm mb-0" style="font-size:.85rem;">
            <tbody>
              <tr><td style="color:#64748b;">Engine Serial</td><td class="mono">{{ v.engineSerial }}</td></tr>
              <tr><td style="color:#64748b;">Battery Serial</td><td class="mono">{{ v.batterySerial }}</td></tr>
              <tr><td style="color:#64748b;">Sales Order</td><td class="mono">{{ v.salesOrder }}</td></tr>
              <tr><td style="color:#64748b;">Open defects</td><td class="mono">{{ defectsFor(v.vin) }}</td></tr>
            </tbody>
          </table></div></div>
          <div class="col-12 col-md-6"><div class="vx-card p-3"><table class="table table-sm mb-0" style="font-size:.85rem;">
            <tbody>
              <tr><td style="color:#64748b;">Material lots</td><td class="mono">{{ gen().lots.length }}</td></tr>
              <tr><td style="color:#64748b;">Operators</td><td class="mono">{{ gen().operators.length }}</td></tr>
              <tr><td style="color:#64748b;">Machines used</td><td class="mono">{{ gen().machineHistory.length }}</td></tr>
              <tr><td style="color:#64748b;">Inspections</td><td class="mono">{{ gen().inspectionHistory.length }}</td></tr>
              <tr><td style="color:#64748b;">Rework records</td><td class="mono">{{ gen().reworkHistory.length }}</td></tr>
            </tbody>
          </table></div></div>
        </div>
      }

      @if (tab()==='genealogy') {
        <div class="vx-card p-4">
          <h6 class="fw-bold mb-3" style="color:#0f172a;">Material lots (supplier traceability)</h6>
          <table class="table table-sm mb-4" style="font-size:.85rem;">
            <thead><tr><th>Part</th><th>Lot</th><th>Supplier</th></tr></thead>
            <tbody>@for (l of gen().lots; track l.lot) { <tr><td class="mono">{{ l.part }}</td><td class="mono">{{ l.lot }}</td><td>{{ l.supplier }}</td></tr> }</tbody>
          </table>
          <h6 class="fw-bold mb-3" style="color:#0f172a;">Operations — operators &amp; machines</h6>
          <div class="row g-2 mb-4">
            <div class="col-md-6"><div class="p-3 rounded" style="background:#f8fafc;border:1px solid #e2e8f0;"><div class="small text-uppercase mb-2" style="color:#64748b;font-size:.7rem;font-weight:700;">Operators</div>
              @for (o of gen().operators; track o.op) { <div class="small mb-1"><strong>{{ o.op }}</strong> — {{ o.name }}</div> }</div></div>
            <div class="col-md-6"><div class="p-3 rounded" style="background:#f8fafc;border:1px solid #e2e8f0;"><div class="small text-uppercase mb-2" style="color:#64748b;font-size:.7rem;font-weight:700;">Machine history</div>
              @for (m of gen().machineHistory; track m.machine) { <div class="small mb-1"><strong class="mono">{{ m.machine }}</strong> — {{ m.operation }}</div> }</div></div>
          </div>
          <h6 class="fw-bold mb-3" style="color:#0f172a;">Inspection history</h6>
          <table class="table table-sm mb-4" style="font-size:.85rem;">
            <thead><tr><th>Inspection</th><th>Result</th><th>Inspector</th></tr></thead>
            <tbody>@for (i of gen().inspectionHistory; track i.id) { <tr><td class="mono">{{ i.id }}</td><td>{{ i.result }}</td><td>{{ i.inspector }}</td></tr> }</tbody>
          </table>
          @if (gen().reworkHistory.length) {
            <h6 class="fw-bold mb-3" style="color:#0f172a;">Rework history</h6>
            @for (r of gen().reworkHistory; track r.defect) { <div class="small p-2 rounded mb-1" style="background:rgba(217,119,6,.08);border-left:3px solid #d97706;"><strong>{{ r.defect }}</strong> — {{ r.action }} ({{ r.date }})</div> }
          }
        </div>
      }

      @if (tab()==='release') {
        <div class="vx-card p-4">
          <h6 class="fw-bold mb-3" style="color:#0f172a;">Quality release checklist — gates dispatch</h6>
          @for (c of gen().releaseChecklist; track c.label) {
            <div class="d-flex align-items-center gap-2 mb-2">
              <span [style.background]="c.passed ? '#059669' : '#dc2626'" class="d-inline-flex align-items-center justify-content-center rounded-circle text-white" style="width:22px;height:22px;font-size:.75rem;">{{ c.passed ? '✓' : '✕' }}</span>
              <span class="small" [style.color]="c.passed ? '#0f172a' : '#dc2626'">{{ c.label }}</span>
            </div>
          }
          <div class="mt-4 p-3 rounded" [style.background]="releasable() ? 'rgba(5,150,105,.08)' : 'rgba(220,38,38,.06)'" [style.border]="'1px solid ' + (releasable() ? '#059669' : '#dc2626')">
            @if (releasable()) {
              <p class="mb-2 small" style="color:#059669;"><strong>All gates passed.</strong> Vehicle is eligible for quality release and dispatch.</p>
              <button class="btn btn-primary btn-sm">Release vehicle for dispatch</button>
            } @else {
              <p class="mb-0 small" style="color:#dc2626;"><strong>Cannot release.</strong> {{ failedCount() }} gate(s) open. A failed vehicle cannot be dispatched until resolved.</p>
            }
          </div>
        </div>
      }
    }
  `,
  styles: ['.mono{font-family:ui-monospace,monospace;}']
})
export class VinTraceabilityComponent {
  selected = signal<VinRecord | null>(null);
  tab = signal<Tab>('summary');

  constructor(public mock: MockDataService) {
    if (this.mock.vins.length) this.selected.set(this.mock.vins[0]);
  }

  gen = computed(() => this.mock.vinGenealogy(this.selected()?.vin ?? ''));
  releasable = computed(() => this.gen().releaseChecklist.every(c => c.passed));
  failedCount = computed(() => this.gen().releaseChecklist.filter(c => !c.passed).length);

  thread(v: VinRecord) {
    return [
      { label: 'Engineering Rev', done: true }, { label: 'BOM/Routing', done: true },
      { label: 'Production Plan', done: true }, { label: v.workOrder, done: true },
      { label: 'Operations', done: true }, { label: 'Quality ' + v.qualityStatus, done: v.qualityStatus === 'RELEASED' },
      { label: 'VIN Assigned', done: true }, { label: v.salesOrder, done: true },
      { label: 'Payment ' + v.paymentStatus, done: v.paymentStatus === 'PAID' },
      { label: 'Delivery', done: v.paymentStatus === 'PAID' && v.qualityStatus === 'RELEASED' }
    ];
  }
  defectsFor(vin: string) {
    return this.mock.defects.filter(d => d.vin === vin && (d.status === 'OPEN' || d.status === 'IN_NCR')).length;
  }
}
