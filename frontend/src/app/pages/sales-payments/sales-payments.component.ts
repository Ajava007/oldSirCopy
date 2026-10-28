import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from '../../core/services/app-data.service';
import { BackendApiService } from '../../core/services/backend-api.service';

type Tab = 'orders' | 'customers' | 'dealers' | 'payments';

@Component({
  selector: 'vx-sales-payments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h5 class="fw-bold mb-1">Sales &amp; Payments</h5>
    <p class="text-muted small mb-3">Sales orders, customers, and dealers load from the backend.</p>
    <ul class="nav nav-pills gap-1 mb-3">
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='orders'" (click)="tab.set('orders')" style="color:#e8e5df;">Sales Orders</button></li>
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='customers'" (click)="tab.set('customers')" style="color:#e8e5df;">Customers</button></li>
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='dealers'" (click)="tab.set('dealers')" style="color:#e8e5df;">Dealers</button></li>
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='payments'" (click)="tab.set('payments')" style="color:#e8e5df;">Payments &amp; Receipts</button></li>
    </ul>

    @if (tab()==='orders') {
      <div class="vx-card p-0 overflow-auto">
        <table class="table vx-table table-hover mb-0">
          <thead><tr><th>Order</th><th>Customer / Dealer</th><th>Model</th><th class="text-end">Qty</th><th class="text-end">Amount</th><th>Status</th></tr></thead>
          <tbody>
            @for (o of data.salesOrders; track o.id) {
              <tr><td class="mono">{{ o.id }}</td><td class="fw-semibold">{{ o.customer }}</td><td>{{ o.model }}</td><td class="text-end mono">{{ o.qty }}</td>
              <td class="text-end mono">{{ o.amount.toLocaleString() }}</td>
              <td><span class="badge text-bg-secondary">{{ o.status }}</span></td></tr>
            }
          </tbody>
        </table>
      </div>
    }

    @if (tab()==='customers') {
      <div class="vx-card p-0 overflow-auto"><table class="table vx-table table-hover mb-0"><thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Address</th></tr></thead><tbody>
        @for (c of data.customers; track c.id) { <tr><td class="fw-semibold">{{ c.name }}</td><td>{{ c.email }}</td><td>{{ c.phone }}</td><td>{{ c.address }}</td></tr> }
      </tbody></table></div>
    }
    @if (tab()==='dealers') {
      <div class="vx-card p-0 overflow-auto"><table class="table vx-table table-hover mb-0"><thead><tr><th>Code</th><th>Name</th><th>City</th><th>Email</th><th>Status</th></tr></thead><tbody>
        @for (d of data.dealers; track d.id) { <tr><td>{{ d.code }}</td><td class="fw-semibold">{{ d.name }}</td><td>{{ d.city }}</td><td>{{ d.email }}</td><td>{{ d.status }}</td></tr> }
      </tbody></table></div>
    }

    @if (tab()==='payments') {
      <div class="vx-card p-3">
        <h6 class="fw-bold">Payment records are not available from this backend</h6>
        <p class="small text-muted mb-0">Sales orders expose a payment status and a mark-paid action. There is no payment ledger, gateway verification, refund, or receipt API, so this view does not show sample transactions as live data.</p>
      </div>
    }
  `,
  styles: ['.mono{font-family:monospace;}']
})
export class SalesPaymentsComponent {
  tab = signal<Tab>('orders');
  constructor(public data: AppDataService, api: BackendApiService) {
    api.sales.orders(0, 100).subscribe(res => {
      data.salesOrders = res.data.content.map((o: any) => ({ id: o.soNumber ?? String(o.id), customer: o.customerName ?? String(o.customerId ?? '—'), model: o.modelCode ?? '—', qty: 1, amount: o.totalAmount ?? 0, status: o.paymentStatus ?? o.status }));
    });
    api.sales.customers(0, 100).subscribe(res => { data.customers = res.data.content.map((c: any) => ({ id: c.id, name: c.name, email: c.email, phone: c.phone ?? '', address: c.address ?? '' })); });
    api.sales.dealers(0, 100).subscribe(res => { data.dealers = res.data.content.map((d: any) => ({ id: d.id, code: d.code, name: d.name, city: d.city, email: d.contactEmail ?? '', status: d.status })); });
  }
}
