import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../core/services/mock-data.service';

type Tab = 'machines' | 'mos';

@Component({
  selector: 'vx-maintenance',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h5 class="fw-bold mb-1">Maintenance (CMMS)</h5>
    <p class="text-muted small mb-3">Machines, downtime, and preventive/corrective maintenance orders — static data.</p>
    <ul class="nav nav-pills gap-1 mb-3">
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='machines'" (click)="tab.set('machines')" style="color:#e8e5df;">Machines</button></li>
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='mos'" (click)="tab.set('mos')" style="color:#e8e5df;">Maintenance Orders</button></li>
    </ul>

    @if (tab()==='machines') {
      <div class="vx-card p-0 overflow-auto">
        <table class="table vx-table table-hover mb-0">
          <thead><tr><th>Machine</th><th>Name</th><th>Work Center</th><th>Type</th><th>Status</th><th>Next Maintenance</th></tr></thead>
          <tbody>
            @for (m of mock.machines; track m.id) {
              <tr><td class="mono">{{ m.id }}</td><td class="fw-semibold">{{ m.name }}</td><td class="mono">{{ m.workCenter }}</td><td>{{ m.type }}</td>
              <td><span class="badge" [style.background]="m.status==='RUNNING'?'rgba(111,191,115,.18)':'rgba(212,106,90,.18)'" [style.color]="m.status==='RUNNING'?'#6fbf73':'#d46a5a'">{{ m.status }}</span></td>
              <td class="mono">{{ m.nextMaintenance }}</td></tr>
            }
          </tbody>
        </table>
      </div>
    }

    @if (tab()==='mos') {
      <div class="vx-card p-0 overflow-auto">
        <table class="table vx-table table-hover mb-0">
          <thead><tr><th>MO</th><th>Machine</th><th>Type</th><th>Priority</th><th>Status</th><th>Due</th></tr></thead>
          <tbody>
            @for (m of mock.maintenanceOrders; track m.id) {
              <tr><td class="mono">{{ m.id }}</td><td class="fw-semibold">{{ m.machine }}</td><td>{{ m.type }}</td>
              <td><span class="badge" [style.background]="m.priority==='HIGH'?'rgba(212,106,90,.18)':m.priority==='MEDIUM'?'rgba(212,168,74,.18)':'rgba(123,168,184,.18)'" [style.color]="m.priority==='HIGH'?'#d46a5a':m.priority==='MEDIUM'?'#d4a84a':'#7ba8b8'">{{ m.priority }}</span></td>
              <td><span class="badge text-bg-secondary">{{ m.status }}</span></td><td class="mono">{{ m.due }}</td></tr>
            }
          </tbody>
        </table>
      </div>
    }
  `,
  styles: ['.mono{font-family:monospace;}']
})
export class MaintenanceComponent {
  tab = signal<Tab>('machines');
  constructor(public mock: MockDataService) {}
}
