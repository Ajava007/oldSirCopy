import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService, ApprovalItem } from '../../core/services/mock-data.service';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge.component';
import { ConfirmDialogService } from '../../shared/services/confirm-dialog.service';
import { ToastService } from '../../core/services/toast.service';

type Filter = 'ALL' | ApprovalItem['type'];

@Component({
  selector: 'vx-approval-queues',
  standalone: true,
  imports: [CommonModule, StatusBadgeComponent],
  template: `
    <h5 class="fw-bold mb-1" style="color:#0f172a;">Approval Queues</h5>
    <p class="mb-3" style="color:#64748b;font-size:.9rem;">Reusable approval framework — POs, ECRs, quality/vehicle releases, maintenance. Approve or reject with confirmation.</p>

    <div class="d-flex flex-wrap gap-2 mb-3">
      @for (f of filters; track f) {
        <button class="btn btn-sm" [class.btn-primary]="filter()===f" [class.btn-outline-secondary]="filter()!==f" (click)="filter.set(f)">
          {{ f }} <span class="badge" [style.background]="badgeBg(f)" [style.color]="badgeFg(f)">{{ countFor(f) }}</span>
        </button>
      }
    </div>

    @if (visible().length === 0) {
      <div class="vx-card p-5 text-center" style="color:#94a3b8;">No pending approvals in this queue.</div>
    }

    @for (a of visible(); track a.id) {
      <div class="vx-card p-3 mb-2 d-flex align-items-start gap-3 flex-wrap">
        <span class="badge flex-shrink-0" style="background:rgba(37,99,235,.1);color:#2563eb;font-size:.65rem;">{{ a.type }}</span>
        <div class="flex-grow-1" style="min-width:200px;">
          <div class="fw-semibold small" style="color:#0f172a;">{{ a.title }}</div>
          <div class="small" style="color:#64748b;">{{ a.detail }}</div>
          <div class="small mt-1" style="color:#94a3b8;">Requested by {{ a.requestedBy }} · {{ a.date }} · <vx-status-badge [label]="a.priority" [status]="a.priority" /></div>
        </div>
        <div class="d-flex gap-2 flex-shrink-0">
          <button class="btn btn-sm btn-outline-secondary" (click)="reject(a)"><i class="bi bi-x-lg me-1"></i>Reject</button>
          <button class="btn btn-sm btn-primary" (click)="approve(a)"><i class="bi bi-check-lg me-1"></i>Approve</button>
        </div>
      </div>
    }
  `
})
export class ApprovalQueuesComponent {
  filter = signal<Filter>('ALL');
  filters: Filter[] = ['ALL', 'PO', 'ECR', 'QUALITY_RELEASE', 'VEHICLE_RELEASE', 'MAINTENANCE'];
  items = signal<ApprovalItem[]>([...this.mock.approvalQueues]);

  visible = computed(() => this.filter() === 'ALL' ? this.items() : this.items().filter(i => i.type === this.filter()));

  constructor(private mock: MockDataService, private confirm: ConfirmDialogService, private toast: ToastService) {}

  countFor(f: Filter) { return f === 'ALL' ? this.items().length : this.items().filter(i => i.type === f).length; }
  badgeBg(f: Filter) { return this.filter() === f ? 'rgba(255,255,255,.25)' : '#e2e8f0'; }
  badgeFg(f: Filter) { return this.filter() === f ? '#ffffff' : '#64748b'; }

  async approve(a: ApprovalItem) {
    const ok = await this.confirm.confirm({ title: 'Approve request', message: `Approve "${a.title}"? This action is logged.`, confirmLabel: 'Approve', danger: false });
    if (!ok) return;
    this.items.update(list => list.filter(i => i.id !== a.id));
    this.toast.success(`Approved ${a.id}.`);
  }

  async reject(a: ApprovalItem) {
    const ok = await this.confirm.confirm({ title: 'Reject request', message: `Reject "${a.title}"? The requester will be notified.`, confirmLabel: 'Reject', danger: true });
    if (!ok) return;
    this.items.update(list => list.filter(i => i.id !== a.id));
    this.toast.error(`Rejected ${a.id}.`);
  }
}
