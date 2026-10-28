import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService, ApprovalItem } from '../../core/services/app-data.service';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge.component';
import { ConfirmDialogService } from '../../shared/services/confirm-dialog.service';
import { ToastService } from '../../core/services/toast.service';

type Filter = 'ALL' | ApprovalItem['type'];

@Component({
  selector: 'vx-approval-queues',
  standalone: true,
  imports: [CommonModule, StatusBadgeComponent],
  templateUrl: './approval-queues.component.html',
  styleUrls: ['./approval-queues.component.scss']
})
export class ApprovalQueuesComponent {
  filter = signal<Filter>('ALL');
  filters: Filter[] = ['ALL', 'PO', 'ECR', 'QUALITY_RELEASE', 'VEHICLE_RELEASE', 'MAINTENANCE'];
  items = signal<ApprovalItem[]>([...this.data.approvalQueues]);

  visible = computed(() => this.filter() === 'ALL' ? this.items() : this.items().filter(i => i.type === this.filter()));

  constructor(private data: AppDataService, private confirm: ConfirmDialogService, private toast: ToastService) {}

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
