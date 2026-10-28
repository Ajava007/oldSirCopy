import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from '../../core/services/app-data.service';
import { BackendApiService } from '../../core/services/backend-api.service';

type Tab = 'machines' | 'mos' | 'downtime';

@Component({
  selector: 'vx-maintenance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent {
  tab = signal<Tab>('machines');
  downtime = signal<any[]>([]);
  constructor(public data: AppDataService, api: BackendApiService) {
    api.maintenance.assets().subscribe(res => {
      data.machines = res.data.map((a: any) => ({ id: a.assetCode, name: a.name, workCenter: a.lineCode ?? '', type: a.level ?? '', status: a.status, nextMaintenance: '—' }));
    });
    api.maintenance.workOrders(0, 100).subscribe(res => {
      data.maintenanceOrders = res.data.content.map((w: any) => ({ id: w.mwoNumber, machine: w.assetCode, type: w.type ?? '', priority: '—', status: w.status, due: w.scheduledStart ?? '—' }));
    });
    api.maintenance.downtime().subscribe(res => this.downtime.set(res.data));
  }
}
