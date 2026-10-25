import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../core/services/mock-data.service';

@Component({
  selector: 'vx-scheduling',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h5 class="fw-bold mb-1" style="color:#0f172a;">Production Scheduling Board</h5>
    <p class="mb-3" style="color:#64748b;font-size:.9rem;">Line × time sequenced slots — takt 8 min. Compatible models grouped to reduce changeovers (spec §12).</p>

    <div class="vx-card p-4 mb-3">
      <div class="d-flex gap-3 flex-wrap align-items-center mb-3">
        <span class="small" style="color:#64748b;">Takt time: <strong class="mono" style="color:#0f172a;">8 min</strong></span>
        <span class="small" style="color:#64748b;">Changeovers: <strong class="mono" style="color:#0f172a;">{{ changeovers() }}</strong></span>
        <span class="small" style="color:#64748b;">Shift: <strong class="mono" style="color:#0f172a;">08:00 – 16:00</strong></span>
      </div>
      <div class="d-flex gap-3 mb-3 small flex-wrap">
        @for (m of modelLegend(); track m.model) {
          <span class="d-flex align-items-center gap-1"><span class="rounded" style="width:14px;height:14px;background:{{ m.color }};"></span>{{ m.model }}</span>
        }
      </div>

      @for (line of lines(); track line) {
        <div class="mb-3">
          <div class="fw-semibold small mb-1" style="color:#334155;">{{ line }}</div>
          <div class="d-flex gap-2 flex-wrap">
            @for (s of slotsByLine(line); track s.time) {
              <div class="rounded p-2 text-white" style="min-width:96px;background:{{ s.color }};box-shadow:0 2px 6px rgba(15,23,42,.15);">
                <div class="mono" style="font-size:.65rem;opacity:.85;">{{ s.time }}</div>
                <div class="fw-bold" style="font-size:.78rem;">{{ s.model }}</div>
                <div class="mono" style="font-size:.6rem;opacity:.8;">{{ s.variant }}</div>
              </div>
            }
          </div>
        </div>
      }
      <p class="small mb-0" style="color:#94a3b8;">Note: heuristic sequencing only — no mathematical optimization claimed (spec §12). Drag-and-drop rescheduling lands in a later phase.</p>
    </div>
  `,
  styles: ['.mono{font-family:ui-monospace,monospace;}']
})
export class SchedulingComponent {
  constructor(public mock: MockDataService) {}
  lines() { return [...new Set(this.mock.scheduleSlots.map(s => s.line))]; }
  slotsByLine(line: string) { return this.mock.scheduleSlots.filter(s => s.line === line); }
  modelLegend() {
    const seen = new Map<string, string>();
    this.mock.scheduleSlots.forEach(s => seen.set(s.model, s.color));
    return [...seen.entries()].map(([model, color]) => ({ model, color }));
  }
  changeovers = computed(() => {
    let count = 0;
    this.lines().forEach(line => {
      const slots = this.slotsByLine(line);
      for (let i = 1; i < slots.length; i++) { if (slots[i].model !== slots[i-1].model) count++; }
    });
    return count;
  });
}
