import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from '../../core/services/app-data.service';
import { BackendApiService } from '../../core/services/backend-api.service';

@Component({
  selector: 'vx-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  get s() { return this.data.stats(); }
  get woMix() {
    const list = this.data.workOrders;
    return [
      { label: 'In Progress', value: list.filter(w => w.status === 'IN_PROGRESS').length, color: '#c47046' },
      { label: 'Completed', value: list.filter(w => w.status === 'COMPLETED').length, color: '#6fbf73' },
      { label: 'Paused', value: list.filter(w => w.status === 'PAUSED').length, color: '#d4a84a' },
      { label: 'Released', value: list.filter(w => w.status === 'RELEASED').length, color: '#7ba8b8' }
    ];
  }
  get totalWO() { return this.data.workOrders.length || 1; }
  get shortageParts() { return this.data.mrp.filter(x => x.shortage > 0); }
  constructor(public data: AppDataService, api: BackendApiService) {
    api.production.workOrders(0, 100).subscribe(res => {
      data.workOrders = res.data.content.map((w: any) => ({ id: w.woNumber, plan: w.planNumber ?? '', model: w.modelCode, qty: w.targetQuantity, completed: w.producedQuantity ?? 0, rejected: w.rejectedQuantity ?? 0, line: w.lineCode ?? '', status: w.status }));
    });
    api.inventory.items(0, 100).subscribe(res => {
      data.stock = res.data.content.map((item: any) => ({ id: item.id, partCode: item.partCode, name: item.partCode, warehouse: item.warehouse, onHand: item.onHand, reserved: item.reserved, uom: '', value: 0 }));
    });
    api.quality.inspections(0, 100).subscribe(res => {
      data.inspections = res.data.content.map((i: any) => ({ id: i.inspectionNumber, part: i.partCode ?? i.vin ?? '', operation: i.type, result: i.result, inspector: i.inspectorName ?? '', date: i.inspectedAt ?? i.createdAt }));
    });
    api.quality.ncrs(0, 100).subscribe(res => {
      data.ncrs = res.data.content.map((n: any) => ({ id: n.ncrNumber, title: n.containment ?? n.ncrNumber, vin: n.vin ?? '', status: n.status, owner: '', due: n.closedAt ?? '' }));
    });
    api.sales.orders(0, 100).subscribe(res => {
      data.salesOrders = res.data.content.map((o: any) => ({ id: o.soNumber, customer: String(o.customerId), model: o.modelCode, qty: 1, amount: o.totalAmount ?? 0, status: o.paymentStatus }));
    });
    api.reports.history(0, 100).subscribe(res => {
      data.reports = res.data.content.map((item: any) => ({ id: item.id, name: item.reportName, format: item.format, generatedBy: item.generatedBy ?? 'System', createdAt: item.createdAt ?? '' }));
    });
  }
}
