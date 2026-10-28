import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
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
  template: `
    <div class="d-flex" style="min-height:100vh;background:#f4f6fb;">
      <!-- Sidebar -->
      <aside class="d-none d-md-flex flex-column p-3" style="width:248px;background:#ffffff;border-right:1px solid #e2e8f0;">
        <div class="d-flex align-items-center gap-2 mb-4 px-2">
          <span class="d-inline-flex align-items-center justify-content-center" style="width:38px;height:38px;border-radius:11px;background:linear-gradient(135deg,#2563eb,#0d9488);color:#fff;">
            <i class="bi bi-lightning-charge-fill"></i>
          </span>
          <div><div class="fw-bold" style="color:#0f172a;font-size:.95rem;">VeynaX AMMS</div><div style="color:#64748b;font-size:.68rem;">v0.3.0 · Modern UI</div></div>
        </div>
        <nav class="nav flex-column gap-1" style="font-size:.85rem;">
          <a class="nav-link rounded px-2 py-2 fw-bold" routerLink="/workflow" routerLinkActive="active" style="color:#2563eb;"><i class="bi bi-arrow-repeat me-2"></i>Buy → Build → Sell</a>
          <a class="nav-link rounded px-2 py-2" routerLink="/dashboard" routerLinkActive="active" style="color:#334155;"><i class="bi bi-grid-1x2 me-2"></i>Dashboard</a>
          <div class="text-uppercase px-2 mt-3 mb-1" style="color:#94a3b8;font-size:.62rem;letter-spacing:.12em;font-weight:700;">Company Setup</div>
          <a class="nav-link rounded px-2 py-2" routerLink="/master-data/organizations" routerLinkActive="active" style="color:#334155;"><i class="bi bi-building me-2"></i>Organizations</a>
          <a class="nav-link rounded px-2 py-2" routerLink="/master-data/factories" routerLinkActive="active" style="color:#334155;"><i class="bi bi-houses me-2"></i>Factories</a>
          <a class="nav-link rounded px-2 py-2" routerLink="/master-data/vehicle-models" routerLinkActive="active" style="color:#334155;"><i class="bi bi-car-front me-2"></i>Vehicle Models</a>
          <a class="nav-link rounded px-2 py-2" routerLink="/vehicle-config" routerLinkActive="active" style="color:#334155;"><i class="bi bi-sliders me-2"></i>Vehicle Options</a>
          <div class="text-uppercase px-2 mt-3 mb-1" style="color:#94a3b8;font-size:.62rem;letter-spacing:.12em;font-weight:700;">Operations</div>
          <a class="nav-link rounded px-2 py-2" routerLink="/engineering" routerLinkActive="active" style="color:#334155;"><i class="bi bi-diagram-3 me-2"></i>Parts &amp; Build Steps</a>
          <a class="nav-link rounded px-2 py-2" routerLink="/supply-chain" routerLinkActive="active" style="color:#334155;"><i class="bi bi-truck me-2"></i>Suppliers &amp; Orders</a>
          <a class="nav-link rounded px-2 py-2" routerLink="/inventory" routerLinkActive="active" style="color:#334155;"><i class="bi bi-box-seam me-2"></i>Stock &amp; Parts Needed</a>
          <a class="nav-link rounded px-2 py-2" routerLink="/production" routerLinkActive="active" style="color:#334155;"><i class="bi bi-clipboard-check me-2"></i>Build Orders</a>
          <a class="nav-link rounded px-2 py-2" routerLink="/scheduling" routerLinkActive="active" style="color:#334155;"><i class="bi bi-calendar3 me-2"></i>Work Schedule</a>
          <a class="nav-link rounded px-2 py-2" routerLink="/quality" routerLinkActive="active" style="color:#334155;"><i class="bi bi-shield-check me-2"></i>Quality Checks</a>
          <a class="nav-link rounded px-2 py-2" routerLink="/vin-traceability" routerLinkActive="active" style="color:#334155;"><i class="bi bi-fingerprint me-2"></i>Vehicle History</a>
          <div class="text-uppercase px-2 mt-3 mb-1" style="color:#94a3b8;font-size:.62rem;letter-spacing:.12em;font-weight:700;">Commercial &amp; Support</div>
          <a class="nav-link rounded px-2 py-2" routerLink="/sales-payments" routerLinkActive="active" style="color:#334155;"><i class="bi bi-credit-card me-2"></i>Sales &amp; Customers</a>
          <a class="nav-link rounded px-2 py-2" routerLink="/finished-vehicles" routerLinkActive="active" style="color:#334155;"><i class="bi bi-geo-alt me-2"></i>Vehicle Yard</a>
          <a class="nav-link rounded px-2 py-2" routerLink="/approval-queues" routerLinkActive="active" style="color:#334155;"><i class="bi bi-check2-square me-2"></i>Approval Queues</a>
          <a class="nav-link rounded px-2 py-2" routerLink="/workforce" routerLinkActive="active" style="color:#334155;"><i class="bi bi-people me-2"></i>Workers &amp; Shifts</a>
          <a class="nav-link rounded px-2 py-2" routerLink="/maintenance" routerLinkActive="active" style="color:#334155;"><i class="bi bi-tools me-2"></i>Machine Repairs</a>
          <a class="nav-link rounded px-2 py-2" routerLink="/safety" routerLinkActive="active" style="color:#334155;"><i class="bi bi-shield-exclamation me-2"></i>Safety</a>
          <a class="nav-link rounded px-2 py-2" routerLink="/reports" routerLinkActive="active" style="color:#334155;"><i class="bi bi-graph-up me-2"></i>Reports</a>
          <a class="nav-link rounded px-2 py-2" routerLink="/audit-log" routerLinkActive="active" style="color:#334155;"><i class="bi bi-journal-text me-2"></i>Audit Log</a>
        </nav>
        <div class="mt-auto px-2" style="color:#94a3b8;font-size:.65rem;">One factory · one digital thread</div>
      </aside>

      <!-- Main -->
      <div class="flex-grow-1 d-flex flex-column" style="min-width:0;">
        <vx-demo-banner></vx-demo-banner>
        <nav class="navbar px-3 py-2" style="background:#ffffff;border-bottom:1px solid #e2e8f0;">
          <span class="navbar-brand mb-0 h6 small fw-bold d-md-none" style="color:#0f172a;">VeynaX AMMS</span>
          <div class="ms-auto d-flex align-items-center gap-2">
            <div class="d-none d-md-block"><vx-global-search></vx-global-search></div>
            <vx-notification-bell></vx-notification-bell>
            <span class="small d-none d-sm-inline" style="color:#64748b;"><i class="bi bi-person-circle me-1"></i>{{ auth.currentUser()?.fullName }} · {{ auth.currentUser()?.role }}</span>
            <button class="btn btn-sm btn-outline-secondary" (click)="auth.logout()"><i class="bi bi-box-arrow-right me-1"></i>Logout</button>
          </div>
        </nav>
        <main class="p-3 p-md-4 flex-grow-1">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>

    <!-- Toasts -->
    <vx-confirm-dialog></vx-confirm-dialog>
    <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index:1080;">
      @for (t of toast.toasts(); track t.id) {
        <div class="toast show" role="alert" style="background:#ffffff;color:#0f172a;border-left:4px solid {{ t.type==='success'?'#059669':t.type==='error'?'#dc2626':'#2563eb' }};box-shadow:0 10px 30px -10px rgba(15,23,42,.2);">
          <div class="toast-body d-flex justify-content-between align-items-center">
            <span class="small">{{ t.message }}</span>
            <button class="btn-close ms-2" (click)="toast.dismiss(t.id)"></button>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .nav-link.active { background: rgba(37,99,235,.08); color:#2563eb !important; font-weight:600; }
    .nav-link:hover:not(.disabled) { background: #f1f5f9; color:#0f172a !important; }
  `]
})
export class AdminLayoutComponent {
  constructor(public auth: AuthService, public toast: ToastService) {}
}
