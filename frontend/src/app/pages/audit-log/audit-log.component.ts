import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MockDataService } from '../../core/services/mock-data.service';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';

@Component({
  selector: 'vx-audit-log',
  standalone: true,
  imports: [CommonModule, FormsModule, StatusBadgeComponent, PaginationComponent],
  template: `
    <h5 class="fw-bold mb-1" style="color:#0f172a;">Audit Log</h5>
    <p class="mb-3" style="color:#64748b;font-size:.9rem;">Immutable trail — who changed what, when, from where. Spec §36. Append-only; never edited or deleted.</p>

    <div class="d-flex gap-2 mb-3 flex-wrap align-items-center">
      <div class="position-relative" style="width:240px;max-width:100%;">
        <i class="bi bi-search position-absolute" style="left:.7rem;top:50%;transform:translateY(-50%);color:#94a3b8;font-size:.8rem;"></i>
        <input type="text" class="form-control form-control-sm" style="padding-left:2rem;border-radius:10px;" placeholder="Filter by user, entity, action…" [(ngModel)]="query" (ngModelChange)="page.set(1)">
      </div>
      <select class="form-select form-select-sm" style="width:160px;border-radius:10px;" [(ngModel)]="actionFilter" (ngModelChange)="page.set(1)">
        <option value="">All actions</option>
        <option>CREATE</option><option>UPDATE</option><option>DELETE</option><option>LOGIN</option>
      </select>
      <span class="small" style="color:#94a3b8;">{{ filtered().length }} entries</span>
    </div>

    <div class="vx-card p-0 overflow-auto">
      <table class="table vx-table table-hover mb-0">
        <thead><tr><th>Timestamp</th><th>User</th><th>Role</th><th>Action</th><th>Entity</th><th>Detail</th><th>IP</th></tr></thead>
        <tbody>
          @for (a of paged(); track a.id) {
            <tr>
              <td class="mono small">{{ a.timestamp }}</td>
              <td class="fw-semibold">{{ a.user }}</td>
              <td class="small">{{ a.role }}</td>
              <td><vx-status-badge [label]="a.action" [status]="a.action" /></td>
              <td class="mono small">{{ a.entity }} · {{ a.entityId }}</td>
              <td class="small">{{ a.detail }}</td>
              <td class="mono small">{{ a.ip }}</td>
            </tr>
          }
          @if (filtered().length === 0) { <tr><td colspan="7" class="text-center py-4" style="color:#94a3b8;">No audit entries match your filter.</td></tr> }
        </tbody>
      </table>
    </div>
    <vx-pagination [totalItems]="filtered().length" [pageSize]="5" [currentPage]="page()" (pageChange)="page.set($event)" />
  `,
  styles: ['.mono{font-family:ui-monospace,monospace;}']
})
export class AuditLogComponent {
  query = signal('');
  actionFilter = signal('');
  page = signal(1);
  pageSize = 5;

  filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    const af = this.actionFilter();
    return this.mock.auditLog.filter(a =>
      (!af || a.action === af) &&
      (!q || a.user.toLowerCase().includes(q) || a.entity.toLowerCase().includes(q) || a.detail.toLowerCase().includes(q))
    );
  });
  paged = computed(() => this.filtered().slice((this.page() - 1) * this.pageSize, this.page() * this.pageSize));

  constructor(public mock: MockDataService) {}
}
