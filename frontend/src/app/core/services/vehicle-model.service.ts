import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApiResponse, Page } from '../models/api-response';
import { VehicleModel } from '../models/master-data';
import { MockDataService } from './mock-data.service';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class VehicleModelService {
  private nextId = 100;
  private base = `${environment.apiBaseUrl}/master-data/vehicle-models`;

  constructor(private mock: MockDataService, private http: HttpClient) {}

  list(page = 0, size = 20): Observable<ApiResponse<Page<VehicleModel>>> {
    if (environment.useMock) {
      const all = this.mock.vehicleModels();
      const paged: Page<VehicleModel> = {
        content: all.slice(page * size, page * size + size),
        totalElements: all.length, totalPages: Math.ceil(all.length / size),
        number: page, size, empty: all.length === 0
      };
      return of({ success: true, message: 'OK (static)', data: paged, timestamp: new Date().toISOString() });
    }
    return this.http.get<ApiResponse<Page<VehicleModel>>>(`${this.base}?page=${page}&size=${size}`);
  }

  create(body: Partial<VehicleModel>): Observable<ApiResponse<VehicleModel>> {
    if (environment.useMock) {
      const m: VehicleModel = { id: this.nextId++, status: 'ACTIVE', ...body } as VehicleModel;
      this.mock.vehicleModels.update(list => [...list, m]);
      return of({ success: true, message: 'Created (static)', data: m, timestamp: new Date().toISOString() });
    }
    return this.http.post<ApiResponse<VehicleModel>>(this.base, body);
  }

  update(id: number, body: Partial<VehicleModel>): Observable<ApiResponse<VehicleModel>> {
    if (environment.useMock) {
      this.mock.vehicleModels.update(list => list.map(m => m.id === id ? { ...m, ...body } : m));
      const updated = this.mock.vehicleModels().find(m => m.id === id)!;
      return of({ success: true, message: 'Updated (static)', data: updated, timestamp: new Date().toISOString() });
    }
    return this.http.put<ApiResponse<VehicleModel>>(`${this.base}/${id}`, body);
  }

  delete(id: number): Observable<ApiResponse<VehicleModel>> {
    if (environment.useMock) {
      this.mock.vehicleModels.update(list => list.filter(m => m.id !== id));
      return of({ success: true, message: 'Deleted (static)', data: undefined as any, timestamp: new Date().toISOString() });
    }
    return this.http.delete<ApiResponse<VehicleModel>>(`${this.base}/${id}`);
  }
}
