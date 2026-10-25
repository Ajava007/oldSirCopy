import {
  PaginationComponent
} from "./chunk-IO5XVC26.js";
import {
  StatusBadgeComponent
} from "./chunk-YFSO6DQS.js";
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
import "./chunk-HGQUEZGA.js";
import "./chunk-OWZPG4BG.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-O3LMM4DO.js";
import "./chunk-4P265WU7.js";
import {
  CommonModule,
  __async,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UYLOIQ7B.js";

// src/app/pages/master-data/organization/organization.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function OrganizationComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "form", 15);
    \u0275\u0275listener("ngSubmit", function OrganizationComponent_Conditional_9_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(2, "div", 16);
    \u0275\u0275element(3, "input", 17)(4, "vx-field-error", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19);
    \u0275\u0275element(6, "input", 20)(7, "vx-field-error", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16);
    \u0275\u0275element(9, "input", 21)(10, "vx-field-error", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 22);
    \u0275\u0275element(12, "input", 23)(13, "vx-field-error", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 24)(15, "button", 25);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.form.get("code"));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.form.get("name"));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.form.get("country"));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.form.get("address"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.editingId() ? "Save" : "Add");
  }
}
function OrganizationComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275element(2, "span", 27);
    \u0275\u0275text(3, " Loading\u2026");
    \u0275\u0275elementEnd()();
  }
}
function OrganizationComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "vx-status-badge", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 13)(10, "button", 31);
    \u0275\u0275listener("click", function OrganizationComponent_For_33_Template_button_click_10_listener() {
      const o_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit(o_r4));
    });
    \u0275\u0275element(11, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 33);
    \u0275\u0275listener("click", function OrganizationComponent_For_33_Template_button_click_12_listener() {
      const o_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove(o_r4));
    });
    \u0275\u0275element(13, "i", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r4.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r4.country || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("label", o_r4.status)("status", o_r4.status);
  }
}
function OrganizationComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2, "No organizations match your filter.");
    \u0275\u0275elementEnd()();
  }
}
var OrganizationComponent = class _OrganizationComponent {
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
    this.searchQuery = signal("");
    this.page = signal(1);
    this.pageSize = 5;
    this.filtered = computed(() => {
      const q = this.searchQuery().trim().toLowerCase();
      if (!q)
        return this.items();
      return this.items().filter((o) => o.code.toLowerCase().includes(q) || o.name.toLowerCase().includes(q) || (o.country ?? "").toLowerCase().includes(q));
    });
    this.paged = computed(() => this.filtered().slice((this.page() - 1) * this.pageSize, this.page() * this.pageSize));
    this.form = this.fb.group({
      code: ["", Validators.required],
      name: ["", Validators.required],
      country: [""],
      address: [""],
      status: ["ACTIVE"]
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
      this.form.reset({ status: "ACTIVE" });
      this.editingId.set(null);
    }
  }
  edit(o) {
    this.editingId.set(o.id);
    this.showForm.set(true);
    this.form.patchValue({ code: o.code, name: o.name, country: o.country ?? "", address: o.address ?? "", status: o.status });
  }
  save() {
    if (this.form.invalid) {
      this.toast.error("Code and name are required.");
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
  remove(o) {
    return __async(this, null, function* () {
      if (!(yield this.confirm.confirm({ message: `Delete organization "${o.name}"? This cannot be undone.`, danger: true, confirmLabel: "Delete" })))
        return;
      this.service.delete(o.id).subscribe({
        next: () => {
          this.toast.success("Deleted.");
          this.load();
        },
        error: () => {
        }
      });
    });
  }
  static {
    this.\u0275fac = function OrganizationComponent_Factory(t) {
      return new (t || _OrganizationComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(OrganizationService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ConfirmDialogService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrganizationComponent, selectors: [["vx-organization"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 9, consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "flex-wrap", "gap-2"], [1, "fw-bold", "mb-0", 2, "color", "#0f172a"], [2, "color", "#64748b"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-plus-lg", "me-1"], [1, "vx-card", "p-3", "mb-3"], [1, "d-flex", "gap-2", "mb-2", "align-items-center", "flex-wrap"], [1, "position-relative", 2, "width", "260px", "max-width", "100%"], [1, "bi", "bi-search", "position-absolute", 2, "left", ".7rem", "top", "50%", "transform", "translateY(-50%)", "color", "#94a3b8", "font-size", ".8rem"], ["type", "text", "placeholder", "Filter by code, name, country\u2026", 1, "form-control", "form-control-sm", 2, "padding-left", "2rem", "border-radius", "10px", 3, "ngModelChange", "ngModel"], [1, "small", 2, "color", "#94a3b8"], [1, "vx-card", "p-0", "overflow-auto"], [1, "table", "vx-table", "table-hover", "align-middle", "mb-0"], [1, "text-end"], [3, "pageChange", "totalItems", "pageSize", "currentPage"], [1, "row", "g-2", 3, "ngSubmit", "formGroup"], [1, "col-md-2"], ["formControlName", "code", "placeholder", "Code *", 1, "form-control", "form-control-sm"], [3, "control"], [1, "col-md-4"], ["formControlName", "name", "placeholder", "Name *", 1, "form-control", "form-control-sm"], ["formControlName", "country", "placeholder", "Country", 1, "form-control", "form-control-sm"], [1, "col-md-3"], ["formControlName", "address", "placeholder", "Address", 1, "form-control", "form-control-sm"], [1, "col-md-1"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "w-100", 3, "disabled"], ["colspan", "5", 1, "text-center", "py-4", 2, "color", "#94a3b8"], [1, "spinner-border", "spinner-border-sm"], [1, "mono"], [1, "fw-semibold"], [3, "label", "status"], [1, "btn", "btn-sm", "btn-outline-secondary", "me-1", 3, "click"], [1, "bi", "bi-pencil"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash"]], template: function OrganizationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h5", 1);
        \u0275\u0275text(3, "Organizations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "small", 2);
        \u0275\u0275text(5, "Top-level legal entities \u2014 factories belong to one.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "button", 3);
        \u0275\u0275listener("click", function OrganizationComponent_Template_button_click_6_listener() {
          return ctx.toggleForm();
        });
        \u0275\u0275element(7, "i", 4);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, OrganizationComponent_Conditional_9_Template, 17, 7, "div", 5);
        \u0275\u0275elementStart(10, "div", 6)(11, "div", 7);
        \u0275\u0275element(12, "i", 8);
        \u0275\u0275elementStart(13, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function OrganizationComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function OrganizationComponent_Template_input_ngModelChange_13_listener() {
          return ctx.page.set(1);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "span", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 11)(17, "table", 12)(18, "thead")(19, "tr")(20, "th");
        \u0275\u0275text(21, "Code");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "th");
        \u0275\u0275text(23, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "th");
        \u0275\u0275text(25, "Country");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "th");
        \u0275\u0275text(27, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "th", 13);
        \u0275\u0275text(29, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "tbody");
        \u0275\u0275template(31, OrganizationComponent_Conditional_31_Template, 4, 0, "tr");
        \u0275\u0275repeaterCreate(32, OrganizationComponent_For_33_Template, 14, 5, "tr", null, _forTrack0);
        \u0275\u0275template(34, OrganizationComponent_Conditional_34_Template, 3, 0, "tr");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "vx-pagination", 14);
        \u0275\u0275listener("pageChange", function OrganizationComponent_Template_vx_pagination_pageChange_35_listener($event) {
          return ctx.page.set($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.showForm() ? "Cancel" : "New organization");
        \u0275\u0275advance();
        \u0275\u0275conditional(9, ctx.showForm() ? 9 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.filtered().length, " result(s)");
        \u0275\u0275advance(16);
        \u0275\u0275conditional(31, ctx.loading() ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.paged());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(34, !ctx.loading() && ctx.filtered().length === 0 ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("totalItems", ctx.filtered().length)("pageSize", ctx.pageSize)("currentPage", ctx.page());
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel, FieldErrorComponent, PaginationComponent, StatusBadgeComponent], styles: ["\n\n.mono[_ngcontent-%COMP%] {\n  font-family: ui-monospace, monospace;\n}\n/*# sourceMappingURL=organization.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrganizationComponent, { className: "OrganizationComponent", filePath: "src/app/pages/master-data/organization/organization.component.ts", lineNumber: 67 });
})();
export {
  OrganizationComponent
};
//# sourceMappingURL=chunk-XLLN7QXH.js.map
