import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from '../../core/services/app-data.service';
import { BackendApiService } from '../../core/services/backend-api.service';

@Component({
  selector: 'vx-workforce',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workforce.component.html',
  styleUrls: ['./workforce.component.scss']
})
export class WorkforceComponent {
  shifts = signal<any[]>([]);
  expiring = signal<any[]>([]);
  constructor(public data: AppDataService, api: BackendApiService) {
    api.workforce.employees(0, 100).subscribe(res => {
      data.employees = res.data.content.map((e: any) => ({ id: e.id, name: e.fullName, role: e.department ?? '', factory: e.factoryCode ?? '', shift: 'See shifts below', skill: 'See certificates below', status: e.status }));
    });
    api.workforce.shifts(new Date().toISOString().slice(0, 10)).subscribe(res => this.shifts.set(res.data.map((s: any) => ({ ...s, worker: data.employees.find(e => e.id === s.employeeId)?.name ?? `Worker ${s.employeeId}` }))));
    api.workforce.expiringCertifications().subscribe(res => this.expiring.set(res.data));
  }
}
