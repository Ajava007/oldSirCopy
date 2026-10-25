import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../core/services/mock-data.service';

@Component({
  selector: 'vx-workforce',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h5 class="fw-bold mb-1">Workforce</h5>
    <p class="text-muted small mb-3">Employees, skills, certifications, shifts — scoped per factory (static data).</p>
    <div class="vx-card p-0 overflow-auto">
      <table class="table vx-table table-hover mb-0">
        <thead><tr><th>Name</th><th>Role</th><th>Factory</th><th>Shift</th><th>Skill / Certification</th><th>Status</th></tr></thead>
        <tbody>
          @for (e of mock.employees; track e.id) {
            <tr><td class="fw-semibold">{{ e.name }}</td><td>{{ e.role }}</td><td class="mono">{{ e.factory }}</td><td>{{ e.shift }}</td><td>{{ e.skill }}</td>
            <td><span class="badge" [style.background]="e.status==='ACTIVE'?'rgba(111,191,115,.18)':'rgba(212,168,74,.18)'" [style.color]="e.status==='ACTIVE'?'#6fbf73':'#d4a84a'">{{ e.status }}</span></td></tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: ['.mono{font-family:monospace;}']
})
export class WorkforceComponent {
  constructor(public mock: MockDataService) {}
}
