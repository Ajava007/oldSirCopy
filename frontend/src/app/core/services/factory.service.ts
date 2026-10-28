import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Page } from '../models/api-response';
import { Factory } from '../models/master-data';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class FactoryService {
  private readonly base = `${environment.apiBaseUrl}/api/v1/master-data/factories`;
  constructor(private readonly http: HttpClient) {}

  list(page = 0, size = 20): Observable<ApiResponse<Page<Factory>>> {
    return this.http.get<ApiResponse<Page<Factory>>>(this.base, { params: { page, size } });
  }
  create(body: Partial<Factory>): Observable<ApiResponse<Factory>> {
    return this.http.post<ApiResponse<Factory>>(this.base, body);
  }
  update(id: number, body: Partial<Factory>): Observable<ApiResponse<Factory>> {
    return this.http.put<ApiResponse<Factory>>(`${this.base}/${id}`, body);
  }
  delete(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.base}/${id}`);
  }
}
