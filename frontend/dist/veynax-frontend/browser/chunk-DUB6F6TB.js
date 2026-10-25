import {
  OrganizationService
} from "./chunk-HGOZUMFT.js";
import {
  FieldErrorComponent
} from "./chunk-C7HAUPGC.js";
import {
  ConfirmDialogService
} from "./chunk-QPNR6KY6.js";
import {
  ToastService
} from "./chunk-QQ227YGG.js";
import {
  environment
} from "./chunk-HGQUEZGA.js";
import {
  HttpClient
} from "./chunk-OWZPG4BG.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-O3LMM4DO.js";
import {
  MockDataService
} from "./chunk-4P265WU7.js";
import {
  CommonModule,
  __async,
  __spreadValues,
  of,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-UYLOIQ7B.js";

// src/app/core/services/factory.service.ts
var FactoryService = class _FactoryService {
  constructor(mock, http) {
    this.mock = mock;
    this.http = http;
    this.nextId = 100;
    this.base = `${environment.apiBaseUrl}/master-data/factories`;
  }
  list(page = 0, size = 20) {
    if (environment.useMock) {
      const all = this.mock.factories();
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
      const f = __spreadValues({ id: this.nextId++, status: "ACTIVE" }, body);
      this.mock.factories.update((list) => [...list, f]);
      return of({ success: true, message: "Created (static)", data: f, timestamp: (/* @__PURE__ */ new Date()).toISOString() });
    }
    return this.http.post(this.base, body);
  }
  update(id, body) {
    if (environment.useMock) {
      this.mock.factories.update((list) => list.map((f) => f.id === id ? __spreadValues(__spreadValues({}, f), body) : f));
      const updated = this.mock.factories().find((f) => f.id === id);
      return of({ success: true, message: "Updated (static)", data: updated, timestamp: (/* @__PURE__ */ new Date()).toISOString() });
    }
    return this.http.put(`${this.base}/${id}`, body);
  }
  delete(id) {
    if (environment.useMock) {
      this.mock.factories.update((list) => list.filter((f) => f.id !== id));
      return of({ success: true, message: "Deleted (static)", data: void 0, timestamp: (/* @__PURE__ */ new Date()).toISOString() });
    }
    return this.http.delete(`${this.base}/${id}`);
  }
  static {
    this.\u0275fac = function FactoryService_Factory(t) {
      return new (t || _FactoryService)(\u0275\u0275inject(MockDataService), \u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FactoryService, factory: _FactoryService.\u0275fac, providedIn: "root" });
  }
};

// src/app/pages/master-data/factory/factory.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function FactoryComponent_Conditional_9_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", o_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", o_r3.code, " \u2014 ", o_r3.name, "");
  }
}
function FactoryComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "form", 9);
    \u0275\u0275listener("ngSubmit", function FactoryComponent_Conditional_9_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(2, "div", 10)(3, "select", 11)(4, "option", 12);
    \u0275\u0275text(5, "Organization *");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, FactoryComponent_Conditional_9_For_7_Template, 2, 3, "option", 12, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275element(9, "input", 14)(10, "vx-field-error", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 10);
    \u0275\u0275element(12, "input", 16)(13, "vx-field-error", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 13);
    \u0275\u0275element(15, "input", 17)(16, "vx-field-error", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 18);
    \u0275\u0275element(18, "input", 19)(19, "vx-field-error", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 18)(21, "button", 20);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.orgs());
    \u0275\u0275advance(4);
    \u0275\u0275property("control", ctx_r1.form.get("code"));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.form.get("name"));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.form.get("location"));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.form.get("timeZone"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.editingId() ? "Save" : "Add");
  }
}
function FactoryComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275element(2, "span", 22);
    \u0275\u0275text(3, " Loading\u2026");
    \u0275\u0275elementEnd()();
  }
}
function FactoryComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 25);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 8)(13, "button", 26);
    \u0275\u0275listener("click", function FactoryComponent_For_29_Template_button_click_13_listener() {
      const f_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit(f_r5));
    });
    \u0275\u0275element(14, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 28);
    \u0275\u0275listener("click", function FactoryComponent_For_29_Template_button_click_15_listener() {
      const f_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove(f_r5));
    });
    \u0275\u0275element(16, "i", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r5.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r5.organizationId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r5.location || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", f_r5.status === "ACTIVE" ? "rgba(111,191,115,.18)" : "rgba(212,106,90,.18)")("color", f_r5.status === "ACTIVE" ? "#6fbf73" : "#d46a5a");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r5.status);
  }
}
function FactoryComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2, "No factories yet.");
    \u0275\u0275elementEnd()();
  }
}
var FactoryComponent = class _FactoryComponent {
  constructor(fb, service, orgService, toast, confirm) {
    this.fb = fb;
    this.service = service;
    this.orgService = orgService;
    this.toast = toast;
    this.confirm = confirm;
    this.items = signal([]);
    this.orgs = signal([]);
    this.loading = signal(false);
    this.saving = signal(false);
    this.showForm = signal(false);
    this.editingId = signal(null);
    this.form = this.fb.group({
      organizationId: [null, Validators.required],
      code: ["", Validators.required],
      name: ["", Validators.required],
      location: [""],
      timeZone: [""],
      status: ["ACTIVE"]
    });
  }
  ngOnInit() {
    this.load();
    this.orgService.list(0, 100).subscribe((res) => this.orgs.set(res.data.content));
  }
  load() {
    this.loading.set(true);
    this.service.list().subscribe({
      next: (res) => {
        this.items.set(res.data.content);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  toggleForm() {
    this.showForm.update((v) => !v);
    if (!this.showForm()) {
      this.form.reset({ status: "ACTIVE", organizationId: null });
      this.editingId.set(null);
    }
  }
  edit(f) {
    this.editingId.set(f.id);
    this.showForm.set(true);
    this.form.patchValue({ organizationId: f.organizationId, code: f.code, name: f.name, location: f.location ?? "", timeZone: f.timeZone ?? "", status: f.status });
  }
  save() {
    if (this.form.invalid) {
      this.toast.error("Organization, code and name are required.");
      return;
    }
    this.saving.set(true);
    const body = this.form.value;
    const req$ = this.editingId() ? this.service.update(this.editingId(), body) : this.service.create(body);
    req$.subscribe({
      next: () => {
        this.saving.set(false);
        this.toast.success("Saved.");
        this.toggleForm();
        this.load();
      },
      error: () => this.saving.set(false)
    });
  }
  remove(f) {
    return __async(this, null, function* () {
      if (!(yield this.confirm.confirm({ message: `Delete factory "${f.name}"?`, danger: true, confirmLabel: "Delete" })))
        return;
      this.service.delete(f.id).subscribe({ next: () => {
        this.toast.success("Deleted.");
        this.load();
      }, error: () => {
      } });
    });
  }
  static {
    this.\u0275fac = function FactoryComponent_Factory(t) {
      return new (t || _FactoryComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(FactoryService), \u0275\u0275directiveInject(OrganizationService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ConfirmDialogService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FactoryComponent, selectors: [["vx-factory"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 4, consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "flex-wrap", "gap-2"], [1, "fw-bold", "mb-0"], [1, "text-muted"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-plus-lg", "me-1"], [1, "vx-card", "p-3", "mb-3"], [1, "vx-card", "p-0", "overflow-auto"], [1, "table", "vx-table", "table-hover", "align-middle", "mb-0"], [1, "text-end"], [1, "row", "g-2", 3, "ngSubmit", "formGroup"], [1, "col-md-3"], ["formControlName", "organizationId", 1, "form-select", "form-select-sm"], [3, "ngValue"], [1, "col-md-2"], ["formControlName", "code", "placeholder", "Code *", 1, "form-control", "form-control-sm"], [3, "control"], ["formControlName", "name", "placeholder", "Name *", 1, "form-control", "form-control-sm"], ["formControlName", "location", "placeholder", "Location", 1, "form-control", "form-control-sm"], [1, "col-md-1"], ["formControlName", "timeZone", "placeholder", "TZ", 1, "form-control", "form-control-sm"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "w-100", 3, "disabled"], ["colspan", "6", 1, "text-center", "text-muted", "py-4"], [1, "spinner-border", "spinner-border-sm"], [1, "mono"], [1, "fw-semibold"], [1, "badge"], [1, "btn", "btn-sm", "btn-outline-secondary", "me-1", 3, "click"], [1, "bi", "bi-pencil"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash"]], template: function FactoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h5", 1);
        \u0275\u0275text(3, "Factories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "small", 2);
        \u0275\u0275text(5, "Plants under an organization \u2014 the multi-factory scope root.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "button", 3);
        \u0275\u0275listener("click", function FactoryComponent_Template_button_click_6_listener() {
          return ctx.toggleForm();
        });
        \u0275\u0275element(7, "i", 4);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, FactoryComponent_Conditional_9_Template, 23, 8, "div", 5);
        \u0275\u0275elementStart(10, "div", 6)(11, "table", 7)(12, "thead")(13, "tr")(14, "th");
        \u0275\u0275text(15, "Code");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "th");
        \u0275\u0275text(17, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th");
        \u0275\u0275text(19, "Org ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "th");
        \u0275\u0275text(21, "Location");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "th");
        \u0275\u0275text(23, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "th", 8);
        \u0275\u0275text(25, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "tbody");
        \u0275\u0275template(27, FactoryComponent_Conditional_27_Template, 4, 0, "tr");
        \u0275\u0275repeaterCreate(28, FactoryComponent_For_29_Template, 17, 9, "tr", null, _forTrack0);
        \u0275\u0275template(30, FactoryComponent_Conditional_30_Template, 3, 0, "tr");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.showForm() ? "Cancel" : "New factory");
        \u0275\u0275advance();
        \u0275\u0275conditional(9, ctx.showForm() ? 9 : -1);
        \u0275\u0275advance(18);
        \u0275\u0275conditional(27, ctx.loading() ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.items());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(30, !ctx.loading() && ctx.items().length === 0 ? 30 : -1);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FieldErrorComponent], styles: ["\n\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n/*# sourceMappingURL=factory.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FactoryComponent, { className: "FactoryComponent", filePath: "src/app/pages/master-data/factory/factory.component.ts", lineNumber: 64 });
})();
export {
  FactoryComponent
};
//# sourceMappingURL=chunk-DUB6F6TB.js.map
