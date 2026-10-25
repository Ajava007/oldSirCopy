import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Severity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
export interface AppNotification { id: string; severity: Severity; message: string; link: string; time: string; read: boolean; }

const SEV_COLOR: Record<Severity, string> = { CRITICAL: '#dc2626', HIGH: '#d97706', MEDIUM: '#2563eb', LOW: '#64748b' };

@Component({
  selector: 'vx-notification-bell',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="position-relative">
      <button class="btn btn-sm btn-outline-secondary position-relative" style="border-radius:10px;" (click)="open.set(!open())">
        <i class="bi bi-bell"></i>
        @if (unread() > 0) {
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill" style="background:#dc2626;font-size:.6rem;">{{ unread() }}</span>
        }
      </button>
      @if (open()) {
        <div class="position-absolute bg-white rounded-xl shadow-lg border p-0 mt-2" style="right:0;width:320px;z-index:1050;max-height:380px;overflow:auto;">
          <div class="px-3 py-2 border-bottom d-flex justify-content-between align-items-center">
            <strong class="small">Notifications</strong>
            <button class="btn btn-link btn-sm p-0" style="font-size:.75rem;" (click)="markAllRead()">Mark all read</button>
          </div>
          @for (n of notifications; track n.id) {
            <div class="px-3 py-2 border-bottom small d-flex gap-2" [style.opacity]="n.read ? .5 : 1">
              <span class="mt-1 flex-shrink-0 rounded-circle" style="width:8px;height:8px;background:{{ sevColor[n.severity] }};"></span>
              <div class="flex-grow-1">
                <div style="color:#0f172a;">{{ n.message }}</div>
                <div style="color:#94a3b8;font-size:.68rem;">{{ n.severity }} · {{ n.time }}</div>
              </div>
            </div>
          }
        </div>
      }
    </div>
  `
})
export class NotificationBellComponent {
  sevColor = SEV_COLOR;
  open = signal(false);
  notifications: AppNotification[] = [
    { id: 'N1', severity: 'CRITICAL', message: 'Quality hold on VIN …A00044 — cannot dispatch', link: '/vin-traceability', time: '2 min ago', read: false },
    { id: 'N2', severity: 'HIGH', message: 'Material shortage: BAT-4500 net 30 short', link: '/inventory', time: '18 min ago', read: false },
    { id: 'N3', severity: 'HIGH', message: 'Machine Press-2500T breakdown reported', link: '/maintenance', time: '1 hr ago', read: false },
    { id: 'N4', severity: 'MEDIUM', message: 'PO-2026-004 awaiting approval', link: '/supply-chain', time: '3 hr ago', read: true },
    { id: 'N5', severity: 'LOW', message: 'WO-2026-008 completed on Line-A', link: '/production', time: 'Yesterday', read: true }
  ];
  unread = signal(this.notifications.filter(n => !n.read).length);

  markAllRead() {
    this.notifications.forEach(n => n.read = true);
    this.unread.set(0);
  }
}
