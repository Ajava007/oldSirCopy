import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService, YardSlot } from '../../core/services/app-data.service';
import { BackendApiService } from '../../core/services/backend-api.service';

@Component({
  selector: 'vx-finished-vehicles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './finished-vehicles.component.html',
  styleUrls: ['./finished-vehicles.component.scss']
})
export class FinishedVehiclesComponent {
  selectedSlot = signal<YardSlot | null>(null);
  constructor(public data: AppDataService, api: BackendApiService) {
    api.sales.yardMap().subscribe(res => {
      data.yardSlots = res.data.map((slot: any) => ({
        id: `${slot.rowCode}-${slot.slotNumber}`,
        row: slot.rowCode,
        position: slot.slotNumber,
        vin: slot.vin ?? null,
        model: '—',
        qualityStatus: slot.status,
        releaseStatus: slot.status,
        salesStatus: '—',
        allocationStatus: slot.vin ? 'ALLOCATED' : 'AVAILABLE'
      }));
    });
  }
  rows() { return [...new Set(this.data.yardSlots.map(s => s.row))]; }
  slotsByRow(r: string) { return this.data.yardSlots.filter(s => s.row === r); }
  slotBg(s: YardSlot) { return s.vin ? this.slotColor(s).bg : '#f8fafc'; }
  slotBorder(s: YardSlot) { return s.vin ? this.slotColor(s).border : '#e2e8f0'; }
  slotTextColor(s: YardSlot) { return s.vin ? '#ffffff' : '#94a3b8'; }
  slotColor(s: YardSlot) {
    if (s.qualityStatus === 'RELEASED') return { bg: '#059669', border: '#059669' };
    if (s.qualityStatus === 'HOLD') return { bg: '#d97706', border: '#d97706' };
    if (s.qualityStatus === 'QUARANTINE') return { bg: '#dc2626', border: '#dc2626' };
    return { bg: '#f8fafc', border: '#e2e8f0' };
  }
  badge(status: string) {
    if (status === 'RELEASED') return { bg: 'rgba(5,150,105,.12)', fg: '#059669' };
    if (status === 'HOLD') return { bg: 'rgba(217,119,6,.12)', fg: '#d97706' };
    if (status === 'QUARANTINE') return { bg: 'rgba(220,38,38,.12)', fg: '#dc2626' };
    return { bg: '#f1f5f9', fg: '#94a3b8' };
  }
}
