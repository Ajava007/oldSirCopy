import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { AppDataService } from '../../core/services/app-data.service';
import { BackendApiService } from '../../core/services/backend-api.service';

@Component({
  selector: 'vx-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h4 class="fw-bold mb-1">Factory dashboard</h4>
    <p class="text-muted mb-4">Live work records for {{ auth.currentUser()?.fullName }}.</p>

    <div class="row g-3 mb-4">
      <div class="col-6 col-md-3"><div class="vx-card p-3"><div class="small text-muted">Vehicles finished</div><div class="display-6 fw-bold">{{ stats.vehiclesBuilt }}</div></div></div>
      <div class="col-6 col-md-3"><div class="vx-card p-3"><div class="small text-muted">Open work orders</div><div class="display-6 fw-bold">{{ stats.openWorkOrders }}</div></div></div>
      <div class="col-6 col-md-3"><div class="vx-card p-3"><div class="small text-muted">Open quality issues</div><div class="display-6 fw-bold">{{ stats.openNcrs }}</div></div></div>
      <div class="col-6 col-md-3"><div class="vx-card p-3"><div class="small text-muted">Orders waiting for payment</div><div class="display-6 fw-bold">{{ stats.pendingPayments.toLocaleString() }}</div></div></div>
    </div>

    <div class="row g-3">
      <div class="col-12 col-lg-7">
        <div class="vx-card p-3">
          <h6 class="fw-bold mb-3">Recent work orders</h6>
          @if (data.workOrders.length === 0) { <p class="small text-muted mb-0">No work orders are in the database yet.</p> }
          @for (order of data.workOrders.slice(0, 10); track order.id) {
            <div class="d-flex justify-content-between border-bottom py-2 small">
              <span><strong>{{ order.id }}</strong> · {{ order.model }} · {{ order.line }}</span>
              <span>{{ order.status }} · {{ order.completed }}/{{ order.qty }}</span>
            </div>
          }
        </div>
      </div>
      <div class="col-12 col-lg-5">
        <div class="vx-card p-3">
          <h6 class="fw-bold mb-3">Open issues</h6>
          @if (openIssues.length === 0) { <p class="small text-muted mb-0">No open issues.</p> }
          @for (issue of openIssues; track issue.id) {
            <div class="border-bottom py-2 small"><strong>{{ issue.id }}</strong> · Vehicle {{ issue.vin }} · {{ issue.status }}</div>
          }
        </div>
        <div class="vx-card p-3 mt-3">
          <h6 class="fw-bold mb-3">Go to</h6>
          <div class="d-flex flex-wrap gap-2">
            <a class="btn btn-sm btn-outline-primary" routerLink="/production">Work orders</a>
            <a class="btn btn-sm btn-outline-primary" routerLink="/inventory">Stock</a>
            <a class="btn btn-sm btn-outline-primary" routerLink="/quality">Quality checks</a>
            <a class="btn btn-sm btn-outline-primary" routerLink="/sales-payments">Sales orders</a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent {
  get stats() { return this.data.stats(); }
  get openIssues() { return this.data.ncrs.filter(issue => !['CLOSED', 'RESOLVED', 'VERIFIED'].includes(issue.status)); }

  constructor(public auth: AuthService, public data: AppDataService, api: BackendApiService) {
    api.production.workOrders(0, 100).subscribe(res => {
      data.workOrders = res.data.content.map((w: any) => ({ id: w.woNumber, plan: w.planNumber ?? '', model: w.modelCode, qty: w.targetQuantity, completed: w.producedQuantity ?? 0, rejected: w.rejectedQuantity ?? 0, line: w.lineCode ?? '', status: w.status }));
    });
    api.quality.inspections(0, 100).subscribe(res => {
      data.inspections = res.data.content.map((i: any) => ({ id: i.inspectionNumber, part: i.partCode ?? i.vin ?? '', operation: i.type, result: i.result, inspector: i.inspectorName ?? '', date: i.inspectedAt ?? i.createdAt }));
    });
    api.quality.ncrs(0, 100).subscribe(res => {
      data.ncrs = res.data.content.map((n: any) => ({ id: n.ncrNumber, title: n.containment ?? n.ncrNumber, vin: n.vin ?? '', status: n.status, owner: '', due: n.closedAt ?? '' }));
    });
    api.sales.orders(0, 100).subscribe(res => {
      data.salesOrders = res.data.content.map((o: any) => ({ id: o.soNumber, customer: String(o.customerId), model: o.modelCode, qty: 1, amount: o.totalAmount ?? 0, status: o.paymentStatus }));
    });
  }
}
