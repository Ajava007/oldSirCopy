import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../core/services/mock-data.service';

type Tab = 'orders' | 'payments';

@Component({
  selector: 'vx-sales-payments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h5 class="fw-bold mb-1">Sales &amp; Payments</h5>
    <p class="text-muted small mb-3">Customer orders and configurable payment methods — Phase 6 (static data). No card data stored; payments verified server-side.</p>
    <ul class="nav nav-pills gap-1 mb-3">
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='orders'" (click)="tab.set('orders')" style="color:#e8e5df;">Sales Orders</button></li>
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='payments'" (click)="tab.set('payments')" style="color:#e8e5df;">Payments &amp; Receipts</button></li>
    </ul>

    @if (tab()==='orders') {
      <div class="vx-card p-0 overflow-auto">
        <table class="table vx-table table-hover mb-0">
          <thead><tr><th>Order</th><th>Customer / Dealer</th><th>Model</th><th class="text-end">Qty</th><th class="text-end">Amount</th><th>Status</th></tr></thead>
          <tbody>
            @for (o of mock.salesOrders; track o.id) {
              <tr><td class="mono">{{ o.id }}</td><td class="fw-semibold">{{ o.customer }}</td><td>{{ o.model }}</td><td class="text-end mono">{{ o.qty }}</td>
              <td class="text-end mono">{{ o.amount.toLocaleString() }}</td>
              <td><span class="badge text-bg-secondary">{{ o.status }}</span></td></tr>
            }
          </tbody>
        </table>
      </div>
    }

    @if (tab()==='payments') {
      <div class="vx-card p-0 overflow-auto">
        <table class="table vx-table table-hover mb-0">
          <thead><tr><th>Payment</th><th>Order</th><th>Method</th><th class="text-end">Amount</th><th>Status</th><th>Date</th></tr></thead>
          <tbody>
            @for (p of mock.payments; track p.id) {
              <tr><td class="mono">{{ p.id }}</td><td class="mono">{{ p.order }}</td><td>{{ p.method }}</td>
              <td class="text-end mono">{{ p.amount.toLocaleString() }}</td>
              <td><span class="badge" [style.background]="p.status==='VERIFIED'?'rgba(111,191,115,.18)':'rgba(212,168,74,.18)'" [style.color]="p.status==='VERIFIED'?'#6fbf73':'#d4a84a'">{{ p.status }}</span></td>
              <td class="mono">{{ p.date }}</td></tr>
            }
          </tbody>
        </table>
        <p class="small text-muted p-2 mb-0">Methods: Cash · Card · Bank Transfer · Gateway (sandbox). A payment is never reported successful without verified confirmation. Idempotency keys prevent double capture. Refunds tracked per payment.</p>
      </div>
    }
  `,
  styles: ['.mono{font-family:monospace;}']
})
export class SalesPaymentsComponent {
  tab = signal<Tab>('orders');
  constructor(public mock: MockDataService) {}
}
