import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, Page } from '../models/api-response';

type Data<T = unknown> = ApiResponse<T>;
type Query = Record<string, string | number | boolean | undefined | null>;

@Injectable({ providedIn: 'root' })
export class BackendApiService {
  private readonly api = `${environment.apiBaseUrl}/api`;
  private readonly v1 = `${this.api}/v1`;

  constructor(private readonly http: HttpClient) {}

  private params(query: Query = {}): HttpParams {
    let params = new HttpParams();
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== null && value !== '') params = params.set(key, String(value));
    }
    return params;
  }

  private pageQuery(page = 0, size = 20): Query { return { page, size }; }
  private crud<T>(path: string) {
    return {
      list: (page = 0, size = 20): Observable<Data<Page<T>>> => this.http.get<Data<Page<T>>>(path, { params: this.params(this.pageQuery(page, size)) }),
      get: (id: number | string): Observable<Data<T>> => this.http.get<Data<T>>(`${path}/${encodeURIComponent(String(id))}`),
      create: (body: unknown): Observable<Data<T>> => this.http.post<Data<T>>(path, body),
      update: (id: number | string, body: unknown): Observable<Data<T>> => this.http.put<Data<T>>(`${path}/${encodeURIComponent(String(id))}`, body),
      delete: (id: number | string): Observable<Data<void>> => this.http.delete<Data<void>>(`${path}/${encodeURIComponent(String(id))}`),
    };
  }

  // Master data
  readonly organizations = this.crud(`${this.v1}/master-data/organizations`);
  readonly factories = this.crud(`${this.v1}/master-data/factories`);
  readonly vehicleModels = this.crud(`${this.v1}/master-data/vehicle-models`);

  // Engineering
  readonly parts = this.crud(`${this.v1}/engineering/parts`);
  readonly bom = {
    byParent: (parentPartCode: string) => this.http.get<Data<unknown[]>>(`${this.v1}/engineering/bom`, { params: this.params({ parentPartCode }) }),
    get: (id: number) => this.http.get<Data<unknown>>(`${this.v1}/engineering/bom/${id}`),
    create: (body: unknown) => this.http.post<Data<unknown>>(`${this.v1}/engineering/bom`, body),
    update: (id: number, body: unknown) => this.http.put<Data<unknown>>(`${this.v1}/engineering/bom/${id}`, body),
    delete: (id: number) => this.http.delete<Data<void>>(`${this.v1}/engineering/bom/${id}`),
  };
  readonly routing = {
    byModel: (modelCode: string) => this.http.get<Data<unknown[]>>(`${this.v1}/engineering/routing`, { params: this.params({ modelCode }) }),
    get: (id: number) => this.http.get<Data<unknown>>(`${this.v1}/engineering/routing/${id}`),
    create: (body: unknown) => this.http.post<Data<unknown>>(`${this.v1}/engineering/routing`, body),
    update: (id: number, body: unknown) => this.http.put<Data<unknown>>(`${this.v1}/engineering/routing/${id}`, body),
    delete: (id: number) => this.http.delete<Data<void>>(`${this.v1}/engineering/routing/${id}`),
  };

  // Supply chain
  readonly suppliers = this.crud(`${this.v1}/supply-chain/suppliers`);
  readonly purchaseOrders = {
    ...this.crud(`${this.v1}/supply-chain/purchase-orders`),
    transition: (id: number, targetStatus: string) => this.http.post<Data<unknown>>(`${this.v1}/supply-chain/purchase-orders/${id}/transition`, { targetStatus }),
    receive: (id: number, warehouse: string, remark?: string) => this.http.post<Data<unknown>>(`${this.v1}/supply-chain/purchase-orders/${id}/receive`, { warehouse, remark }),
  };

  // Inventory and MRP
  readonly inventory = {
    items: (page = 0, size = 20, sort = 'partCode') => this.http.get<Data<Page<unknown>>>(`${this.v1}/inventory/items`, { params: this.params({ page, size, sort }) }),
    transactions: (partCode: string) => this.http.get<Data<unknown[]>>(`${this.v1}/inventory/transactions`, { params: this.params({ partCode }) }),
    adjust: (body: unknown) => this.http.post<Data<unknown>>(`${this.v1}/inventory/adjust`, body),
    calculateMrp: (body: unknown) => this.http.post<Data<unknown[]>>(`${this.v1}/inventory/mrp/calculate`, body),
    mrpRun: (runNumber: string) => this.http.get<Data<unknown[]>>(`${this.v1}/inventory/mrp/run/${encodeURIComponent(runNumber)}`),
  };

  // Production
  readonly production = {
    plans: (page = 0, size = 20) => this.http.get<Data<Page<unknown>>>(`${this.v1}/production/plans`, { params: this.params({ page, size }) }),
    createPlan: (body: unknown) => this.http.post<Data<unknown>>(`${this.v1}/production/plans`, body),
    workOrders: (page = 0, size = 20) => this.http.get<Data<Page<unknown>>>(`${this.v1}/production/work-orders`, { params: this.params({ page, size }) }),
    activeOnLine: (lineCode: string) => this.http.get<Data<unknown[]>>(`${this.v1}/production/shop-floor/active`, { params: this.params({ lineCode }) }),
    materialCheck: (modelCode: string, quantity: number) => this.http.get<Data<{ modelCode: string; vehicleQuantity: number; sufficient: boolean; materials: { partCode: string; requiredQuantity: number; availableQuantity: number; sufficient: boolean }[] }>>(`${this.v1}/production/material-check`, { params: this.params({ modelCode, quantity }) }),
    createWorkOrder: (body: unknown) => this.http.post<Data<unknown>>(`${this.v1}/production/work-orders`, body),
    transitionWorkOrder: (id: number, targetStatus: string) => this.http.post<Data<unknown>>(`${this.v1}/production/work-orders/${id}/transition`, { targetStatus }),
  };

  // Quality
  readonly quality = {
    inspections: (page = 0, size = 20) => this.http.get<Data<Page<unknown>>>(`${this.v1}/quality/inspections`, { params: this.params({ page, size }) }),
    inspectionsByVin: (vin: string) => this.http.get<Data<unknown[]>>(`${this.v1}/quality/inspections/by-vin`, { params: this.params({ vin }) }),
    defects: (page = 0, size = 20) => this.http.get<Data<Page<unknown>>>(`${this.v1}/quality/defects`, { params: this.params({ page, size }) }),
    createInspection: (body: unknown) => this.http.post<Data<unknown>>(`${this.v1}/quality/inspections`, body),
    ncrs: (page = 0, size = 20) => this.http.get<Data<Page<unknown>>>(`${this.v1}/quality/ncrs`, { params: this.params({ page, size }) }),
    createNcr: (body: unknown) => this.http.post<Data<unknown>>(`${this.v1}/quality/ncrs`, body),
    transitionNcr: (id: number, body: unknown) => this.http.post<Data<unknown>>(`${this.v1}/quality/ncrs/${id}/transition`, body),
    gateCheck: (vin: string) => this.http.get<Data<unknown>>(`${this.v1}/quality/gate-check/${encodeURIComponent(vin)}`),
  };

  // Maintenance
  readonly maintenance = {
    assets: () => this.http.get<Data<unknown[]>>(`${this.v1}/maintenance/assets`),
    createAsset: (body: unknown) => this.http.post<Data<unknown>>(`${this.v1}/maintenance/assets`, body),
    workOrders: (page = 0, size = 20) => this.http.get<Data<Page<unknown>>>(`${this.v1}/maintenance/work-orders`, { params: this.params({ page, size }) }),
    createWorkOrder: (body: unknown) => this.http.post<Data<unknown>>(`${this.v1}/maintenance/work-orders`, body),
    transitionWorkOrder: (id: number, targetStatus: string) => this.http.post<Data<unknown>>(`${this.v1}/maintenance/work-orders/${id}/transition`, { targetStatus }),
    downtime: () => this.http.get<Data<unknown[]>>(`${this.v1}/maintenance/downtime`),
    createDowntime: (body: unknown) => this.http.post<Data<unknown>>(`${this.v1}/maintenance/downtime`, body),
    reliability: (assetCode?: string) => this.http.get<Data<unknown[]>>(`${this.v1}/maintenance/reliability`, { params: this.params({ assetCode }) }),
  };

  // Sales and yard
  readonly sales = {
    orders: (page = 0, size = 20) => this.http.get<Data<Page<unknown>>>(`${this.v1}/sales/orders`, { params: this.params({ page, size }) }),
    createOrder: (body: unknown) => this.http.post<Data<unknown>>(`${this.v1}/sales/orders`, body),
    allocate: (id: number, vin: string) => this.http.post<Data<unknown>>(`${this.v1}/sales/orders/${id}/allocate`, { vin }),
    transition: (id: number, targetStatus: string) => this.http.post<Data<unknown>>(`${this.v1}/sales/orders/${id}/transition`, { targetStatus }),
    markPaid: (id: number) => this.http.post<Data<unknown>>(`${this.v1}/sales/orders/${id}/mark-paid`, null),
    paymentHistory: (id: number) => this.http.get<Data<{ id: number; salesOrderId: number; soNumber: string; amount: number; method: string; reference?: string; status: string; paidAt: string }[]>>(`${this.v1}/sales/orders/${id}/payments`),
    recordPayment: (id: number, body: { amount: number; method: string; reference?: string }) => this.http.post<Data<unknown>>(`${this.v1}/sales/orders/${id}/payments`, body),
    customers: (page = 0, size = 20) => this.http.get<Data<Page<unknown>>>(`${this.v1}/sales/customers`, { params: this.params({ page, size }) }),
    createCustomer: (body: unknown) => this.http.post<Data<unknown>>(`${this.v1}/sales/customers`, body),
    dealers: (page = 0, size = 20) => this.http.get<Data<Page<unknown>>>(`${this.v1}/sales/dealers`, { params: this.params({ page, size }) }),
    createDealer: (body: unknown) => this.http.post<Data<unknown>>(`${this.v1}/sales/dealers`, body),
    yardMap: () => this.http.get<Data<unknown[]>>(`${this.v1}/sales/yard/map`),
  };

  // Workforce
  readonly workforce = {
    employees: (page = 0, size = 20) => this.http.get<Data<Page<unknown>>>(`${this.v1}/workforce/employees`, { params: this.params({ page, size }) }),
    createEmployee: (body: unknown) => this.http.post<Data<unknown>>(`${this.v1}/workforce/employees`, body),
    certifications: (employeeId: number) => this.http.get<Data<unknown[]>>(`${this.v1}/workforce/certifications/${employeeId}`),
    createCertification: (body: unknown) => this.http.post<Data<unknown>>(`${this.v1}/workforce/certifications`, body),
    expiringCertifications: () => this.http.get<Data<unknown[]>>(`${this.v1}/workforce/certifications/expiring-soon`),
    qualification: (employeeId: number, skillCode: string) => this.http.get<Data<unknown>>(`${this.v1}/workforce/qualification/check`, { params: this.params({ employeeId, skillCode }) }),
    shifts: (date: string) => this.http.get<Data<unknown[]>>(`${this.v1}/workforce/shifts`, { params: this.params({ date }) }),
    createShift: (body: unknown) => this.http.post<Data<unknown>>(`${this.v1}/workforce/shifts`, body),
  };

  // Reports (PDF uses a blob response; history is a paged JSON response)
  readonly reports = {
    history: (page = 0, size = 20) => this.http.get<Data<Page<unknown>>>(`${this.v1}/reports/history`, { params: this.params({ page, size }) }),
    vinGenealogy: (vin: string) => this.http.get(`${this.v1}/reports/vin-genealogy`, { params: this.params({ vin }), responseType: 'blob' }),
  };

  // Legacy API controllers
  readonly products = {
    list: () => this.http.get<unknown[]>(`${this.api}/products`),
    get: (id: number) => this.http.get<unknown>(`${this.api}/products/${id}`),
    premium: () => this.http.get<unknown[]>(`${this.api}/products/premium`),
    create: (body: unknown) => this.http.post<unknown>(`${this.api}/products`, body),
    update: (id: number, body: unknown) => this.http.put<unknown>(`${this.api}/products/${id}`, body),
    delete: (id: number) => this.http.delete<void>(`${this.api}/products/${id}`),
  };
  readonly users = {
    list: () => this.http.get<unknown[]>(`${this.api}/users`),
    get: (username: string) => this.http.get<unknown>(`${this.api}/users/${encodeURIComponent(username)}`),
    update: (username: string, body: unknown) => this.http.put<unknown>(`${this.api}/users/${encodeURIComponent(username)}`, body),
    delete: (username: string) => this.http.delete(`${this.api}/users/${encodeURIComponent(username)}`, { responseType: 'text' }),
    setEnabled: (username: string, enabled: boolean) => this.http.patch<unknown>(`${this.api}/users/${encodeURIComponent(username)}/status`, { enabled }),
  };
  readonly admin = {
    roles: () => this.http.get<string[]>(`${this.api}/admin/roles`),
    setRoles: (username: string, roles: string[]) => this.http.put<unknown>(`${this.api}/admin/users/${encodeURIComponent(username)}/roles`, { roles }),
    usersByRole: (roleName: string) => this.http.get<unknown[]>(`${this.api}/admin/roles/${encodeURIComponent(roleName)}/users`),
    statistics: () => this.http.get<unknown>(`${this.api}/admin/statistics`),
  };
  readonly dashboard = {
    user: () => this.http.get<unknown>(`${this.api}/dashboard/user`),
    moderator: () => this.http.get<unknown>(`${this.api}/dashboard/moderator`),
    admin: () => this.http.get<unknown>(`${this.api}/dashboard/admin`),
    premium: () => this.http.get<unknown>(`${this.api}/dashboard/premium`),
    data: () => this.http.get<unknown>(`${this.api}/dashboard/data`),
  };
  readonly debugRoles = () => this.http.get<unknown>(`${this.api}/debug/my-roles`);
  readonly securitySamples = {
    first: (board: 'all' | 'mod' | 'admin') => this.http.get<unknown>(`${this.api}/test/${board}`),
    second: (board: 'all' | 'mod' | 'admin') => this.http.get<unknown>(`${this.api}/test2/${board}`),
  };
  readonly test = {
    sendMail: () => this.http.get(`${environment.apiBaseUrl}/test/sendMail`, { responseType: 'text' }),
  };
}
