import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppDataService } from '../../../core/services/app-data.service';

export interface SearchResult { kind: string; id: string; label: string; route: string; }

@Component({
  selector: 'vx-global-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="position-relative" style="width:240px;max-width:40vw;">
      <div class="position-relative">
        <i class="bi bi-search position-absolute" style="left:.7rem;top:50%;transform:translateY(-50%);color:#94a3b8;font-size:.8rem;"></i>
        <input type="text" class="form-control form-control-sm" style="padding-left:2rem;border-radius:10px;"
               placeholder="Search VIN, part, WO…" [(ngModel)]="query" (ngModelChange)="onChange()" (blur)="onBlur()" (focus)="open.set(true)">
      </div>
      @if (open() && results().length) {
        <div class="position-absolute bg-white rounded-xl shadow-lg border mt-1 p-2 w-100" style="z-index:1050;max-height:320px;overflow:auto;">
          @for (r of results(); track r.id) {
            <button class="d-flex align-items-center gap-2 w-100 text-start px-2 py-1.5 rounded border-0 bg-transparent small"
                    style="cursor:pointer;" (mousedown)="go(r)">
              <span class="badge" style="background:#f1f5f9;color:#64748b;font-size:.6rem;">{{ r.kind }}</span>
              <span class="mono flex-grow-1" style="color:#0f172a;">{{ r.label }}</span>
            </button>
          }
        </div>
      }
      @if (open() && query() && !results().length) {
        <div class="position-absolute bg-white rounded-xl shadow-lg border mt-1 p-3 w-100 text-center small" style="z-index:1050;color:#94a3b8;">No matches for “{{ query() }}”</div>
      }
    </div>
  `,
  styles: ['.mono{font-family:ui-monospace,monospace;font-size:.75rem;}']
})
export class GlobalSearchComponent {
  query = signal('');
  open = signal(false);
  results = signal<SearchResult[]>([]);

  constructor(private data: AppDataService, private router: Router) {}

  onChange() {
    const q = this.query().trim().toLowerCase();
    if (!q) { this.results.set([]); return; }
    const r: SearchResult[] = [];
    this.data.vins.filter(v => v.vin.toLowerCase().includes(q) || v.model.toLowerCase().includes(q))
      .forEach(v => r.push({ kind: 'VIN', id: v.vin, label: v.vin + ' · ' + v.model, route: '/vin-traceability' }));
    this.data.parts.filter(p => p.code.toLowerCase().includes(q) || p.name.toLowerCase().includes(q))
      .forEach(p => r.push({ kind: 'Part', id: p.code, label: p.code + ' · ' + p.name, route: '/engineering' }));
    this.data.workOrders.filter(w => w.id.toLowerCase().includes(q))
      .forEach(w => r.push({ kind: 'Work Order', id: w.id, label: w.id + ' · ' + w.model, route: '/production' }));
    this.data.suppliers.filter(s => s.company.toLowerCase().includes(q) || String(s.code).toLowerCase().includes(q))
      .forEach(s => r.push({ kind: 'Supplier', id: String(s.code), label: s.code + ' · ' + s.company, route: '/supply-chain' }));
    this.data.employees.filter(e => e.name.toLowerCase().includes(q))
      .forEach(e => r.push({ kind: 'Employee', id: String(e.id), label: e.name + ' · ' + e.role, route: '/workforce' }));
    this.results.set(r.slice(0, 10));
  }

  onBlur() { setTimeout(() => this.open.set(false), 150); }
  go(r: SearchResult) { this.open.set(false); this.query.set(''); this.results.set([]); this.router.navigateByUrl(r.route); }
}
