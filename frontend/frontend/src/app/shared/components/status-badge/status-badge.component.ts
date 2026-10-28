import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgePalette = 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'primary';

const PALETTES: Record<BadgePalette, { bg: string; fg: string }> = {
  success: { bg: 'rgba(5,150,105,.12)', fg: '#059669' },
  warning: { bg: 'rgba(217,119,6,.12)', fg: '#d97706' },
  danger:  { bg: 'rgba(220,38,38,.12)', fg: '#dc2626' },
  info:    { bg: 'rgba(13,148,136,.12)', fg: '#0d9488' },
  neutral: { bg: '#f1f5f9', fg: '#64748b' },
  primary: { bg: 'rgba(37,99,235,.10)', fg: '#2563eb' }
};

// Auto-map common status strings to a palette (case-insensitive, substring match)
const STATUS_MAP: { match: RegExp; palette: BadgePalette }[] = [
  { match: /released|completed|pass|paid|verified|active|running|approved|closed|success|allocated|dispatched|delivered|sold/i, palette: 'success' },
  { match: /hold|pending|paused|in_progress|in progress|conditional|submitted|review|open|planned|awaiting/i, palette: 'warning' },
  { match: /fail|quarantine|rejected|downtime|critical|major|error|blocked|cancelled|canceled|not_released/i, palette: 'danger' },
  { match: /medium|minor|info/i, palette: 'info' },
  { match: /high|urgent|priority/i, palette: 'primary' }
];

export function paletteForStatus(status: string | null | undefined): BadgePalette {
  if (!status) return 'neutral';
  for (const m of STATUS_MAP) { if (m.match.test(status)) return m.palette; }
  return 'neutral';
}

@Component({
  selector: 'vx-status-badge',
  standalone: true,
  imports: [CommonModule],
  template: `<span class="badge" [style.background]="styles().bg" [style.color]="styles().fg">{{ label }}</span>`,
  styles: ['.badge{display:inline-block;padding:.25rem .6rem;border-radius:9999px;font-size:.7rem;font-weight:600;letter-spacing:.02em;white-space:nowrap;}']
})
export class StatusBadgeComponent {
  @Input({ required: true }) label!: string;
  @Input() palette?: BadgePalette;
  @Input() status?: string; // auto-mapped if palette not set

  resolvedPalette = computed<BadgePalette>(() => {
    if (this.palette) return this.palette;
    return paletteForStatus(this.status ?? this.label);
  });
  styles = computed(() => PALETTES[this.resolvedPalette()]);
}
