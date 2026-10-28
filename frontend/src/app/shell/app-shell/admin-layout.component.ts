import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { GlobalSearchComponent } from '../../shared/components/global-search/global-search.component';
import { NotificationBellComponent } from '../../shared/components/notification-bell/notification-bell.component';
import { DemoBannerComponent } from '../../shared/components/demo-banner/demo-banner.component';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'vx-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, GlobalSearchComponent, NotificationBellComponent, DemoBannerComponent, ConfirmDialogComponent],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  readonly pageTitle = signal('Operations overview');
  readonly mobileNavOpen = signal(false);

  private readonly titles: Record<string, string> = {
    workflow: 'Buy · Build · Deliver', dashboard: 'Factory overview',
    'master-data/organizations': 'Organizations', 'master-data/factories': 'Factories',
    'master-data/vehicle-models': 'Vehicle models', 'vehicle-config': 'Vehicle options',
    engineering: 'Engineering', 'supply-chain': 'Supply chain', inventory: 'Inventory',
    production: 'Production', quality: 'Quality', 'vin-traceability': 'Vehicle history',
    'sales-payments': 'Sales & customers', 'finished-vehicles': 'Vehicle yard',
    workforce: 'Workforce', maintenance: 'Maintenance', reports: 'Reports',
    'approval-queues': 'Approvals', scheduling: 'Scheduling', safety: 'Safety', 'audit-log': 'Audit log'
  };

  constructor(public auth: AuthService, public toast: ToastService, router: Router) {
    this.updateTitle(router.url);
    router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd), takeUntilDestroyed())
      .subscribe(event => { this.updateTitle(event.urlAfterRedirects); this.mobileNavOpen.set(false); });
  }

  private updateTitle(url: string): void {
    const path = url.split('?')[0].replace(/^\//, '').replace(/\/$/, '');
    this.pageTitle.set(this.titles[path] ?? 'Operations overview');
  }
}
