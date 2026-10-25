import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApiResponse, Page } from '../models/api-response';
import { Organization } from '../models/master-data';
import { MockDataService } from './mock-data.service';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class OrganizationService {
  private nextId = 100;
  private base = `${environment.apiBaseUrl}/master-data/organizations`;

  constructor(private mock: MockDataService, private http: HttpClient) {}

  list(page = 0, size = 20): Observable<ApiResponse<Page<Organization>>> {
    if (environment.useMock) {
      const all = this.mock.organizations();
      const paged: Page<Organization> = {
        content: all.slice(page * size, page * size + size),
        totalElements: all.length, totalPages: Math.ceil(all.length / size),
        number: page, size, empty: all.length === 0
      };
      return of({ success: true, message: 'OK (static)', data: paged, timestamp: new Date().toISOString() });
    }
    return this.http.get<ApiResponse<Page<Organization>>>(`${this.base}?page=${page}&size=${size}`);
  }

  create(body: Partial<Organization>): Observable<ApiResponse<Organization>> {
    if (environment.useMock) {
      const org: Organization = { id: this.nextId++, status: 'ACTIVE', ...body } as Organization;
      this.mock.organizations.update(list => [...list, org]);
      return of({ success: true, message: 'Created (static)', data: org, timestamp: new Date().toISOString() });
    }
    return this.http.post<ApiResponse<Organization>>(this.base, body);
  }

  update(id: number, body: Partial<Organization>): Observable<ApiResponse<Organization>> {
    if (environment.useMock) {
      this.mock.organizations.update(list => list.map(o => o.id === id ? { ...o, ...body } : o));
      const updated = this.mock.organizations().find(o => o.id === id)!;
      return of({ success: true, message: 'Updated (static)', data: updated, timestamp: new Date().toISOString() });
    }
    return this.http.put<ApiResponse<Organization>>(`${this.base}/${id}`, body);
  }

  delete(id: number): Observable<ApiResponse<void>> {
    if (environment.useMock) {
      this.mock.organizations.update(list => list.filter(o => o.id !== id));
      return of({ success: true, message: 'Deleted (static)', data: undefined, timestamp: new Date().toISOString() });
    }
    return this.http.delete<ApiResponse<void>>(`${this.base}/${id}`);
  }
}
