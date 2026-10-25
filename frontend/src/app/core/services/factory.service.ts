import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApiResponse, Page } from '../models/api-response';
import { Factory } from '../models/master-data';
import { MockDataService } from './mock-data.service';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class FactoryService {
  private nextId = 100;
  private base = `${environment.apiBaseUrl}/master-data/factories`;

  constructor(private mock: MockDataService, private http: HttpClient) {}

  list(page = 0, size = 20): Observable<ApiResponse<Page<Factory>>> {
    if (environment.useMock) {
      const all = this.mock.factories();
      const paged: Page<Factory> = {
        content: all.slice(page * size, page * size + size),
        totalElements: all.length, totalPages: Math.ceil(all.length / size),
        number: page, size, empty: all.length === 0
      };
      return of({ success: true, message: 'OK (static)', data: paged, timestamp: new Date().toISOString() });
    }
    return this.http.get<ApiResponse<Page<Factory>>>(`${this.base}?page=${page}&size=${size}`);
  }

  create(body: Partial<Factory>): Observable<ApiResponse<Factory>> {
    if (environment.useMock) {
      const f: Factory = { id: this.nextId++, status: 'ACTIVE', ...body } as Factory;
      this.mock.factories.update(list => [...list, f]);
      return of({ success: true, message: 'Created (static)', data: f, timestamp: new Date().toISOString() });
    }
    return this.http.post<ApiResponse<Factory>>(this.base, body);
  }

  update(id: number, body: Partial<Factory>): Observable<ApiResponse<Factory>> {
    if (environment.useMock) {
      this.mock.factories.update(list => list.map(f => f.id === id ? { ...f, ...body } : f));
      const updated = this.mock.factories().find(f => f.id === id)!;
      return of({ success: true, message: 'Updated (static)', data: updated, timestamp: new Date().toISOString() });
    }
    return this.http.put<ApiResponse<Factory>>(`${this.base}/${id}`, body);
  }

  delete(id: number): Observable<ApiResponse<void>> {
    if (environment.useMock) {
      this.mock.factories.update(list => list.filter(f => f.id !== id));
      return of({ success: true, message: 'Deleted (static)', data: undefined, timestamp: new Date().toISOString() });
    }
    return this.http.delete<ApiResponse<void>>(`${this.base}/${id}`);
  }
}
