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
  NumberValueAccessor,
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
  ɵɵtextInterpolate
} from "./chunk-UYLOIQ7B.js";

// src/app/core/services/vehicle-model.service.ts
var VehicleModelService = class _VehicleModelService {
  constructor(mock, http) {
    this.mock = mock;
    this.http = http;
    this.nextId = 100;
    this.base = `${environment.apiBaseUrl}/master-data/vehicle-models`;
  }
  list(page = 0, size = 20) {
    if (environment.useMock) {
      const all = this.mock.vehicleModels();
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
      const m = __spreadValues({ id: this.nextId++, status: "ACTIVE" }, body);
      this.mock.vehicleModels.update((list) => [...list, m]);
      return of({ success: true, message: "Created (static)", data: m, timestamp: (/* @__PURE__ */ new Date()).toISOString() });
    }
    return this.http.post(this.base, body);
  }
  update(id, body) {
    if (environment.useMock) {
      this.mock.vehicleModels.update((list) => list.map((m) => m.id === id ? __spreadValues(__spreadValues({}, m), body) : m));
      const updated = this.mock.vehicleModels().find((m) => m.id === id);
      return of({ success: true, message: "Updated (static)", data: updated, timestamp: (/* @__PURE__ */ new Date()).toISOString() });
    }
    return this.http.put(`${this.base}/${id}`, body);
  }
  delete(id) {
    if (environment.useMock) {
      this.mock.vehicleModels.update((list) => list.filter((m) => m.id !== id));
      return of({ success: true, message: "Deleted (static)", data: void 0, timestamp: (/* @__PURE__ */ new Date()).toISOString() });
    }
    return this.http.delete(`${this.base}/${id}`);
  }
  static {
    this.\u0275fac = function VehicleModelService_Factory(t) {
      return new (t || _VehicleModelService)(\u0275\u0275inject(MockDataService), \u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VehicleModelService, factory: _VehicleModelService.\u0275fac, providedIn: "root" });
  }
};

