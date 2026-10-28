import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppDataService } from '../../core/services/app-data.service';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';

@Component({
  selector: 'vx-audit-log',
  standalone: true,
  imports: [CommonModule, FormsModule, StatusBadgeComponent, PaginationComponent],
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.scss']
})
export class AuditLogComponent {
  query = signal('');
  actionFilter = signal('');
  page = signal(1);
  pageSize = 5;

  filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    const af = this.actionFilter();
    return this.data.auditLog.filter(a =>
      (!af || a.action === af) &&
      (!q || a.user.toLowerCase().includes(q) || a.entity.toLowerCase().includes(q) || a.detail.toLowerCase().includes(q))
    );
  });
  paged = computed(() => this.filtered().slice((this.page() - 1) * this.pageSize, this.page() * this.pageSize));

  constructor(public data: AppDataService) {}
}
