import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from '../../core/services/app-data.service';
import { BackendApiService } from '../../core/services/backend-api.service';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge.component';

type Tab = 'plans' | 'wos' | 'shopfloor';

@Component({
  selector: 'vx-production',
  standalone: true,
  imports: [CommonModule, StatusBadgeComponent],
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent {
  tab = signal<Tab>('plans');
  constructor(public data: AppDataService, api: BackendApiService) {
    api.production.plans(0, 100).subscribe(res => {
      data.productionPlans = res.data.content.map((p: any) => ({ id: p.planNumber, model: p.modelCode, qty: p.quantity, line: p.lineCode ?? '', start: p.plannedStart, end: p.plannedFinish, status: p.status }));
      const lineCode = (res.data.content as any[]).find((p: any) => p.lineCode)?.lineCode;
      if (lineCode) api.production.activeOnLine(lineCode).subscribe(active => {
        data.shopFloor = { ...data.shopFloor, line: lineCode, workOrder: (active.data[0] as any)?.woNumber ?? 'No active work order' };
      });
    });
    api.production.workOrders(0, 100).subscribe(res => {
      data.workOrders = res.data.content.map((w: any) => ({ id: w.woNumber, plan: w.planNumber ?? '', model: w.modelCode, qty: w.targetQuantity, completed: w.producedQuantity ?? 0, rejected: w.rejectedQuantity ?? 0, line: w.lineCode ?? '', status: w.status }));
    });
  }
  get sf() { return this.data.shopFloor; }
  woColor(s: string) {
    if (s === 'COMPLETED') return { bg: 'rgba(111,191,115,.18)', fg: '#6fbf73' };
    if (s === 'IN_PROGRESS') return { bg: 'rgba(196,112,70,.18)', fg: '#c47046' };
    if (s === 'PAUSED') return { bg: 'rgba(212,168,74,.18)', fg: '#d4a84a' };
    return { bg: 'rgba(123,168,184,.18)', fg: '#7ba8b8' };
  }
}
