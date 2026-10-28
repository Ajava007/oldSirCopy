import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { concatMap, forkJoin } from 'rxjs';
import { BackendApiService } from '../../core/services/backend-api.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'vx-workflow',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="d-flex justify-content-between align-items-start gap-3 flex-wrap mb-4">
      <div><h4 class="fw-bold mb-1">Buy, build and sell</h4><p class="text-muted mb-0">One simple flow: order parts, receive stock, create a car assembly order, add the customer and record payments.</p></div>
      <span class="badge text-bg-primary px-3 py-2">{{ busy() ? 'Saving…' : 'Connected to backend' }}</span>
    </div>

    <div class="row g-2 mb-4">
      @for (step of steps; track step.number) {
        <div class="col-6 col-lg-3"><div class="vx-card p-3 h-100"><span class="small text-muted">STEP {{ step.number }}</span><div class="fw-semibold mt-1">{{ step.title }}</div></div></div>
      }
    </div>

    <section class="vx-card p-3 p-md-4 mb-4">
      <div class="d-flex justify-content-between align-items-start gap-2 mb-3"><div><h5 class="fw-bold mb-1">1. Order parts</h5><p class="small text-muted mb-0">Choose a supplier and part. The order is sent through the backend approval states.</p></div><span class="badge text-bg-secondary">Procurement</span></div>
      <form [formGroup]="purchaseForm" (ngSubmit)="createPurchaseOrder()" class="row g-2 align-items-end">
        <div class="col-md-3"><label class="form-label small">Supplier</label><select class="form-select" formControlName="supplierCode"><option value="">Select supplier</option>@for (s of suppliers(); track s.code) { <option [value]="s.code">{{ s.company }} ({{ s.code }})</option> }</select></div>
        <div class="col-md-3"><label class="form-label small">Part</label><select class="form-select" formControlName="partCode"><option value="">Select part</option>@for (p of parts(); track p.partCode) { <option [value]="p.partCode">{{ p.partCode }} — {{ p.name }}</option> }</select></div>
        <div class="col-6 col-md-2"><label class="form-label small">Quantity</label><input class="form-control" type="number" min="1" formControlName="quantity"></div>
        <div class="col-6 col-md-2"><label class="form-label small">Unit price</label><input class="form-control" type="number" min="0.01" step="0.01" formControlName="unitPrice"></div>
        <div class="col-md-2"><button class="btn btn-primary w-100" [disabled]="busy() || purchaseForm.invalid">Order parts</button></div>
      </form>
      <div class="table-responsive mt-3"><table class="table table-sm align-middle mb-0"><thead><tr><th>PO</th><th>Supplier</th><th>Part</th><th>Qty</th><th>Status</th><th>Receive to stock</th></tr></thead><tbody>
        @for (po of purchaseOrders(); track po.id) { <tr><td>{{ po.poNumber }}</td><td>{{ supplierName(po.supplierCode) }}</td><td>{{ po.items?.[0]?.partCode ?? '—' }}</td><td>{{ po.items?.[0]?.quantity ?? '—' }}</td><td><span class="badge text-bg-light">{{ po.status }}</span></td><td>@if (po.status === 'ISSUED') { <button class="btn btn-sm btn-success" [disabled]="busy()" (click)="receivePurchaseOrder(po)">Receive</button> } @else if (po.status === 'RECEIVED') { <span class="text-success small">Added to stock</span> } @else { <span class="text-muted small">Waiting</span> }</td></tr> }
        @if (!purchaseOrders().length) { <tr><td colspan="6" class="text-center text-muted py-3">No part orders yet.</td></tr> }
      </tbody></table></div>
    </section>

    <section class="vx-card p-3 p-md-4 mb-4">
      <div class="d-flex justify-content-between align-items-start gap-2 mb-3"><div><h5 class="fw-bold mb-1">2. Check stock</h5><p class="small text-muted mb-0">Received parts appear here. Assembly orders are checked against the model bill of materials.</p></div><span class="badge text-bg-secondary">Inventory</span></div>
      <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Part</th><th>Warehouse</th><th>On hand</th><th>Reserved</th><th>Available</th></tr></thead><tbody>
        @for (item of inventory(); track item.id) { <tr><td>{{ item.partCode }}</td><td>{{ item.warehouse }}</td><td>{{ item.onHand }}</td><td>{{ item.reserved }}</td><td class="fw-semibold">{{ item.available }}</td></tr> }
        @if (!inventory().length) { <tr><td colspan="5" class="text-center text-muted py-3">Receive a parts order to add stock.</td></tr> }
      </tbody></table></div>
    </section>

    <section class="vx-card p-3 p-md-4 mb-4">
      <div class="d-flex justify-content-between align-items-start gap-2 mb-3"><div><h5 class="fw-bold mb-1">3. Create car assembly order</h5><p class="small text-muted mb-0">The backend checks every required BOM part against available stock before creating the work order.</p></div><span class="badge text-bg-secondary">Assembly</span></div>
      <form [formGroup]="assemblyForm" (ngSubmit)="checkMaterials()" class="row g-2 align-items-end">
        <div class="col-md-5"><label class="form-label small">Car model</label><select class="form-select" formControlName="modelCode" (change)="materialCheck.set(null)"><option value="">Select model</option>@for (m of models(); track m.modelCode) { <option [value]="m.modelCode">{{ m.modelName }} ({{ m.modelCode }})</option> }</select></div>
        <div class="col-6 col-md-2"><label class="form-label small">Cars to build</label><input class="form-control" type="number" min="1" formControlName="quantity" (input)="materialCheck.set(null)"></div>
        <div class="col-6 col-md-3"><label class="form-label small">Assembly line (optional)</label><input class="form-control" formControlName="lineCode" placeholder="Line A"></div>
        <div class="col-md-2"><button class="btn btn-outline-primary w-100" type="submit" [disabled]="busy() || assemblyForm.invalid">Check parts</button></div>
      </form>
      @if (materialCheck(); as check) {
        <div class="table-responsive mt-3"><table class="table table-sm align-middle"><thead><tr><th>Required part</th><th>Needed</th><th>Available</th><th>Check</th></tr></thead><tbody>
          @for (line of check.materials; track line.partCode) { <tr><td>{{ line.partCode }}</td><td>{{ line.requiredQuantity }}</td><td>{{ line.availableQuantity }}</td><td><span [class.text-success]="line.sufficient" [class.text-danger]="!line.sufficient">{{ line.sufficient ? 'In stock' : 'Order more' }}</span></td></tr> }
          @if (!check.materials.length) { <tr><td colspan="4" class="text-danger">No bill of materials exists for this model. Add its parts in Engineering first.</td></tr> }
        </tbody></table></div>
        <button class="btn btn-primary" [disabled]="busy() || !check.sufficient" (click)="createAssemblyOrder()">Create assembly order</button>
      }
      <div class="table-responsive mt-3"><table class="table table-sm align-middle mb-0"><thead><tr><th>Work order</th><th>Model</th><th>Cars</th><th>Status</th></tr></thead><tbody>
        @for (wo of workOrders(); track wo.id) { <tr><td>{{ wo.woNumber }}</td><td>{{ wo.modelCode }}</td><td>{{ wo.targetQuantity }}</td><td>{{ wo.status }}</td></tr> }
        @if (!workOrders().length) { <tr><td colspan="4" class="text-center text-muted py-3">No assembly orders yet.</td></tr> }
      </tbody></table></div>
    </section>

    <section class="vx-card p-3 p-md-4">
      <div class="d-flex justify-content-between align-items-start gap-2 mb-3"><div><h5 class="fw-bold mb-1">4. Customers and payment history</h5><p class="small text-muted mb-0">Add a customer, create a car sales order, then record one or more payments against it.</p></div><span class="badge text-bg-secondary">Sales</span></div>
      <form [formGroup]="customerForm" (ngSubmit)="createCustomer()" class="row g-2 align-items-end mb-3">
        <div class="col-md-3"><label class="form-label small">Customer name</label><input class="form-control" formControlName="name"></div>
        <div class="col-md-3"><label class="form-label small">Email</label><input class="form-control" type="email" formControlName="email"></div>
        <div class="col-md-2"><label class="form-label small">Phone</label><input class="form-control" formControlName="phone"></div>
        <div class="col-md-2"><label class="form-label small">Address</label><input class="form-control" formControlName="address"></div>
        <div class="col-md-2"><button class="btn btn-outline-primary w-100" [disabled]="busy() || customerForm.invalid">Add customer</button></div>
      </form>
      <form [formGroup]="salesForm" (ngSubmit)="createSalesOrder()" class="row g-2 align-items-end border-top pt-3 mb-3">
        <div class="col-md-3"><label class="form-label small">Customer</label><select class="form-select" formControlName="customerId"><option [ngValue]="null">Select customer</option>@for (c of customers(); track c.id) { <option [ngValue]="c.id">{{ c.name }}</option> }</select></div>
        <div class="col-md-3"><label class="form-label small">Car model</label><select class="form-select" formControlName="modelCode"><option value="">Select model</option>@for (m of models(); track m.modelCode) { <option [value]="m.modelCode">{{ m.modelName }} — {{ m.modelCode }}</option> }</select></div>
        <div class="col-md-2"><label class="form-label small">Order amount</label><input class="form-control" type="number" min="0.01" step="0.01" formControlName="totalAmount"></div>
        <div class="col-md-2"><label class="form-label small">Order date</label><input class="form-control" type="date" formControlName="orderDate"></div>
        <div class="col-md-2"><button class="btn btn-primary w-100" [disabled]="busy() || salesForm.invalid">Create customer order</button></div>
      </form>
      <div class="row g-3">
        <div class="col-lg-5"><label class="form-label small">Payment history for customer</label><select class="form-select" [value]="paymentCustomerId() ?? ''" (change)="selectPaymentCustomer($any($event.target).value)"><option value="">Select customer</option>@for (c of customers(); track c.id) { <option [value]="c.id">{{ c.name }}</option> }</select>
          @if (paymentCustomerId()) { <label class="form-label small mt-2">Customer order</label><select class="form-select" [value]="paymentOrderId() ?? ''" (change)="selectPaymentOrder($any($event.target).value)"><option value="">Select order</option>@for (o of ordersForPaymentCustomer(); track o.id) { <option [value]="o.id">{{ o.soNumber }} · {{ o.modelCode }} · {{ o.paymentStatus }}</option> }</select> }
          @if (paymentOrderId()) { <form [formGroup]="paymentForm" (ngSubmit)="recordPayment()" class="row g-2 mt-1"><div class="col-4"><label class="form-label small">Amount</label><input class="form-control" type="number" min="0.01" step="0.01" formControlName="amount"></div><div class="col-4"><label class="form-label small">Method</label><select class="form-select" formControlName="method"><option>Cash</option><option>Bank transfer</option><option>Card</option><option>Mobile banking</option></select></div><div class="col-4"><label class="form-label small">Reference</label><input class="form-control" formControlName="reference"></div><div class="col-12"><button class="btn btn-success" [disabled]="busy() || paymentForm.invalid">Record payment</button></div></form> }
        </div>
        <div class="col-lg-7"><div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Date</th><th>Order</th><th>Amount</th><th>Method</th><th>Reference</th></tr></thead><tbody>
          @for (payment of paymentHistory(); track payment.id) { <tr><td>{{ payment.paidAt | date:'mediumDate' }}</td><td>{{ payment.soNumber }}</td><td>{{ payment.amount | number:'1.2-2' }}</td><td>{{ payment.method }}</td><td>{{ payment.reference || '—' }}</td></tr> }
          @if (paymentOrderId() && !paymentHistory().length) { <tr><td colspan="5" class="text-center text-muted py-3">No payments recorded for this order.</td></tr> }
          @if (paymentCustomerId() && !paymentOrderId() && !paymentHistory().length) { <tr><td colspan="5" class="text-center text-muted py-3">This customer has no recorded payments yet.</td></tr> }
          @if (!paymentCustomerId()) { <tr><td colspan="5" class="text-center text-muted py-3">Select a customer to view payment history.</td></tr> }
        </tbody></table></div></div>
      </div>
      <div class="table-responsive mt-4"><table class="table table-sm align-middle mb-0"><thead><tr><th>Sales order</th><th>Customer</th><th>Model</th><th>Amount</th><th>Payment status</th></tr></thead><tbody>
        @for (order of salesOrders(); track order.id) { <tr><td>{{ order.soNumber }}</td><td>{{ customerName(order.customerId) }}</td><td>{{ order.modelCode }}</td><td>{{ order.totalAmount | number:'1.2-2' }}</td><td>{{ order.paymentStatus }}</td></tr> }
        @if (!salesOrders().length) { <tr><td colspan="5" class="text-center text-muted py-3">No customer car orders yet.</td></tr> }
      </tbody></table></div>
    </section>
  `,
})
export class WorkflowComponent implements OnInit {
  readonly steps = [
    { number: 1, title: 'Order parts' },
    { number: 2, title: 'Receive stock' },
    { number: 3, title: 'Assemble cars' },
    { number: 4, title: 'Customer & payments' },
  ];
  busy = signal(false);
  suppliers = signal<any[]>([]);
  parts = signal<any[]>([]);
  models = signal<any[]>([]);
  purchaseOrders = signal<any[]>([]);
  inventory = signal<any[]>([]);
  workOrders = signal<any[]>([]);
  customers = signal<any[]>([]);
  salesOrders = signal<any[]>([]);
  materialCheck = signal<any | null>(null);
  paymentCustomerId = signal<number | null>(null);
  paymentOrderId = signal<number | null>(null);
  paymentHistory = signal<any[]>([]);

  purchaseForm = this.fb.group({ supplierCode: ['', Validators.required], partCode: ['', Validators.required], quantity: [1, [Validators.required, Validators.min(1)]], unitPrice: [1, [Validators.required, Validators.min(0.01)]] });
  assemblyForm = this.fb.group({ modelCode: ['', Validators.required], quantity: [1, [Validators.required, Validators.min(1)]], lineCode: [''] });
  customerForm = this.fb.group({ name: ['', Validators.required], email: ['', [Validators.required, Validators.email]], phone: [''], address: [''] });
  salesForm = this.fb.group({ customerId: [null as number | null, Validators.required], modelCode: ['', Validators.required], totalAmount: [null as number | null, [Validators.required, Validators.min(0.01)]], orderDate: [new Date().toISOString().slice(0, 10), Validators.required] });
  paymentForm = this.fb.group({ amount: [null as number | null, [Validators.required, Validators.min(0.01)]], method: ['Cash', Validators.required], reference: [''] });
  ordersForPaymentCustomer = computed(() => this.salesOrders().filter(order => order.customerId === this.paymentCustomerId()));

  constructor(private readonly fb: FormBuilder, private readonly api: BackendApiService, private readonly toast: ToastService) {}

  ngOnInit(): void { this.loadAll(); }

  private loadAll(): void {
    this.api.suppliers.list(0, 100).subscribe(result => this.suppliers.set(result.data.content as any[]));
    this.api.parts.list(0, 200).subscribe(result => this.parts.set(result.data.content as any[]));
    this.api.vehicleModels.list(0, 100).subscribe(result => this.models.set(result.data.content as any[]));
    this.refreshPurchaseOrders();
    this.refreshInventory();
    this.refreshWorkOrders();
    this.refreshCustomers();
    this.refreshSalesOrders();
  }

  createPurchaseOrder(): void {
    if (this.purchaseForm.invalid) return;
    this.busy.set(true);
    const value = this.purchaseForm.getRawValue();
    this.api.purchaseOrders.create({
      poNumber: `PO-${Date.now()}`, supplierCode: value.supplierCode,
      orderDate: new Date().toISOString().slice(0, 10), currency: 'USD',
      items: [{ partCode: value.partCode, description: this.partName(value.partCode!), quantity: Number(value.quantity), unitPrice: Number(value.unitPrice) }]
    }).pipe(
      concatMap((created: any) => this.api.purchaseOrders.transition(created.data.id, 'SUBMITTED')),
      concatMap((submitted: any) => this.api.purchaseOrders.transition(submitted.data.id, 'APPROVED')),
      concatMap((approved: any) => this.api.purchaseOrders.transition(approved.data.id, 'ISSUED')),
    ).subscribe({
      next: () => { this.busy.set(false); this.toast.success('Part order sent. Receive it when the supplier delivery arrives.'); this.purchaseForm.reset({ supplierCode: '', partCode: '', quantity: 1, unitPrice: 1 }); this.refreshPurchaseOrders(); },
      error: () => { this.busy.set(false); this.refreshPurchaseOrders(); }
    });
  }

  receivePurchaseOrder(po: any): void {
    this.busy.set(true);
    this.api.purchaseOrders.receive(po.id, 'MAIN-WH', `Received against ${po.poNumber}`).subscribe({
      next: () => { this.busy.set(false); this.toast.success(`${po.poNumber} received into stock.`); this.refreshPurchaseOrders(); this.refreshInventory(); },
      error: () => this.busy.set(false)
    });
  }

  checkMaterials(): void {
    if (this.assemblyForm.invalid) return;
    const value = this.assemblyForm.getRawValue();
    this.busy.set(true);
    this.api.production.materialCheck(value.modelCode!, Number(value.quantity)).subscribe({
      next: result => { this.busy.set(false); this.materialCheck.set(result.data); },
      error: () => { this.busy.set(false); this.materialCheck.set(null); }
    });
  }

  createAssemblyOrder(): void {
    const check = this.materialCheck();
    if (!check?.sufficient) return;
    const value = this.assemblyForm.getRawValue();
    this.busy.set(true);
    this.api.production.createWorkOrder({
      woNumber: `WO-${Date.now()}`, modelCode: value.modelCode,
      lineCode: value.lineCode || null, targetQuantity: Number(value.quantity), operations: []
    }).subscribe({
      next: () => { this.busy.set(false); this.toast.success('Assembly order created.'); this.materialCheck.set(null); this.refreshWorkOrders(); },
      error: () => this.busy.set(false)
    });
  }

  createCustomer(): void {
    if (this.customerForm.invalid) return;
    this.busy.set(true);
    this.api.sales.createCustomer(this.customerForm.getRawValue()).subscribe({
      next: result => { this.busy.set(false); this.toast.success('Customer added.'); this.customerForm.reset(); this.refreshCustomers(); },
      error: () => this.busy.set(false)
    });
  }

  createSalesOrder(): void {
    if (this.salesForm.invalid) return;
    this.busy.set(true);
    const value = this.salesForm.getRawValue();
    this.api.sales.createOrder({
      soNumber: `SO-${Date.now()}`, customerId: Number(value.customerId),
      modelCode: value.modelCode, orderDate: value.orderDate, totalAmount: Number(value.totalAmount)
    }).subscribe({
      next: () => { this.busy.set(false); this.toast.success('Customer car order created.'); this.refreshSalesOrders(); },
      error: () => this.busy.set(false)
    });
  }

  selectPaymentCustomer(rawId: string): void {
    const customerId = rawId ? Number(rawId) : null;
    this.paymentCustomerId.set(customerId);
    this.paymentOrderId.set(null);
    this.paymentHistory.set([]);
    if (customerId === null) return;
    const orders = this.salesOrders().filter(order => order.customerId === customerId);
    if (!orders.length) return;
    this.busy.set(true);
    forkJoin(orders.map(order => this.api.sales.paymentHistory(order.id))).subscribe({
      next: histories => { this.busy.set(false); this.paymentHistory.set(histories.flatMap(result => result.data)); },
      error: () => this.busy.set(false)
    });
  }

  selectPaymentOrder(rawId: string): void {
    const id = rawId ? Number(rawId) : null;
    this.paymentOrderId.set(id);
    this.paymentHistory.set([]);
    if (id !== null) this.loadPaymentHistory(id);
  }

  recordPayment(): void {
    const orderId = this.paymentOrderId();
    if (orderId === null || this.paymentForm.invalid) return;
    const value = this.paymentForm.getRawValue();
    this.busy.set(true);
    this.api.sales.recordPayment(orderId, { amount: Number(value.amount), method: value.method!, reference: value.reference || undefined }).subscribe({
      next: () => { this.busy.set(false); this.toast.success('Payment added to the customer history.'); this.paymentForm.reset({ amount: null, method: 'Cash', reference: '' }); this.loadPaymentHistory(orderId); this.refreshSalesOrders(); },
      error: () => this.busy.set(false)
    });
  }

  customerName(customerId: number): string { return this.customers().find(customer => customer.id === customerId)?.name ?? `Customer #${customerId}`; }
  supplierName(code: string): string { return this.suppliers().find(supplier => supplier.code === code)?.company ?? code; }
  private partName(partCode: string): string { return this.parts().find(part => part.partCode === partCode)?.name ?? partCode; }
  private loadPaymentHistory(orderId: number): void { this.api.sales.paymentHistory(orderId).subscribe(result => this.paymentHistory.set(result.data)); }
  private refreshPurchaseOrders(): void { this.api.purchaseOrders.list(0, 100).subscribe(result => this.purchaseOrders.set(result.data.content as any[])); }
  private refreshInventory(): void { this.api.inventory.items(0, 100).subscribe(result => this.inventory.set(result.data.content as any[])); }
  private refreshWorkOrders(): void { this.api.production.workOrders(0, 100).subscribe(result => this.workOrders.set(result.data.content as any[])); }
  private refreshCustomers(): void { this.api.sales.customers(0, 100).subscribe(result => this.customers.set(result.data.content as any[])); }
  private refreshSalesOrders(): void {
    this.api.sales.orders(0, 100).subscribe(result => {
      this.salesOrders.set(result.data.content as any[]);
      const customerId = this.paymentCustomerId();
      if (customerId !== null) this.selectPaymentCustomer(String(customerId));
    });
  }
}
