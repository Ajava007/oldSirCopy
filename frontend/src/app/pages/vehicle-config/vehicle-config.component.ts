import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MockDataService } from '../../core/services/mock-data.service';

type Tab = 'variants' | 'builder';

@Component({
  selector: 'vx-vehicle-config',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h5 class="fw-bold mb-1" style="color:#0f172a;">Vehicle Product Management</h5>
    <p class="mb-3" style="color:#64748b;font-size:.9rem;">Variants and selectable configuration — config determines applicable BOM &amp; routing. Phase 2A.</p>
    <ul class="nav nav-pills gap-1 mb-3">
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='variants'" (click)="tab.set('variants')">Variants</button></li>
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='builder'" (click)="tab.set('builder')">Configuration Builder</button></li>
    </ul>

    @if (tab()==='variants') {
      <div class="vx-card p-0 overflow-auto">
        <table class="table vx-table table-hover mb-0">
          <thead><tr><th>Variant Code</th><th>Model</th><th>Engine</th><th>Transmission</th><th>Trim</th><th>Market</th><th>Year</th></tr></thead>
          <tbody>
            @for (v of mock.variants; track v.code) {
              <tr><td class="mono fw-bold">{{ v.code }}</td><td class="mono">{{ v.model }}</td><td>{{ v.engine }}</td><td>{{ v.transmission }}</td><td>{{ v.trim }}</td><td>{{ v.market }}</td><td>{{ v.modelYear }}</td></tr>
            }
          </tbody>
        </table>
      </div>
    }

    @if (tab()==='builder') {
      <div class="row g-3">
        <div class="col-12 col-md-7">
          <div class="vx-card p-4">
            <h6 class="fw-bold mb-3" style="color:#0f172a;">Select options</h6>
            @for (g of optionGroups(); track g) {
              <div class="mb-3">
                <div class="text-uppercase mb-1" style="color:#64748b;font-size:.68rem;font-weight:700;letter-spacing:.08em;">{{ g }}</div>
                <div class="d-flex flex-wrap gap-2">
                  @for (o of optionsByGroup(g); track o.code) {
                    <button class="btn btn-sm" [class.btn-primary]="selected()[g]===o.code" [class.btn-outline-secondary]="selected()[g]!==o.code" (click)="select(g, o.code)">
                      {{ o.label }} <span class="mono" style="opacity:.75;">{{ o.price>0 ? '+'+o.price : 'incl.' }}</span>
                    </button>
                  }
                </div>
              </div>
            }
          </div>
        </div>
        <div class="col-12 col-md-5">
          <div class="vx-card p-4" style="position:sticky;top:1rem;">
            <h6 class="fw-bold mb-2" style="color:#0f172a;">Configuration summary</h6>
            <div class="mono p-2 rounded mb-3" style="background:#f1f5f9;font-size:.78rem;color:#2563eb;word-break:break-all;">CFG-{{ configId() }}</div>
            <table class="table table-sm mb-3" style="font-size:.82rem;">
              <tbody>
                @for (g of optionGroups(); track g) {
                  <tr><td style="color:#64748b;">{{ g }}</td><td class="text-end fw-semibold">{{ labelOf(g) }}</td></tr>
                }
              </tbody>
            </table>
            <div class="d-flex justify-content-between align-items-center pt-2 border-top">
              <span class="fw-bold" style="color:#0f172a;">Total options</span>
              <span class="fw-bold mono" style="color:#2563eb;font-size:1.1rem;">+{{ totalPrice().toLocaleString() }}</span>
            </div>
            <p class="small mt-3 mb-0" style="color:#94a3b8;">This config ID maps to an applicable BOM revision and routing. Backend will validate effectivity.</p>
          </div>
        </div>
      </div>
    }
  `,
  styles: ['.mono{font-family:ui-monospace,monospace;}']
})
export class VehicleConfigComponent {
  tab = signal<Tab>('variants');
  selected = signal<Record<string, string>>({});

  constructor(public mock: MockDataService) {
    // default select first option in each group
    const init: Record<string, string> = {};
    this.optionGroups().forEach(g => { const opts = this.optionsByGroup(g); if (opts[0]) init[g] = opts[0].code; });
    this.selected.set(init);
  }

  optionGroups() {
    return [...new Set(this.mock.configOptions.map(o => o.group))];
  }
  optionsByGroup(g: string) {
    return this.mock.configOptions.filter(o => o.group === g);
  }
  select(g: string, code: string) {
    this.selected.update(s => ({ ...s, [g]: code }));
  }
  labelOf(g: string) {
    const code = this.selected()[g];
    return this.mock.configOptions.find(o => o.group === g && o.code === code)?.label ?? '—';
  }
  totalPrice = computed(() => {
    let sum = 0;
    Object.entries(this.selected()).forEach(([g, code]) => {
      const o = this.mock.configOptions.find(x => x.group === g && x.code === code);
      if (o) sum += o.price;
    });
    return sum;
  });
  configId = computed(() => {
    return Object.values(this.selected()).join('-').toUpperCase();
  });
}
