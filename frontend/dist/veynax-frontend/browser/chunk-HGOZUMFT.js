import {
  environment
} from "./chunk-HGQUEZGA.js";
import {
  HttpClient
} from "./chunk-OWZPG4BG.js";
import {
  MockDataService
} from "./chunk-4P265WU7.js";
import {
  __spreadValues,
  of,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UYLOIQ7B.js";

// src/app/core/services/organization.service.ts
var OrganizationService = class _OrganizationService {
  constructor(mock, http) {
    this.mock = mock;
    this.http = http;
    this.nextId = 100;
    this.base = `${environment.apiBaseUrl}/master-data/organizations`;
  }
  list(page = 0, size = 20) {
    if (environment.useMock) {
      const all = this.mock.organizations();
      const paged = {
        content: all.slice(page * size, page * size + size),
        totalElements: all.length,
        totalPages: Math.ceil(all.length / size),
        number: page,
        size,
        empty: all.length === 0
      };
      return of({ success: true, message: "OK (static)", data: paged, timestamp: (/* @__PURE__ */ new Date()).toISOString() });
    }
    return this.http.get(`${this.base}?page=${page}&size=${size}`);
  }
  create(body) {
    if (environment.useMock) {
      const org = __spreadValues({ id: this.nextId++, status: "ACTIVE" }, body);
      this.mock.organizations.update((list) => [...list, org]);
      return of({ success: true, message: "Created (static)", data: org, timestamp: (/* @__PURE__ */ new Date()).toISOString() });
    }
    return this.http.post(this.base, body);
  }
  update(id, body) {
    if (environment.useMock) {
      this.mock.organizations.update((list) => list.map((o) => o.id === id ? __spreadValues(__spreadValues({}, o), body) : o));
      const updated = this.mock.organizations().find((o) => o.id === id);
      return of({ success: true, message: "Updated (static)", data: updated, timestamp: (/* @__PURE__ */ new Date()).toISOString() });
    }
    return this.http.put(`${this.base}/${id}`, body);
  }
  delete(id) {
    if (environment.useMock) {
      this.mock.organizations.update((list) => list.filter((o) => o.id !== id));
      return of({ success: true, message: "Deleted (static)", data: void 0, timestamp: (/* @__PURE__ */ new Date()).toISOString() });
    }
    return this.http.delete(`${this.base}/${id}`);
  }
  static {
    this.\u0275fac = function OrganizationService_Factory(t) {
      return new (t || _OrganizationService)(\u0275\u0275inject(MockDataService), \u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrganizationService, factory: _OrganizationService.\u0275fac, providedIn: "root" });
  }
};

export {
  OrganizationService
};
//# sourceMappingURL=chunk-HGOZUMFT.js.map
