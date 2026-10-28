import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from '../../core/services/app-data.service';
import { BackendApiService } from '../../core/services/backend-api.service';

type Tab = 'parts' | 'bom' | 'routing';

@Component({
  selector: 'vx-engineering',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './engineering.component.html',
  styleUrls: ['./engineering.component.scss']
})
export class EngineeringComponent {
  tab = signal<Tab>('parts');
  tabs: { id: Tab; label: string }[] = [
    { id: 'parts', label: 'Part Master' },
    { id: 'bom', label: 'BOM (multi-level)' },
    { id: 'routing', label: 'Manufacturing Routing' }
  ];
  constructor(public data: AppDataService, private api: BackendApiService) {
    this.api.parts.list(0, 100).subscribe(res => {
      this.data.parts = res.data.content.map((p: any) => ({ id: p.id, code: p.partCode, name: p.name, category: p.category ?? '', uom: p.uom, cost: p.standardCost ?? 0, status: p.status }));
    });
    this.api.vehicleModels.list(0, 100).subscribe(res => {
      const modelCode = (res.data.content[0] as any)?.modelCode;
      if (!modelCode) return;
      this.api.bom.byParent(modelCode).subscribe(result => {
        this.data.bom = result.data.map((row: any) => ({ level: row.level ?? 1, code: row.componentPartCode, name: row.componentPartCode, qty: row.quantity, uom: '', type: row.optional ? 'Optional' : 'Component' }));
      });
      this.api.routing.byModel(modelCode).subscribe(result => {
        this.data.routing = result.data.map((op: any) => ({ seq: op.operationNumber, name: op.operationName, workCenter: op.workCenter, machine: op.workCenter, setupMin: Math.round((op.setupTimeSec ?? 0) / 60), cycleMin: Number(((op.cycleTimeSec ?? 0) / 60).toFixed(2)) }));
      });
    });
  }
}
