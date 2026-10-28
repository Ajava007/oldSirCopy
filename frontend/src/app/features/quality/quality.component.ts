import { Component, computed, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from '../../core/services/app-data.service';
import { BackendApiService } from '../../core/services/backend-api.service';

type Tab = 'inspections' | 'defects' | 'ncrs' | 'spc';

interface SpcPoint { subgroup: number; xbar: number; range: number; outOfControl: boolean; }

@Component({
  selector: 'vx-quality',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent implements OnInit {
  tab = signal<Tab>('inspections');

  // SPC parameters
  readonly target = 100;
  readonly usl = 106;
  readonly lsl = 94;
  readonly n = 5;            // subgroup size
  readonly A2 = 0.577;       // for n=5
  readonly D3 = 0;
  readonly D4 = 2.114;
  readonly d2 = 2.326;

  spcData: SpcPoint[] = [];

  constructor(public data: AppDataService, private api: BackendApiService) {}

  xbarBar = computed(() => this.spcData.length ? this.spcData.reduce((a, p) => a + p.xbar, 0) / this.spcData.length : 0);
  rbar = computed(() => this.spcData.length ? this.spcData.reduce((a, p) => a + p.range, 0) / this.spcData.length : 0);
  uclX = computed(() => this.xbarBar() + this.A2 * this.rbar());
  lclX = computed(() => this.xbarBar() - this.A2 * this.rbar());
  uclR = computed(() => this.D4 * this.rbar());
  lclR = computed(() => this.D3 * this.rbar());
  sigmaHat = computed(() => this.rbar() / this.d2);
  cp = computed(() => (this.usl - this.lsl) / (6 * this.sigmaHat()));
  cpk = computed(() => {
    const upper = (this.usl - this.xbarBar()) / (3 * this.sigmaHat());
    const lower = (this.xbarBar() - this.lsl) / (3 * this.sigmaHat());
    return Math.min(upper, lower);
  });
  oocCount = computed(() => this.spcData.filter(p => p.xbar > this.uclX() || p.xbar < this.lclX()).length);

  xPos(s: number) { return 40 + (s - 1) * (580 / 24); }
  yX(v: number) {
    const min = this.lclX() - 1, max = this.uclX() + 1;
    return 190 - ((v - min) / (max - min)) * 170;
  }
  yR(v: number) {
    const max = this.uclR() * 1.15;
    return 130 - (v / max) * 115;
  }
  xbarPolyline = computed(() => this.spcData.map(p => `${this.xPos(p.subgroup)},${this.yX(p.xbar)}`).join(' '));
  rPolyline = computed(() => this.spcData.map(p => `${this.xPos(p.subgroup)},${this.yR(p.range)}`).join(' '));

  ngOnInit() {
    this.api.quality.inspections(0, 100).subscribe(res => {
      this.data.inspections = res.data.content.map((i: any) => ({ id: i.inspectionNumber, part: i.partCode ?? i.vin ?? '—', operation: i.type, result: i.result, inspector: i.inspectorName ?? '—', date: i.inspectedAt ?? i.createdAt }));
    });
    this.api.quality.defects(0, 100).subscribe(res => {
      this.data.defects = res.data.content.map((d: any) => ({ id: d.defectNumber, vin: d.vin ?? '', category: d.partCode ?? '', severity: d.severity, description: d.description, status: d.status }));
    });
    this.api.quality.ncrs(0, 100).subscribe(res => {
      this.data.ncrs = res.data.content.map((n: any) => ({ id: n.ncrNumber, title: n.containment ?? n.ncrNumber, vin: n.vin ?? '—', status: n.status, owner: '—', due: n.closedAt ?? '—' }));
    });
  }
}
