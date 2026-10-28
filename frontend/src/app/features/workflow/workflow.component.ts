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
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss'],
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
