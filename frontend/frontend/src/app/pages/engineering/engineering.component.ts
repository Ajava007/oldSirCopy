import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from '../../core/services/app-data.service';
import { BackendApiService } from '../../core/services/backend-api.service';

type Tab = 'parts' | 'bom' | 'routing';

@Component({
  selector: 'vx-engineering',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h5 class="fw-bold mb-1">Engineering</h5>
    <p class="text-muted small mb-3">Parts, bill of materials, and work steps from the backend.</p>
    <ul class="nav nav-pills gap-1 mb-3">
      @for (t of tabs; track t.id) {
        <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()===t.id" (click)="tab.set(t.id)" style="color:#e8e5df;">{{ t.label }}</button></li>
      }
    </ul>
    @if (tab()==='parts') {
      <div class="vx-card p-0 overflow-auto">
        <table class="table vx-table table-hover mb-0">
          <thead><tr><th>Code</th><th>Name</th><th>Category</th><th>UoM</th><th class="text-end">Unit cost</th><th>Status</th></tr></thead>
          <tbody>
            @for (p of data.parts; track p.id) {
              <tr><td class="mono">{{ p.code }}</td><td class="fw-semibold">{{ p.name }}</td><td>{{ p.category }}</td><td>{{ p.uom }}</td><td class="text-end mono">{{ p.cost.toLocaleString() }}</td>
              <td><span class="badge" [style.background]="p.status==='ACTIVE'?'rgba(111,191,115,.18)':'rgba(212,168,74,.18)'" [style.color]="p.status==='ACTIVE'?'#6fbf73':'#d4a84a'">{{ p.status }}</span></td></tr>
            }
          </tbody>
        </table>
      </div>
    }
    @if (tab()==='bom') {
      <div class="vx-card p-3">
        <p class="small text-muted mb-2">Multi-level BOM for <strong class="text-white">SUVX-2026</strong> — circular-reference prevention enforced at backend.</p>
        <table class="table vx-table table-sm mb-0">
          <thead><tr><th style="width:40px;">Lvl</th><th>Code</th><th>Component</th><th>Qty</th><th>Type</th></tr></thead>
          <tbody>
            @for (b of data.bom; track b.code) {
              <tr [style.font-weight]="b.level===0?'700':'400'" [style.background]="b.level===0?'rgba(196,112,70,.08)':'transparent'">
                <td class="mono">{{ b.level }}</td>
                <td class="mono" [style.padding-left.px]="b.level*18">{{ b.code }}</td>
                <td>{{ b.name }}</td><td class="mono">{{ b.qty }} {{ b.uom }}</td>
                <td><span class="badge text-bg-secondary">{{ b.type }}</span></td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
    @if (tab()==='routing') {
      <div class="vx-card p-0 overflow-auto">
        <table class="table vx-table table-hover mb-0">
          <thead><tr><th>Seq</th><th>Operation</th><th>Work Center</th><th>Machine</th><th class="text-end">Setup (min)</th><th class="text-end">Cycle (min)</th></tr></thead>
          <tbody>
            @for (r of data.routing; track r.seq) {
              <tr><td class="mono">{{ r.seq }}</td><td class="fw-semibold">{{ r.name }}</td><td class="mono">{{ r.workCenter }}</td><td>{{ r.machine }}</td><td class="text-end mono">{{ r.setupMin }}</td><td class="text-end mono">{{ r.cycleMin }}</td></tr>
            }
          </tbody>
        </table>
      </div>
    }
  `,
  styles: ['.mono{font-family:monospace;}']
})
export class EngineeringComponent {
  tab = signal<Tab>('parts');
  tabs: { id: Tab; label: string }[] = [
    { id: 'parts', label: 'Part Master' },
    { id: 'bom', label: 'BOM (multi-level)' },
    { id: 'routing', label: 'Manufacturing Routing' }
  ];
  constructor(public data: AppDataService, private api: BackendApiService) {
    this.api.parts.list(0, 100).subscribe(res => {
      this.data.parts = res.data.content.map((p: any) => ({ id: p.id, code: p.partCode, name: p.name, category: p.category ?? '', uom: p.uom, cost: p.standardCost ?? 0, status: p.status }));
    });
    this.api.vehicleModels.list(0, 100).subscribe(res => {
      const modelCode = (res.data.content[0] as any)?.modelCode;
      if (!modelCode) return;
      this.api.bom.byParent(modelCode).subscribe(result => {
        this.data.bom = result.data.map((row: any) => ({ level: row.level ?? 1, code: row.componentPartCode, name: row.componentPartCode, qty: row.quantity, uom: '', type: row.optional ? 'Optional' : 'Component' }));
      });
      this.api.routing.byModel(modelCode).subscribe(result => {
        this.data.routing = result.data.map((op: any) => ({ seq: op.operationNumber, name: op.operationName, workCenter: op.workCenter, machine: op.workCenter, setupMin: Math.round((op.setupTimeSec ?? 0) / 60), cycleMin: Number(((op.cycleTimeSec ?? 0) / 60).toFixed(2)) }));
      });
    });
  }
}
