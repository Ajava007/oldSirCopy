import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendApiService } from '../../core/services/backend-api.service';

@Component({
  selector: 'vx-vin-traceability',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h5 class="fw-bold mb-1">Vehicle History</h5>
    <p class="text-muted small mb-3">Choose a vehicle from a sales order to see its quality checks and release status.</p>
    @if (loading()) { <p class="small text-muted">Loading vehicles…</p> }
    @if (error()) { <div class="alert alert-warning">{{ error() }}</div> }
    @if (!loading() && vehicles().length === 0) {
      <div class="vx-card p-3"><h6>No vehicles with a VIN</h6><p class="small text-muted mb-0">Sales orders do not have vehicle identification numbers yet.</p></div>
    }
    @if (vehicles().length) {
      <div class="vx-card p-3 mb-3">
        <label for="vehicle" class="form-label small fw-semibold">Vehicle identification number (VIN)</label>
        <select id="vehicle" class="form-select" [value]="selectedVin()" (change)="select(($any($event.target)).value)">
          @for (vehicle of vehicles(); track vehicle.vin) { <option [value]="vehicle.vin">{{ vehicle.vin }} · {{ vehicle.model }} · Order {{ vehicle.order }}</option> }
        </select>
      </div>
    }
    @if (selectedVin()) {
      <div class="d-flex gap-2 mb-3">
        <button class="btn btn-primary btn-sm" (click)="loadHistory()">Refresh history</button>
        <button class="btn btn-outline-secondary btn-sm" (click)="downloadReport()" [disabled]="reportLoading()">Download vehicle report</button>
      </div>
      @if (gate(); as check) {
        <div class="vx-card p-3 mb-3">
          <h6 class="fw-bold">Can this vehicle leave the factory?</h6>
          <span class="badge" [class.text-bg-success]="check.passed" [class.text-bg-danger]="!check.passed">{{ check.passed ? 'Ready' : 'Needs attention' }}</span>
          @if (check.reasons?.length) { <ul class="small mt-2 mb-0">@for (reason of check.reasons; track reason) { <li>{{ reason }}</li> }</ul> }
        </div>
      }
      <div class="vx-card p-0 overflow-auto">
        <h6 class="fw-bold p-3 mb-0">Quality checks</h6>
        @if (!inspections().length) { <p class="small text-muted px-3 pb-3">No quality checks have been recorded for this vehicle.</p> }
        @if (inspections().length) {
          <table class="table table-hover mb-0"><thead><tr><th>Check</th><th>Type</th><th>Result</th><th>Inspector</th><th>Date</th></tr></thead>
            <tbody>@for (item of inspections(); track item.inspectionNumber ?? item.id) { <tr><td>{{ item.inspectionNumber ?? item.id }}</td><td>{{ item.type }}</td><td>{{ item.result }}</td><td>{{ item.inspectorName ?? '—' }}</td><td>{{ item.inspectedAt ?? item.createdAt ?? '—' }}</td></tr> }</tbody>
          </table>
        }
      </div>
    }
  `
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