// src/app/pages/master-data/vehicle-model/vehicle-model.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function VehicleModelComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "form", 9);
    \u0275\u0275listener("ngSubmit", function VehicleModelComponent_Conditional_9_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(2, "div", 10);
    \u0275\u0275element(3, "input", 11)(4, "vx-field-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13);
    \u0275\u0275element(6, "input", 14)(7, "vx-field-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 10);
    \u0275\u0275element(9, "input", 15)(10, "vx-field-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 10);
    \u0275\u0275element(12, "input", 16)(13, "vx-field-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 17);
    \u0275\u0275element(15, "input", 18)(16, "vx-field-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 17);
    \u0275\u0275element(18, "input", 19)(19, "vx-field-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 17);
    \u0275\u0275element(21, "input", 20)(22, "vx-field-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 21)(24, "select", 22)(25, "option", 23);
    \u0275\u0275text(26, "DRAFT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 24);
    \u0275\u0275text(28, "ACTIVE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 25);
    \u0275\u0275text(30, "DISCONTINUED");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "button", 26);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.form.get("modelCode"));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.form.get("modelName"));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.form.get("brand"));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.form.get("vehicleType"));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.form.get("modelYear"));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.form.get("fuelType"));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.form.get("basePrice"));
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.editingId() ? "Save changes" : "Add model");
  }
}
function VehicleModelComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275element(2, "span", 28);
    \u0275\u0275text(3, " Loading\u2026");
    \u0275\u0275elementEnd()();
  }
}
function VehicleModelComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 31);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 32);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 8)(17, "button", 33);
    \u0275\u0275listener("click", function VehicleModelComponent_For_33_Template_button_click_17_listener() {
      const m_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit(m_r4));
    });
    \u0275\u0275element(18, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 35);
    \u0275\u0275listener("click", function VehicleModelComponent_For_33_Template_button_click_19_listener() {
      const m_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove(m_r4));
    });
    \u0275\u0275element(20, "i", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.modelCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.modelName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.brand);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.vehicleType || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.modelYear || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.basePrice != null ? m_r4.basePrice.toLocaleString() : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", m_r4.status === "ACTIVE" ? "rgba(111,191,115,.18)" : m_r4.status === "DRAFT" ? "rgba(123,168,184,.18)" : "rgba(212,106,90,.18)")("color", m_r4.status === "ACTIVE" ? "#6fbf73" : m_r4.status === "DRAFT" ? "#7ba8b8" : "#d46a5a");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r4.status);
  }
}
function VehicleModelComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2, "No vehicle models yet.");
    \u0275\u0275elementEnd()();
  }
}
var VehicleModelComponent = class _VehicleModelComponent {
  constructor(fb, service, toast, confirm) {
    this.fb = fb;
    this.service = service;
    this.toast = toast;
    this.confirm = confirm;
    this.items = signal([]);
    this.loading = signal(false);
    this.saving = signal(false);
    this.showForm = signal(false);
    this.editingId = signal(null);
    this.form = this.fb.group({
      modelCode: ["", Validators.required],
      modelName: ["", Validators.required],
      brand: ["", Validators.required],
      vehicleType: [""],
      segment: [""],
      modelYear: [""],
      fuelType: [""],
      transmission: [""],
      basePrice: [null],
      status: ["DRAFT"]
    });
  }
  ngOnInit() {
    this.load();
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
      this.form.reset({ status: "DRAFT" });
      this.editingId.set(null);
    }
  }
  edit(m) {
    this.editingId.set(m.id);
    this.showForm.set(true);
    this.form.patchValue({ modelCode: m.modelCode, modelName: m.modelName, brand: m.brand, vehicleType: m.vehicleType ?? "", segment: m.segment ?? "", modelYear: m.modelYear ?? "", fuelType: m.fuelType ?? "", transmission: m.transmission ?? "", basePrice: m.basePrice ?? null, status: m.status });
  }
  save() {
    if (this.form.invalid) {
      this.toast.error("Model code, name and brand are required.");
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
  remove(m) {
    return __async(this, null, function* () {
      if (!(yield this.confirm.confirm({ message: `Delete vehicle model "${m.modelName}"?`, danger: true, confirmLabel: "Delete" })))
        return;
      this.service.delete(m.id).subscribe({ next: () => {
        this.toast.success("Deleted.");
        this.load();
      }, error: () => {
      } });
    });
  }
  static {
    this.\u0275fac = function VehicleModelComponent_Factory(t) {
      return new (t || _VehicleModelComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(VehicleModelService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ConfirmDialogService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VehicleModelComponent, selectors: [["vx-vehicle-model"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 4, consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "flex-wrap", "gap-2"], [1, "fw-bold", "mb-0"], [1, "text-muted"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-plus-lg", "me-1"], [1, "vx-card", "p-3", "mb-3"], [1, "vx-card", "p-0", "overflow-auto"], [1, "table", "vx-table", "table-hover", "align-middle", "mb-0"], [1, "text-end"], [1, "row", "g-2", 3, "ngSubmit", "formGroup"], [1, "col-md-2"], ["formControlName", "modelCode", "placeholder", "Model code *", 1, "form-control", "form-control-sm"], [3, "control"], [1, "col-md-3"], ["formControlName", "modelName", "placeholder", "Model name *", 1, "form-control", "form-control-sm"], ["formControlName", "brand", "placeholder", "Brand *", 1, "form-control", "form-control-sm"], ["formControlName", "vehicleType", "placeholder", "Type (SUV, Sedan\u2026)", 1, "form-control", "form-control-sm"], [1, "col-md-1"], ["formControlName", "modelYear", "placeholder", "Year", 1, "form-control", "form-control-sm"], ["formControlName", "fuelType", "placeholder", "Fuel", 1, "form-control", "form-control-sm"], ["formControlName", "basePrice", "placeholder", "Price", "type", "number", 1, "form-control", "form-control-sm"], [1, "col-md-12", "d-flex", "gap-2", "align-items-center"], ["formControlName", "status", 1, "form-select", "form-select-sm", 2, "max-width", "180px"], ["value", "DRAFT"], ["value", "ACTIVE"], ["value", "DISCONTINUED"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "disabled"], ["colspan", "8", 1, "text-center", "text-muted", "py-4"], [1, "spinner-border", "spinner-border-sm"], [1, "mono"], [1, "fw-semibold"], [1, "text-end", "mono"], [1, "badge"], [1, "btn", "btn-sm", "btn-outline-secondary", "me-1", 3, "click"], [1, "bi", "bi-pencil"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash"]], template: function VehicleModelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h5", 1);
        \u0275\u0275text(3, "Vehicle Models");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "small", 2);
        \u0275\u0275text(5, "Product master \u2014 variants, BOM and routing attach to these in Phase 2.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "button", 3);
        \u0275\u0275listener("click", function VehicleModelComponent_Template_button_click_6_listener() {
          return ctx.toggleForm();
        });
        \u0275\u0275element(7, "i", 4);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, VehicleModelComponent_Conditional_9_Template, 33, 10, "div", 5);
        \u0275\u0275elementStart(10, "div", 6)(11, "table", 7)(12, "thead")(13, "tr")(14, "th");
        \u0275\u0275text(15, "Code");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "th");
        \u0275\u0275text(17, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th");
        \u0275\u0275text(19, "Brand");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "th");
        \u0275\u0275text(21, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "th");
        \u0275\u0275text(23, "Year");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "th", 8);
        \u0275\u0275text(25, "Base price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "th");
        \u0275\u0275text(27, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "th", 8);
        \u0275\u0275text(29, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "tbody");
        \u0275\u0275template(31, VehicleModelComponent_Conditional_31_Template, 4, 0, "tr");
        \u0275\u0275repeaterCreate(32, VehicleModelComponent_For_33_Template, 21, 11, "tr", null, _forTrack0);
        \u0275\u0275template(34, VehicleModelComponent_Conditional_34_Template, 3, 0, "tr");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.showForm() ? "Cancel" : "New model");
        \u0275\u0275advance();
        \u0275\u0275conditional(9, ctx.showForm() ? 9 : -1);
        \u0275\u0275advance(22);
        \u0275\u0275conditional(31, ctx.loading() ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.items());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(34, !ctx.loading() && ctx.items().length === 0 ? 34 : -1);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FieldErrorComponent], styles: ["\n\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n/*# sourceMappingURL=vehicle-model.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VehicleModelComponent, { className: "VehicleModelComponent", filePath: "src/app/pages/master-data/vehicle-model/vehicle-model.component.ts", lineNumber: 67 });
})();
export {
  VehicleModelComponent
};
//# sourceMappingURL=chunk-O5ZLNKXV.js.map
