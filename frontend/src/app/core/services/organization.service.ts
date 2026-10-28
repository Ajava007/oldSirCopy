import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Page } from '../models/api-response';
import { Organization } from '../models/master-data';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class OrganizationService {
  private readonly base = `${environment.apiBaseUrl}/api/v1/master-data/organizations`;
  constructor(private readonly http: HttpClient) {}

  list(page = 0, size = 20): Observable<ApiResponse<Page<Organization>>> {
    return this.http.get<ApiResponse<Page<Organization>>>(this.base, { params: { page, size } });
  }
  create(body: Partial<Organization>): Observable<ApiResponse<Organization>> {
    return this.http.post<ApiResponse<Organization>>(this.base, body);
  }
  update(id: number, body: Partial<Organization>): Observable<ApiResponse<Organization>> {
    return this.http.put<ApiResponse<Organization>>(`${this.base}/${id}`, body);
  }
  delete(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.base}/${id}`);
  }
}
