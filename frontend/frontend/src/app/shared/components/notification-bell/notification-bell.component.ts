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
          @if (notifications.length === 0) {
            <div class="px-3 py-3 small text-muted">No new messages.</div>
          }
        </div>
      }
    </div>
  `
})
export class NotificationBellComponent {
  sevColor = SEV_COLOR;
  open = signal(false);
  notifications: AppNotification[] = [];
  unread = signal(this.notifications.filter(n => !n.read).length);

  markAllRead() {
    this.notifications.forEach(n => n.read = true);
    this.unread.set(0);
  }
}
