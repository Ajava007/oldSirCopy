import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from '../../core/services/app-data.service';
import { BackendApiService } from '../../core/services/backend-api.service';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge.component';

type Tab = 'plans' | 'wos' | 'shopfloor';

@Component({
  selector: 'vx-production',
  standalone: true,
  imports: [CommonModule, StatusBadgeComponent],
  template: `
    <h5 class="fw-bold mb-1">Production &amp; MES</h5>
    <p class="text-muted small mb-3">Plans and work orders load from the backend; available work-order state transitions are provided by its API.</p>
    <ul class="nav nav-pills gap-1 mb-3">
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='plans'" (click)="tab.set('plans')" style="color:#e8e5df;">Production Plans</button></li>
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='wos'" (click)="tab.set('wos')" style="color:#e8e5df;">Work Orders</button></li>
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='shopfloor'" (click)="tab.set('shopfloor')" style="color:#e8e5df;">Shop Floor</button></li>
    </ul>

    @if (tab()==='plans') {
      <div class="vx-card p-0 overflow-auto">
        <table class="table vx-table table-hover mb-0">
          <thead><tr><th>Plan</th><th>Model</th><th class="text-end">Qty</th><th>Line</th><th>Start</th><th>End</th><th>Status</th></tr></thead>
          <tbody>
            @for (p of data.productionPlans; track p.id) {
              <tr><td class="mono">{{ p.id }}</td><td class="fw-semibold">{{ p.model }}</td><td class="text-end mono">{{ p.qty }}</td><td>{{ p.line }}</td><td>{{ p.start }}</td><td>{{ p.end }}</td>
              <td><span class="badge" [style.background]="p.status==='IN_PROGRESS'?'rgba(196,112,70,.18)':'rgba(123,168,184,.18)'" [style.color]="p.status==='IN_PROGRESS'?'#c47046':'#7ba8b8'">{{ p.status }}</span></td></tr>
            }
          </tbody>
        </table>
      </div>
    }

    @if (tab()==='wos') {
      <div class="vx-card p-0 overflow-auto">
        <table class="table vx-table table-hover mb-0">
          <thead><tr><th>Work Order</th><th>Model</th><th class="text-end">Qty</th><th class="text-end">Done</th><th class="text-end">Rejected</th><th>Line</th><th>Progress</th><th>Status</th></tr></thead>
          <tbody>
            @for (w of data.workOrders; track w.id) {
              <tr><td class="mono">{{ w.id }}</td><td class="fw-semibold">{{ w.model }}</td><td class="text-end mono">{{ w.qty }}</td>
              <td class="text-end mono">{{ w.completed }}</td><td class="text-end mono" [style.color]="w.rejected>0?'#d46a5a':'inherit'">{{ w.rejected }}</td><td>{{ w.line }}</td>
              <td style="min-width:120px;"><div style="height:8px;background:rgba(255,255,255,.08);border-radius:4px;overflow:hidden;"><div [style.width.%]="(w.completed/w.qty)*100" style="height:100%;background:linear-gradient(90deg,#c47046,#7ba8b8);"></div></div></td>
              <td><vx-status-badge [label]="w.status" /></td></tr>
            }
          </tbody>
        </table>
        <p class="small text-muted p-2 mb-0">Status transitions enforced backend: PLANNED → RELEASED → IN_PROGRESS → PAUSED → COMPLETED / CANCELLED. No arbitrary jumps.</p>
      </div>
    }

    @if (tab()==='shopfloor') {
      <div class="vx-card p-4">
        <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
          <div><span class="badge" style="background:rgba(111,191,115,.18);color:#6fbf73;">RUNNING</span> <strong class="ms-2">{{ sf.line }} · {{ sf.workOrder }}</strong></div>
          <div class="text-muted small">Operator view — admin functions hidden</div>
        </div>
        <div class="row g-3 mb-3">
          <div class="col-6 col-md-3"><div class="p-3 rounded" style="background:rgba(0,0,0,.2);border:1px solid rgba(232,229,223,.12);"><div class="text-muted small text-uppercase">Model</div><div class="fw-bold">{{ sf.model }}</div></div></div>
          <div class="col-6 col-md-3"><div class="p-3 rounded" style="background:rgba(0,0,0,.2);border:1px solid rgba(232,229,223,.12);"><div class="text-muted small text-uppercase">Operation</div><div class="fw-bold">{{ sf.operation }}</div></div></div>
          <div class="col-6 col-md-3"><div class="p-3 rounded" style="background:rgba(0,0,0,.2);border:1px solid rgba(232,229,223,.12);"><div class="text-muted small text-uppercase">Target / Actual</div><div class="fw-bold mono">{{ sf.actual }} / {{ sf.target }}</div></div></div>
          <div class="col-6 col-md-3"><div class="p-3 rounded" style="background:rgba(0,0,0,.2);border:1px solid rgba(232,229,223,.12);"><div class="text-muted small text-uppercase">Takt time</div><div class="fw-bold mono">{{ sf.taktMin }} min</div></div></div>
        </div>
        <div class="d-flex flex-wrap gap-2">
          <button class="btn btn-primary btn-sm"><i class="bi bi-play-fill me-1"></i>Start</button>
          <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-pause-fill me-1"></i>Pause</button>
          <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-check-lg me-1"></i>Complete Qty</button>
          <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-exclamation-triangle me-1"></i>Report Defect</button>
          <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-tools me-1"></i>Report Downtime</button>
        </div>
        <p class="small text-muted mt-3 mb-0">Reject: {{ sf.reject }} · Rework: {{ sf.rework }} · Operators: {{ sf.operators }} · Machine: {{ sf.machine }}</p>
      </div>
    }
  `,
  styles: ['.mono{font-family:monospace;}']
})
export class ProductionComponent {
  tab = signal<Tab>('plans');
  constructor(public data: AppDataService, api: BackendApiService) {
    api.production.plans(0, 100).subscribe(res => {
      data.productionPlans = res.data.content.map((p: any) => ({ id: p.planNumber, model: p.modelCode, qty: p.quantity, line: p.lineCode ?? '', start: p.plannedStart, end: p.plannedFinish, status: p.status }));
      const lineCode = (res.data.content as any[]).find((p: any) => p.lineCode)?.lineCode;
      if (lineCode) api.production.activeOnLine(lineCode).subscribe(active => {
        data.shopFloor = { ...data.shopFloor, line: lineCode, workOrder: (active.data[0] as any)?.woNumber ?? 'No active work order' };
      });
    });
    api.production.workOrders(0, 100).subscribe(res => {
      data.workOrders = res.data.content.map((w: any) => ({ id: w.woNumber, plan: w.planNumber ?? '', model: w.modelCode, qty: w.targetQuantity, completed: w.producedQuantity ?? 0, rejected: w.rejectedQuantity ?? 0, line: w.lineCode ?? '', status: w.status }));
    });
  }
  get sf() { return this.data.shopFloor; }
  woColor(s: string) {
    if (s === 'COMPLETED') return { bg: 'rgba(111,191,115,.18)', fg: '#6fbf73' };
    if (s === 'IN_PROGRESS') return { bg: 'rgba(196,112,70,.18)', fg: '#c47046' };
    if (s === 'PAUSED') return { bg: 'rgba(212,168,74,.18)', fg: '#d4a84a' };
    return { bg: 'rgba(123,168,184,.18)', fg: '#7ba8b8' };
  }
}
