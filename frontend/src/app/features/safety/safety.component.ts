import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from '../../core/services/app-data.service';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge.component';

type Tab = 'incidents' | 'ppe' | 'training';

@Component({
  selector: 'vx-safety',
  standalone: true,
  imports: [CommonModule, StatusBadgeComponent],
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.scss']
})
export class SafetyComponent {
  tab = signal<Tab>('incidents');
  constructor(public data: AppDataService) {}
}
