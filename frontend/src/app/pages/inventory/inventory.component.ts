import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../core/services/mock-data.service';

type Tab = 'stock' | 'txns' | 'mrp';

@Component({
  selector: 'vx-inventory',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h5 class="fw-bold mb-1">Inventory &amp; MRP</h5>
    <p class="text-muted small mb-3">Stock on hand, traceable transactions, and material requirement planning — Phase 3 (static data).</p>
    <ul class="nav nav-pills gap-1 mb-3">
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='stock'" (click)="tab.set('stock')" style="color:#e8e5df;">Stock</button></li>
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='txns'" (click)="tab.set('txns')" style="color:#e8e5df;">Transactions</button></li>
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='mrp'" (click)="tab.set('mrp')" style="color:#e8e5df;">MRP Shortage</button></li>
    </ul>
    @if (tab()==='stock') {
      <div class="vx-card p-0 overflow-auto">
        <table class="table vx-table table-hover mb-0">
          <thead><tr><th>Part</th><th>Name</th><th>Warehouse</th><th class="text-end">On Hand</th><th class="text-end">Reserved</th><th class="text-end">Available</th><th class="text-end">Value</th></tr></thead>
          <tbody>
            @for (s of mock.stock; track s.id) {
              <tr><td class="mono">{{ s.partCode }}</td><td class="fw-semibold">{{ s.name }}</td><td class="mono">{{ s.warehouse }}</td>
              <td class="text-end mono">{{ s.onHand }}</td><td class="text-end mono" style="color:#d4a84a;">{{ s.reserved }}</td>
              <td class="text-end mono fw-bold" [style.color]="s.onHand-s.reserved < 10 ? '#d46a5a' : '#6fbf73'">{{ s.onHand - s.reserved }}</td>
              <td class="text-end mono">{{ s.value.toLocaleString() }}</td></tr>
            }
          </tbody>
        </table>
      </div>
    }
    @if (tab()==='txns') {
      <div class="vx-card p-0 overflow-auto">
        <table class="table vx-table table-hover mb-0">
          <thead><tr><th>Txn ID</th><th>Date</th><th>Type</th><th>Part</th><th class="text-end">Qty</th><th>Warehouse</th><th>Reference</th></tr></thead>
          <tbody>
            @for (t of mock.stockTxns; track t.id) {
              <tr><td class="mono">{{ t.id }}</td><td>{{ t.date }}</td>
              <td><span class="badge text-bg-secondary">{{ t.type }}</span></td>
              <td class="mono">{{ t.partCode }}</td>
              <td class="text-end mono" [style.color]="t.qty < 0 ? '#d46a5a' : '#6fbf73'">{{ t.qty > 0 ? '+' : '' }}{{ t.qty }}</td>
              <td class="mono">{{ t.warehouse }}</td><td class="mono">{{ t.ref }}</td></tr>
            }
          </tbody>
        </table>
        <p class="small text-muted p-2 mb-0">Every stock change = one traceable transaction. No silent stock modification.</p>
      </div>
    }
    @if (tab()==='mrp') {
      <div class="vx-card p-0 overflow-auto">
        <table class="table vx-table table-hover mb-0">
          <thead><tr><th>Part</th><th>Name</th><th class="text-end">Required</th><th class="text-end">On Hand</th><th class="text-end">Reserved</th><th class="text-end">Incoming</th><th class="text-end">Net Shortage</th></tr></thead>
          <tbody>
            @for (m of mock.mrp; track m.partCode) {
              <tr><td class="mono">{{ m.partCode }}</td><td class="fw-semibold">{{ m.name }}</td>
              <td class="text-end mono">{{ m.required }}</td><td class="text-end mono">{{ m.onHand }}</td><td class="text-end mono">{{ m.reserved }}</td><td class="text-end mono">{{ m.incoming }}</td>
              <td class="text-end mono fw-bold" [style.color]="m.shortage > 0 ? '#d46a5a' : '#6fbf73'">{{ m.shortage > 0 ? m.shortage : 'OK' }}</td></tr>
            }
          </tbody>
        </table>
      </div>
    }
  `,
  styles: ['.mono{font-family:monospace;}']
})
export class InventoryComponent {
  tab = signal<Tab>('stock');
  constructor(public mock: MockDataService) {}
}
