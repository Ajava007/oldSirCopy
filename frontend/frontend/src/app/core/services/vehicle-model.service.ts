import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Page } from '../models/api-response';
import { VehicleModel } from '../models/master-data';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class VehicleModelService {
  private readonly base = `${environment.apiBaseUrl}/api/v1/master-data/vehicle-models`;
  constructor(private readonly http: HttpClient) {}

  list(page = 0, size = 20): Observable<ApiResponse<Page<VehicleModel>>> {
    return this.http.get<ApiResponse<Page<VehicleModel>>>(this.base, { params: { page, size } });
  }
  create(body: Partial<VehicleModel>): Observable<ApiResponse<VehicleModel>> {
    return this.http.post<ApiResponse<VehicleModel>>(this.base, body);
  }
  update(id: number, body: Partial<VehicleModel>): Observable<ApiResponse<VehicleModel>> {
    return this.http.put<ApiResponse<VehicleModel>>(`${this.base}/${id}`, body);
  }
  delete(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.base}/${id}`);
  }
}
