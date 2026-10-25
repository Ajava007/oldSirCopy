import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { MockDataService } from '../../core/services/mock-data.service';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge.component';

interface Kpi { label: string; value: string; sub: string; color: string; }
interface Shortcut { label: string; route: string; icon: string; }
interface Alert { message: string; severity: string; }

const ROLE_VIEWS: Record<string, { title: string; subtitle: string; kpis: Kpi[]; shortcuts: Shortcut[]; alerts: Alert[] }> = {
  SUPER_ADMIN: {
    title: 'Executive Dashboard',
    subtitle: 'Cross-factory overview — production, quality, finance, and supplier performance.',
    kpis: [
      { label: 'Vehicles Built YTD', value: '1,247', sub: '+8.2% vs target', color: '#2563eb' },
      { label: 'Revenue (booked)', value: '$48.2M', sub: 'orders confirmed', color: '#0d9488' },
      { label: 'First Pass Yield', value: '96.4%', sub: 'target ≥ 95%', color: '#059669' },
      { label: 'Pending Approvals', value: '6', sub: '3 HIGH priority', color: '#dc2626' }
    ],
    shortcuts: [
      { label: 'Reports & Analytics', route: '/reports', icon: 'bi-graph-up' },
      { label: 'Approval Queues', route: '/approval-queues', icon: 'bi-check2-square' },
      { label: 'VIN Traceability', route: '/vin-traceability', icon: 'bi-fingerprint' },
      { label: 'Finished Vehicle Yard', route: '/finished-vehicles', icon: 'bi-geo-alt' }
    ],
    alerts: [
      { message: 'Quality hold on VIN …A00044 — dispatch blocked', severity: 'CRITICAL' },
      { message: 'Material shortage: BAT-4500 net 30 short', severity: 'HIGH' },
      { message: 'Press-2500T breakdown — maintenance MO pending approval', severity: 'HIGH' },
      { message: 'PO-2026-004 awaiting approval ($180k)', severity: 'MEDIUM' }
    ]
  },
  MANAGER: {
    title: 'Factory Manager Dashboard',
    subtitle: 'Plant operations — production, quality, material, and workforce.',
    kpis: [
      { label: 'Open Work Orders', value: '4', sub: '2 in progress', color: '#2563eb' },
      { label: 'OEE (Line A)', value: '78.2%', sub: 'downtime 42 min today', color: '#0d9488' },
      { label: 'Open Defects', value: '2', sub: '1 critical', color: '#dc2626' },
      { label: 'Material Shortages', value: '3', sub: 'blocking 1 WO', color: '#d97706' }
    ],
    shortcuts: [
      { label: 'Production / MES', route: '/production', icon: 'bi-clipboard-check' },
      { label: 'Quality / NCR', route: '/quality', icon: 'bi-shield-check' },
      { label: 'Inventory / MRP', route: '/inventory', icon: 'bi-box-seam' },
      { label: 'Maintenance', route: '/maintenance', icon: 'bi-tools' }
    ],
    alerts: [
      { message: 'WO-2026-008 at 84/120 — on takt', severity: 'LOW' },
      { message: 'Material shortage: BAT-4500 net 30 short', severity: 'HIGH' },
      { message: 'Press-2500T breakdown reported', severity: 'HIGH' }
    ]
  },
  VIEWER: {
    title: 'Read-Only Overview',
    subtitle: 'View access — no create/edit/approve actions available.',
    kpis: [
      { label: 'Vehicles Built YTD', value: '1,247', sub: 'across plants', color: '#2563eb' },
      { label: 'First Pass Yield', value: '96.4%', sub: 'rolling 30d', color: '#059669' },
      { label: 'OEE (Line A)', value: '78.2%', sub: 'this week', color: '#0d9488' },
      { label: 'Finished Vehicles', value: '5', sub: 'in yard', color: '#64748b' }
    ],
    shortcuts: [
      { label: 'VIN Traceability', route: '/vin-traceability', icon: 'bi-fingerprint' },
      { label: 'Reports', route: '/reports', icon: 'bi-graph-up' },
      { label: 'Finished Vehicle Yard', route: '/finished-vehicles', icon: 'bi-geo-alt' }
    ],
    alerts: [
      { message: 'You have read-only access. Contact an admin for write permissions.', severity: 'MEDIUM' }
    ]
  }
};

@Component({
  selector: 'vx-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, StatusBadgeComponent],
  template: `
    <h4 class="fw-bold mb-1" style="color:#0f172a;">{{ view().title }} <span class="badge ms-2" style="background:rgba(37,99,235,.1);color:#2563eb;">{{ role() }}</span></h4>
    <p class="mb-4" style="color:#64748b;font-size:.9rem;">{{ view().subtitle }} · Welcome, {{ auth.currentUser()?.fullName }}</p>

    <div class="row g-3 mb-4">
      @for (k of view().kpis; track k.label) {
        <div class="col-6 col-md-3"><div class="vx-card p-3"><div class="text-uppercase" style="color:#64748b;font-size:.7rem;font-weight:600;">{{ k.label }}</div><div class="display-6 fw-bold" [style.color]="k.color">{{ k.value }}</div><div class="small" style="color:#94a3b8;">{{ k.sub }}</div></div></div>
      }
    </div>

    <div class="row g-3">
      <div class="col-12 col-md-7">
        <div class="vx-card p-4">
          <h6 class="fw-bold mb-3" style="color:#0f172a;">Quick actions</h6>
          <div class="row g-2 small">
            @for (m of view().shortcuts; track m.route) {
              <div class="col-6">
                <a [routerLink]="m.route" class="d-flex align-items-center gap-2 p-2 rounded" style="background:#f8fafc;color:#334155;text-decoration:none;border:1px solid #e2e8f0;">
                  <i [class]="'bi ' + m.icon" style="color:#2563eb;"></i> {{ m.label }}
                </a>
              </div>
            }
          </div>
        </div>
      </div>
      <div class="col-12 col-md-5">
        <div class="vx-card p-4">
          <h6 class="fw-bold mb-3" style="color:#0f172a;">Live alerts</h6>
          @for (a of view().alerts; track a.message) {
            <div class="d-flex align-items-center gap-2 mb-2 small">
              <span class="rounded-circle flex-shrink-0" style="width:8px;height:8px;background:{{ a.severity==='CRITICAL'?'#dc2626':a.severity==='HIGH'?'#d97706':'#2563eb' }};"></span>
              <span class="flex-grow-1" style="color:#334155;">{{ a.message }}</span>
              <vx-status-badge [label]="a.severity" [status]="a.severity" />
            </div>
          }
        </div>
        <div class="vx-card p-3 mt-3 text-center" style="background:linear-gradient(135deg,#2563eb,#0d9488);color:#fff;border:none;">
          <a routerLink="/vin-traceability" class="btn btn-light btn-sm fw-bold" style="color:#2563eb;">Open VIN genealogy <i class="bi bi-arrow-right ms-1"></i></a>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent {
  role = computed(() => this.auth.currentUser()?.role ?? 'VIEWER');
  view = computed(() => ROLE_VIEWS[this.role()] ?? ROLE_VIEWS['VIEWER']);
  constructor(public auth: AuthService, public mock: MockDataService) {}
}
