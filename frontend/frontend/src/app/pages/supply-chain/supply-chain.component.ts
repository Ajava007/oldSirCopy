import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from '../../core/services/app-data.service';
import { BackendApiService } from '../../core/services/backend-api.service';

type Tab = 'suppliers' | 'pos';

@Component({
  selector: 'vx-supply-chain',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h5 class="fw-bold mb-1">Supply Chain &amp; Procurement</h5>
    <p class="text-muted small mb-3">Supplier and purchase order records load from the backend. Goods receipt workflows are not exposed by the current API.</p>
    <ul class="nav nav-pills gap-1 mb-3">
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='suppliers'" (click)="tab.set('suppliers')" style="color:#e8e5df;">Suppliers</button></li>
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='pos'" (click)="tab.set('pos')" style="color:#e8e5df;">Purchase Orders</button></li>
    </ul>
    @if (tab()==='suppliers') {
      <div class="vx-card p-0 overflow-auto">
        <table class="table vx-table table-hover mb-0">
          <thead><tr><th>Code</th><th>Company</th><th>Category</th><th>Country</th><th class="text-end">Rating</th><th>Status</th></tr></thead>
          <tbody>
            @for (s of data.suppliers; track s.id) {
              <tr><td class="mono">{{ s.code }}</td><td class="fw-semibold">{{ s.company }}</td><td>{{ s.category }}</td><td>{{ s.country }}</td>
              <td class="text-end mono">{{ s.rating }} / 5.0</td>
              <td><span class="badge" [style.background]="s.status==='APPROVED'?'rgba(111,191,115,.18)':'rgba(212,168,74,.18)'" [style.color]="s.status==='APPROVED'?'#6fbf73':'#d4a84a'">{{ s.status }}</span></td></tr>
            }
          </tbody>
        </table>
      </div>
    }
    @if (tab()==='pos') {
      <div class="vx-card p-0 overflow-auto">
        <table class="table vx-table table-hover mb-0">
          <thead><tr><th>PO Number</th><th>Supplier</th><th>Date</th><th class="text-end">Items</th><th class="text-end">Total</th><th>Status</th></tr></thead>
          <tbody>
            @for (p of data.purchaseOrders; track p.id) {
              <tr><td class="mono">{{ p.id }}</td><td class="fw-semibold">{{ p.supplier }}</td><td>{{ p.date }}</td><td class="text-end mono">{{ p.items }}</td>
              <td class="text-end mono">{{ p.total.toLocaleString() }}</td>
              <td><span class="badge" [style.background]="statusColor(p.status).bg" [style.color]="statusColor(p.status).fg">{{ p.status }}</span></td></tr>
            }
          </tbody>
        </table>
      </div>
    }
  `,
  styles: ['.mono{font-family:monospace;}']
})
export class SupplyChainComponent {
  tab = signal<Tab>('suppliers');
  constructor(public data: AppDataService, api: BackendApiService) {
    api.suppliers.list(0, 100).subscribe(res => {
      data.suppliers = res.data.content.map((s: any) => ({ id: s.id, code: s.code, company: s.company, category: s.category ?? '', country: s.country ?? '', rating: s.rating ?? 0, status: s.status }));
    });
    api.purchaseOrders.list(0, 100).subscribe(res => {
      data.purchaseOrders = res.data.content.map((po: any) => ({ id: po.poNumber, supplier: po.supplierCode, date: po.orderDate, total: po.totalAmount, status: po.status, items: po.items?.length ?? 0 }));
    });
  }
  statusColor(s: string) {
    if (s === 'RECEIVED') return { bg: 'rgba(111,191,115,.18)', fg: '#6fbf73' };
    if (s === 'OPEN' || s === 'APPROVED') return { bg: 'rgba(123,168,184,.18)', fg: '#7ba8b8' };
    return { bg: 'rgba(212,168,74,.18)', fg: '#d4a84a' };
  }
}
