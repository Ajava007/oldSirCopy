import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AppDataService } from '../../core/services/app-data.service';
import { BackendApiService } from '../../core/services/backend-api.service';

type Tab = 'orders' | 'customers' | 'dealers' | 'payments';

@Component({
  selector: 'vx-sales-payments',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sales-payments.component.html',
  styleUrls: ['./sales-payments.component.scss']
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
