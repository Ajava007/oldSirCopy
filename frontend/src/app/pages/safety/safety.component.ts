import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../core/services/mock-data.service';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge.component';

type Tab = 'incidents' | 'ppe' | 'training';

@Component({
  selector: 'vx-safety',
  standalone: true,
  imports: [CommonModule, StatusBadgeComponent],
  template: `
    <h5 class="fw-bold mb-1" style="color:#0f172a;">Health &amp; Safety (EHS)</h5>
    <p class="mb-3" style="color:#64748b;font-size:.9rem;">Incidents, near-misses, hazards, PPE compliance, and training — spec §28.</p>

    <div class="row g-3 mb-3">
      <div class="col-6 col-md-3"><div class="vx-card p-3"><div class="text-uppercase" style="color:#64748b;font-size:.7rem;font-weight:600;">Open Incidents</div><div class="display-6 fw-bold" style="color:#dc2626;">1</div><div class="small" style="color:#94a3b8;">under investigation</div></div></div>
      <div class="col-6 col-md-3"><div class="vx-card p-3"><div class="text-uppercase" style="color:#64748b;font-size:.7rem;font-weight:600;">Near-Misses (30d)</div><div class="display-6 fw-bold" style="color:#d97706;">1</div><div class="small" style="color:#94a3b8;">closed</div></div></div>
      <div class="col-6 col-md-3"><div class="vx-card p-3"><div class="text-uppercase" style="color:#64748b;font-size:.7rem;font-weight:600;">PPE Compliance</div><div class="display-6 fw-bold" style="color:#059669;">95%</div><div class="small" style="color:#94a3b8;">avg across areas</div></div></div>
      <div class="col-6 col-md-3"><div class="vx-card p-3"><div class="text-uppercase" style="color:#64748b;font-size:.7rem;font-weight:600;">Expired Training</div><div class="display-6 fw-bold" style="color:#dc2626;">1</div><div class="small" style="color:#94a3b8;">1 expiring soon</div></div></div>
    </div>

    <ul class="nav nav-pills gap-1 mb-3">
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='incidents'" (click)="tab.set('incidents')">Incidents / Near-Misses / Hazards</button></li>
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='ppe'" (click)="tab.set('ppe')">PPE Compliance</button></li>
      <li class="nav-item"><button class="nav-link btn-sm" [class.active]="tab()==='training'" (click)="tab.set('training')">Training &amp; Certifications</button></li>
    </ul>

    @if (tab()==='incidents') {
      <div class="vx-card p-0 overflow-auto">
        <table class="table vx-table table-hover mb-0">
          <thead><tr><th>ID</th><th>Date</th><th>Type</th><th>Severity</th><th>Location</th><th>Description</th><th>Status</th><th>Reported by</th></tr></thead>
          <tbody>
            @for (i of mock.safetyIncidents; track i.id) {
              <tr><td class="mono">{{ i.id }}</td><td class="mono">{{ i.date }}</td><td>{{ i.type }}</td>
              <td><vx-status-badge [label]="i.severity" [status]="i.severity" /></td>
              <td>{{ i.location }}</td><td class="small">{{ i.description }}</td>
              <td><vx-status-badge [label]="i.status" [status]="i.status" /></td><td>{{ i.reportedBy }}</td></tr>
            }
          </tbody>
        </table>
      </div>
    }

    @if (tab()==='ppe') {
      <div class="vx-card p-0 overflow-auto">
        <table class="table vx-table table-hover mb-0">
          <thead><tr><th>Area</th><th>Required PPE</th><th class="text-end">Compliance</th><th>Last check</th></tr></thead>
          <tbody>
            @for (p of mock.ppeChecks; track p.id) {
              <tr><td class="fw-semibold">{{ p.area }}</td><td class="small">{{ p.required }}</td>
              <td class="text-end"><strong [style.color]="p.compliance>=95?'#059669':p.compliance>=90?'#d97706':'#dc2626'">{{ p.compliance }}%</strong></td>
              <td class="mono">{{ p.lastCheck }}</td></tr>
            }
          </tbody>
        </table>
      </div>
    }

    @if (tab()==='training') {
      <div class="vx-card p-0 overflow-auto">
        <table class="table vx-table table-hover mb-0">
          <thead><tr><th>Employee</th><th>Course</th><th>Expiry</th><th>Status</th></tr></thead>
          <tbody>
            @for (t of mock.safetyTraining; track t.id) {
              <tr><td class="fw-semibold">{{ t.employee }}</td><td>{{ t.course }}</td><td class="mono">{{ t.expiry }}</td>
              <td><vx-status-badge [label]="t.status" [status]="t.status" /></td></tr>
            }
          </tbody>
        </table>
      </div>
    }
  `,
  styles: ['.mono{font-family:ui-monospace,monospace;}']
})
export class SafetyComponent {
  tab = signal<Tab>('incidents');
  constructor(public mock: MockDataService) {}
}
