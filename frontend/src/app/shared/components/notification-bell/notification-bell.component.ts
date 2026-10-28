import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Severity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
export interface AppNotification { id: string; severity: Severity; message: string; link: string; time: string; read: boolean; }

const SEV_COLOR: Record<Severity, string> = { CRITICAL: '#dc2626', HIGH: '#d97706', MEDIUM: '#2563eb', LOW: '#64748b' };

@Component({
  selector: 'vx-notification-bell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-bell.component.html',
  styleUrls: ['./notification-bell.component.scss']
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
