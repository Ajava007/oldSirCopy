import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from '../../core/services/app-data.service';
import { BackendApiService } from '../../core/services/backend-api.service';
import { forkJoin } from 'rxjs';

type Tab = 'stock' | 'txns' | 'mrp';

@Component({
  selector: 'vx-inventory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  tab = signal<Tab>('stock');
  constructor(public data: AppDataService, api: BackendApiService) {
    api.inventory.items(0, 100).subscribe(res => {
      data.stock = res.data.content.map((item: any) => ({ id: item.id, partCode: item.partCode, name: item.partCode, warehouse: item.warehouse, onHand: item.onHand, reserved: item.reserved, uom: '', value: 0 }));
      const codes = res.data.content.map((item: any) => item.partCode);
      if (codes.length) forkJoin(codes.map((partCode: string) => api.inventory.transactions(partCode))).subscribe(results => {
        data.stockTxns = results.flatMap(result => result.data.map((txn: any) => ({ id: String(txn.id), date: txn.createdAt, type: txn.txnType, partCode: txn.partCode, qty: txn.quantity, warehouse: txn.warehouse, ref: txn.referenceId ?? '' })));
      });
    });
    api.inventory.mrpRun('MRP-STARTER-001').subscribe(res => {
      data.mrp = res.data.map((row: any) => ({ partCode: row.partCode, name: row.partCode, required: row.grossRequirement, onHand: row.onHand, reserved: 0, incoming: row.scheduledReceipts, shortage: row.netShortage }));
    });
  }
}
