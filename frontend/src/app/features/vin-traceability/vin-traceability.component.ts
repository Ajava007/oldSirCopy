import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendApiService } from '../../core/services/backend-api.service';

@Component({
  selector: 'vx-vin-traceability',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vin-traceability.component.html',
  styleUrls: ['./vin-traceability.component.scss']
})
export class VinTraceabilityComponent {
  vehicles = signal<any[]>([]);
  selectedVin = signal('');
  inspections = signal<any[]>([]);
  gate = signal<any | null>(null);
  loading = signal(true);
  reportLoading = signal(false);
  error = signal('');

  constructor(private api: BackendApiService) {
    this.api.sales.orders(0, 100).subscribe({
      next: response => {
        this.vehicles.set(response.data.content.filter((order: any) => order.vin).map((order: any) => ({ vin: order.vin, model: order.modelCode ?? 'Vehicle', order: order.soNumber ?? order.id })));
        this.loading.set(false);
        if (this.vehicles().length) this.select(this.vehicles()[0].vin);
      },
      error: () => { this.error.set('Could not load sales orders. Check the backend connection.'); this.loading.set(false); }
    });
  }

  select(vin: string) { this.selectedVin.set(vin); this.loadHistory(); }

  loadHistory() {
    const vin = this.selectedVin();
    if (!vin) return;
    this.gate.set(null);
    this.inspections.set([]);
    this.api.quality.gateCheck(vin).subscribe({ next: response => this.gate.set(response.data), error: () => this.error.set('Could not load the factory release check.') });
    this.api.quality.inspectionsByVin(vin).subscribe({ next: response => this.inspections.set(response.data), error: () => this.error.set('Could not load quality checks.') });
  }

  downloadReport() {
    const vin = this.selectedVin();
    if (!vin) return;
    this.reportLoading.set(true);
    this.api.reports.vinGenealogy(vin).subscribe({
      next: blob => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a'); link.href = url; link.download = `${vin}-vehicle-report.pdf`; link.click(); URL.revokeObjectURL(url);
        this.reportLoading.set(false);
      },
      error: () => { this.error.set('Could not create the vehicle report.'); this.reportLoading.set(false); }
    });
  }
}
