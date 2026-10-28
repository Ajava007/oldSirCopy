import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, exhaustMap, filter, finalize, forkJoin, Observable, of, tap, timer } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { AppDataService } from '../../core/services/app-data.service';
import { BackendApiService } from '../../core/services/backend-api.service';

@Component({
  selector: 'vx-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  readonly loading = signal(false);
  readonly partial = signal(false);
  readonly lastUpdated = signal<Date | null>(null);
  readonly ready = {
    production: signal(false), quality: signal(false), inventory: signal(false),
    maintenance: signal(false), workforce: signal(false), sales: signal(false)
  };
  readonly buildStages = [
    { name: 'Press shop', icon: 'bi-layers' },
    { name: 'Body in white', icon: 'bi-body-text' },
    { name: 'Paint shop', icon: 'bi-palette2' },
    { name: 'Powertrain', icon: 'bi-gear-wide-connected' },
    { name: 'Final assembly', icon: 'bi-tools' },
    { name: 'Validation', icon: 'bi-shield-check' }
  ];

  constructor(public auth: AuthService, public data: AppDataService, private readonly api: BackendApiService) {
    timer(0, 30_000).pipe(
      filter(() => typeof document === 'undefined' || document.visibilityState === 'visible'),
      exhaustMap(() => this.load()),
      takeUntilDestroyed()
    ).subscribe();
  }

  refresh(): void { this.load().subscribe(); }

  get unitsProduced(): number { return this.data.workOrders.reduce((sum, order) => sum + order.completed, 0); }
  get activeWorkOrders(): number { return this.data.workOrders.filter(order => !['COMPLETED', 'CANCELLED'].includes(order.status)).length; }
  get openNcrs(): number { return this.data.ncrs.filter(issue => !['CLOSED', 'RESOLVED', 'VERIFIED'].includes(issue.status)).length; }
  get ordersAwaitingPayment(): number { return this.data.salesOrders.filter(order => !['PAID', 'REFUNDED'].includes(order.status)).length; }
  get inspectionPassRate(): number | null {
    if (!this.data.inspections.length) return null;
    return Math.round(this.data.inspections.filter(row => row.result === 'PASS').length / this.data.inspections.length * 100);
  }

  private load(): Observable<unknown> {
    if (this.loading()) return of(null);
    this.loading.set(true);
    let hadError = false;
    const keepLastGood = <T>(request: Observable<T>): Observable<T | null> => request.pipe(catchError(() => { hadError = true; return of(null); }));

    return forkJoin({
      workOrders: keepLastGood(this.api.production.workOrders(0, 100)),
      inspections: keepLastGood(this.api.quality.inspections(0, 100)),
      ncrs: keepLastGood(this.api.quality.ncrs(0, 100)),
      inventory: keepLastGood(this.api.inventory.items(0, 100)),
      assets: keepLastGood(this.api.maintenance.assets()),
      employees: keepLastGood(this.api.workforce.employees(0, 100)),
      salesOrders: keepLastGood(this.api.sales.orders(0, 100))
    }).pipe(
      tap(result => {
        if (result.workOrders) {
          this.data.workOrders = result.workOrders.data.content.map((w: any) => ({ id: w.woNumber, plan: w.planNumber ?? '', model: w.modelCode, qty: w.targetQuantity, completed: w.producedQuantity ?? 0, rejected: w.rejectedQuantity ?? 0, line: w.lineCode ?? '', status: w.status }));
          this.ready.production.set(true);
        }
        if (result.inspections) {
          this.data.inspections = result.inspections.data.content.map((i: any) => ({ id: i.inspectionNumber, part: i.partCode ?? i.vin ?? '', operation: i.type, result: i.result, inspector: i.inspectorName ?? '', date: i.inspectedAt ?? i.createdAt }));
          this.ready.quality.set(true);
        }
        if (result.ncrs) {
          this.data.ncrs = result.ncrs.data.content.map((n: any) => ({ id: n.ncrNumber, title: n.containment ?? n.ncrNumber, vin: n.vin ?? '', status: n.status, owner: '', due: n.closedAt ?? '' }));
          this.ready.quality.set(true);
        }
        if (result.inventory) {
          this.data.stock = result.inventory.data.content.map((i: any) => ({ id: i.id, partCode: i.partCode, name: i.partCode, warehouse: i.warehouse, onHand: i.onHand, reserved: i.reserved, uom: '', value: 0 }));
          this.ready.inventory.set(true);
        }
        if (result.assets) {
          this.data.machines = result.assets.data.map((a: any) => ({ id: a.assetCode, name: a.name, workCenter: a.lineCode ?? '', type: a.level ?? '', status: a.status, nextMaintenance: '—' }));
          this.ready.maintenance.set(true);
        }
        if (result.employees) {
          this.data.employees = result.employees.data.content.map((e: any) => ({ id: e.id, name: e.fullName, role: e.department ?? '', factory: e.factoryCode ?? '', shift: '—', skill: '—', status: e.status }));
          this.ready.workforce.set(true);
        }
        if (result.salesOrders) {
          this.data.salesOrders = result.salesOrders.data.content.map((o: any) => ({ id: o.soNumber, customer: String(o.customerId), model: o.modelCode, qty: 1, amount: o.totalAmount ?? 0, status: o.paymentStatus }));
          this.ready.sales.set(true);
        }
        this.partial.set(hadError);
        if (Object.values(result).some(value => value !== null)) this.lastUpdated.set(new Date());
      }),
      finalize(() => this.loading.set(false))
    );
  }
}
