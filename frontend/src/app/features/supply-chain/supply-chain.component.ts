import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from '../../core/services/app-data.service';
import { BackendApiService } from '../../core/services/backend-api.service';

type Tab = 'suppliers' | 'pos';

@Component({
  selector: 'vx-supply-chain',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supply-chain.component.html',
  styleUrls: ['./supply-chain.component.scss']
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
