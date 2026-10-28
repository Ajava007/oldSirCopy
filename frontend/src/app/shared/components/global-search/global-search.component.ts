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
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
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
