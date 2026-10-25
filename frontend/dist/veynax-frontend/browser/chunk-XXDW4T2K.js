import {
  AuthService
} from "./chunk-WUJLGHIB.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-NGYPB4KR.js";
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
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-O3LMM4DO.js";
import {
  MockDataService
} from "./chunk-4P265WU7.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMapInterpolate1,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UYLOIQ7B.js";

// src/app/shared/components/global-search/global-search.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function GlobalSearchComponent_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("mousedown", function GlobalSearchComponent_Conditional_4_For_2_Template_button_mousedown_0_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.go(r_r2));
    });
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.kind);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.label);
  }
}
function GlobalSearchComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, GlobalSearchComponent_Conditional_4_For_2_Template, 5, 2, "button", 6, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.results());
  }
}
function GlobalSearchComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("No matches for \u201C", ctx_r2.query(), "\u201D");
  }
}
var GlobalSearchComponent = class _GlobalSearchComponent {
  constructor(mock, router) {
    this.mock = mock;
    this.router = router;
    this.query = signal("");
    this.open = signal(false);
    this.results = signal([]);
  }
  onChange() {
    const q = this.query().trim().toLowerCase();
    if (!q) {
      this.results.set([]);
      return;
    }
    const r = [];
    this.mock.vins.filter((v) => v.vin.toLowerCase().includes(q) || v.model.toLowerCase().includes(q)).forEach((v) => r.push({ kind: "VIN", id: v.vin, label: v.vin + " \xB7 " + v.model, route: "/vin-traceability" }));
    this.mock.parts.filter((p) => p.code.toLowerCase().includes(q) || p.name.toLowerCase().includes(q)).forEach((p) => r.push({ kind: "Part", id: p.code, label: p.code + " \xB7 " + p.name, route: "/engineering" }));
    this.mock.workOrders.filter((w) => w.id.toLowerCase().includes(q)).forEach((w) => r.push({ kind: "Work Order", id: w.id, label: w.id + " \xB7 " + w.model, route: "/production" }));
    this.mock.suppliers.filter((s) => s.company.toLowerCase().includes(q) || String(s.code).toLowerCase().includes(q)).forEach((s) => r.push({ kind: "Supplier", id: String(s.code), label: s.code + " \xB7 " + s.company, route: "/supply-chain" }));
    this.mock.employees.filter((e) => e.name.toLowerCase().includes(q)).forEach((e) => r.push({ kind: "Employee", id: String(e.id), label: e.name + " \xB7 " + e.role, route: "/workforce" }));
    this.results.set(r.slice(0, 10));
  }
  onBlur() {
    setTimeout(() => this.open.set(false), 150);
  }
  go(r) {
    this.open.set(false);
    this.query.set("");
    this.results.set([]);
    this.router.navigateByUrl(r.route);
  }
  static {
    this.\u0275fac = function GlobalSearchComponent_Factory(t) {
      return new (t || _GlobalSearchComponent)(\u0275\u0275directiveInject(MockDataService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GlobalSearchComponent, selectors: [["vx-global-search"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 3, consts: [[1, "position-relative", 2, "width", "240px", "max-width", "40vw"], [1, "position-relative"], [1, "bi", "bi-search", "position-absolute", 2, "left", ".7rem", "top", "50%", "transform", "translateY(-50%)", "color", "#94a3b8", "font-size", ".8rem"], ["type", "text", "placeholder", "Search VIN, part, WO\u2026", 1, "form-control", "form-control-sm", 2, "padding-left", "2rem", "border-radius", "10px", 3, "ngModelChange", "blur", "focus", "ngModel"], [1, "position-absolute", "bg-white", "rounded-xl", "shadow-lg", "border", "mt-1", "p-2", "w-100", 2, "z-index", "1050", "max-height", "320px", "overflow", "auto"], [1, "position-absolute", "bg-white", "rounded-xl", "shadow-lg", "border", "mt-1", "p-3", "w-100", "text-center", "small", 2, "z-index", "1050", "color", "#94a3b8"], [1, "d-flex", "align-items-center", "gap-2", "w-100", "text-start", "px-2", "py-1.5", "rounded", "border-0", "bg-transparent", "small", 2, "cursor", "pointer"], [1, "d-flex", "align-items-center", "gap-2", "w-100", "text-start", "px-2", "py-1.5", "rounded", "border-0", "bg-transparent", "small", 2, "cursor", "pointer", 3, "mousedown"], [1, "badge", 2, "background", "#f1f5f9", "color", "#64748b", "font-size", ".6rem"], [1, "mono", "flex-grow-1", 2, "color", "#0f172a"]], template: function GlobalSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "i", 2);
        \u0275\u0275elementStart(3, "input", 3);
        \u0275\u0275twoWayListener("ngModelChange", function GlobalSearchComponent_Template_input_ngModelChange_3_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.query, $event) || (ctx.query = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function GlobalSearchComponent_Template_input_ngModelChange_3_listener() {
          return ctx.onChange();
        })("blur", function GlobalSearchComponent_Template_input_blur_3_listener() {
          return ctx.onBlur();
        })("focus", function GlobalSearchComponent_Template_input_focus_3_listener() {
          return ctx.open.set(true);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, GlobalSearchComponent_Conditional_4_Template, 3, 0, "div", 4)(5, GlobalSearchComponent_Conditional_5_Template, 2, 1, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.query);
        \u0275\u0275advance();
        \u0275\u0275conditional(4, ctx.open() && ctx.results().length ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(5, ctx.open() && ctx.query() && !ctx.results().length ? 5 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.mono[_ngcontent-%COMP%] {\n  font-family: ui-monospace, monospace;\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=global-search.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GlobalSearchComponent, { className: "GlobalSearchComponent", filePath: "src/app/shared/components/global-search/global-search.component.ts", lineNumber: 38 });
})();

// src/app/shared/components/notification-bell/notification-bell.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function NotificationBellComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.unread());
  }
}
function NotificationBellComponent_Conditional_4_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "span", 10);
    \u0275\u0275elementStart(2, "div", 11)(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const n_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("opacity", n_r3.read ? 0.5 : 1);
    \u0275\u0275advance();
    \u0275\u0275styleMapInterpolate1("width:8px;height:8px;background:", ctx_r0.sevColor[n_r3.severity], ";");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r3.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", n_r3.severity, " \xB7 ", n_r3.time, "");
  }
}
function NotificationBellComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "strong", 6);
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 7);
    \u0275\u0275listener("click", function NotificationBellComponent_Conditional_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.markAllRead());
    });
    \u0275\u0275text(5, "Mark all read");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, NotificationBellComponent_Conditional_4_For_7_Template, 7, 8, "div", 8, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.notifications);
  }
}
var SEV_COLOR = { CRITICAL: "#dc2626", HIGH: "#d97706", MEDIUM: "#2563eb", LOW: "#64748b" };
var NotificationBellComponent = class _NotificationBellComponent {
  constructor() {
    this.sevColor = SEV_COLOR;
    this.open = signal(false);
    this.notifications = [
      { id: "N1", severity: "CRITICAL", message: "Quality hold on VIN \u2026A00044 \u2014 cannot dispatch", link: "/vin-traceability", time: "2 min ago", read: false },
      { id: "N2", severity: "HIGH", message: "Material shortage: BAT-4500 net 30 short", link: "/inventory", time: "18 min ago", read: false },
      { id: "N3", severity: "HIGH", message: "Machine Press-2500T breakdown reported", link: "/maintenance", time: "1 hr ago", read: false },
      { id: "N4", severity: "MEDIUM", message: "PO-2026-004 awaiting approval", link: "/supply-chain", time: "3 hr ago", read: true },
      { id: "N5", severity: "LOW", message: "WO-2026-008 completed on Line-A", link: "/production", time: "Yesterday", read: true }
    ];
    this.unread = signal(this.notifications.filter((n) => !n.read).length);
  }
  markAllRead() {
    this.notifications.forEach((n) => n.read = true);
    this.unread.set(0);
  }
  static {
    this.\u0275fac = function NotificationBellComponent_Factory(t) {
      return new (t || _NotificationBellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationBellComponent, selectors: [["vx-notification-bell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 2, consts: [[1, "position-relative"], [1, "btn", "btn-sm", "btn-outline-secondary", "position-relative", 2, "border-radius", "10px", 3, "click"], [1, "bi", "bi-bell"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", 2, "background", "#dc2626", "font-size", ".6rem"], [1, "position-absolute", "bg-white", "rounded-xl", "shadow-lg", "border", "p-0", "mt-2", 2, "right", "0", "width", "320px", "z-index", "1050", "max-height", "380px", "overflow", "auto"], [1, "px-3", "py-2", "border-bottom", "d-flex", "justify-content-between", "align-items-center"], [1, "small"], [1, "btn", "btn-link", "btn-sm", "p-0", 2, "font-size", ".75rem", 3, "click"], [1, "px-3", "py-2", "border-bottom", "small", "d-flex", "gap-2", 3, "opacity"], [1, "px-3", "py-2", "border-bottom", "small", "d-flex", "gap-2"], [1, "mt-1", "flex-shrink-0", "rounded-circle"], [1, "flex-grow-1"], [2, "color", "#0f172a"], [2, "color", "#94a3b8", "font-size", ".68rem"]], template: function NotificationBellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function NotificationBellComponent_Template_button_click_1_listener() {
          return ctx.open.set(!ctx.open());
        });
        \u0275\u0275element(2, "i", 2);
        \u0275\u0275template(3, NotificationBellComponent_Conditional_3_Template, 2, 1, "span", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, NotificationBellComponent_Conditional_4_Template, 8, 0, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.unread() > 0 ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(4, ctx.open() ? 4 : -1);
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationBellComponent, { className: "NotificationBellComponent", filePath: "src/app/shared/components/notification-bell/notification-bell.component.ts", lineNumber: 41 });
})();

// src/app/shared/components/demo-banner/demo-banner.component.ts
var DemoBannerComponent = class _DemoBannerComponent {
  static {
    this.\u0275fac = function DemoBannerComponent_Factory(t) {
      return new (t || _DemoBannerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DemoBannerComponent, selectors: [["vx-demo-banner"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [[2, "background", "linear-gradient(90deg,#d97706,#b45309)", "color", "#fff", "text-align", "center", "font-size", ".72rem", "padding", ".3rem 1rem", "font-weight", "600", "letter-spacing", ".03em"]], template: function DemoBannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "DEMO DATA \u2014 static in-memory mock, not connected to a backend. Transactions do not persist.");
        \u0275\u0275elementEnd();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DemoBannerComponent, { className: "DemoBannerComponent", filePath: "src/app/shared/components/demo-banner/demo-banner.component.ts", lineNumber: 8 });
})();

// src/app/shared/components/confirm-dialog/confirm-dialog.component.ts
function ConfirmDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ConfirmDialogComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.svc.close(false));
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function ConfirmDialogComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "span", 4);
    \u0275\u0275element(4, "i", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6)(6, "h6", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 9)(11, "button", 10);
    \u0275\u0275listener("click", function ConfirmDialogComponent_Conditional_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.svc.close(false));
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 11);
    \u0275\u0275listener("click", function ConfirmDialogComponent_Conditional_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.svc.close(true));
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r1.svc.state().title);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.svc.state().title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.svc.state().message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.svc.state().cancelLabel);
    \u0275\u0275advance();
    \u0275\u0275classProp("btn-danger", ctx_r1.svc.state().danger)("btn-primary", !ctx_r1.svc.state().danger);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.svc.state().confirmLabel);
  }
}
var ConfirmDialogComponent = class _ConfirmDialogComponent {
  constructor(svc) {
    this.svc = svc;
  }
  static {
    this.\u0275fac = function ConfirmDialogComponent_Factory(t) {
      return new (t || _ConfirmDialogComponent)(\u0275\u0275directiveInject(ConfirmDialogService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["vx-confirm-dialog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["role", "dialog", "aria-modal", "true", 1, "d-flex", "align-items-center", "justify-content-center", 2, "position", "fixed", "inset", "0", "background", "rgba(15,23,42,.45)", "z-index", "2000", "padding", "1rem"], ["role", "dialog", "aria-modal", "true", 1, "d-flex", "align-items-center", "justify-content-center", 2, "position", "fixed", "inset", "0", "background", "rgba(15,23,42,.45)", "z-index", "2000", "padding", "1rem", 3, "click"], [1, "vx-card", "p-4", 2, "width", "100%", "max-width", "420px", 3, "click"], [1, "d-flex", "align-items-start", "gap-3", "mb-3"], [1, "d-inline-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "40px", "height", "40px", "border-radius", "12px", "background", "rgba(220,38,38,.1)", "color", "#dc2626"], [1, "bi", "bi-exclamation-triangle-fill"], [1, "flex-grow-1"], [1, "fw-bold", "mb-1", 2, "color", "#0f172a"], [1, "mb-0", "small", 2, "color", "#64748b"], [1, "d-flex", "justify-content-end", "gap-2"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "btn", "btn-sm", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ConfirmDialogComponent_Conditional_0_Template, 15, 9, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.svc.state().open ? 0 : -1);
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "src/app/shared/components/confirm-dialog/confirm-dialog.component.ts", lineNumber: 34 });
})();

// src/app/layouts/admin-layout/admin-layout.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function AdminLayoutComponent_For_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63)(2, "span", 64);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 65);
    \u0275\u0275listener("click", function AdminLayoutComponent_For_99_Template_button_click_4_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toast.dismiss(t_r2.id));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275styleMapInterpolate1("background:#ffffff;color:#0f172a;border-left:4px solid ", t_r2.type === "success" ? "#059669" : t_r2.type === "error" ? "#dc2626" : "#2563eb", ";box-shadow:0 10px 30px -10px rgba(15,23,42,.2);");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2.message);
  }
}
var AdminLayoutComponent = class _AdminLayoutComponent {
  constructor(auth, toast) {
    this.auth = auth;
    this.toast = toast;
  }
  static {
    this.\u0275fac = function AdminLayoutComponent_Factory(t) {
      return new (t || _AdminLayoutComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["vx-admin-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 100, vars: 2, consts: [[1, "d-flex", 2, "min-height", "100vh", "background", "#f4f6fb"], [1, "d-none", "d-md-flex", "flex-column", "p-3", 2, "width", "248px", "background", "#ffffff", "border-right", "1px solid #e2e8f0"], [1, "d-flex", "align-items-center", "gap-2", "mb-4", "px-2"], [1, "d-inline-flex", "align-items-center", "justify-content-center", 2, "width", "38px", "height", "38px", "border-radius", "11px", "background", "linear-gradient(135deg,#2563eb,#0d9488)", "color", "#fff"], [1, "bi", "bi-lightning-charge-fill"], [1, "fw-bold", 2, "color", "#0f172a", "font-size", ".95rem"], [2, "color", "#64748b", "font-size", ".68rem"], [1, "nav", "flex-column", "gap-1", 2, "font-size", ".85rem"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-link", "rounded", "px-2", "py-2", 2, "color", "#334155"], [1, "bi", "bi-grid-1x2", "me-2"], [1, "text-uppercase", "px-2", "mt-3", "mb-1", 2, "color", "#94a3b8", "font-size", ".62rem", "letter-spacing", ".12em", "font-weight", "700"], ["routerLink", "/master-data/organizations", "routerLinkActive", "active", 1, "nav-link", "rounded", "px-2", "py-2", 2, "color", "#334155"], [1, "bi", "bi-building", "me-2"], ["routerLink", "/master-data/factories", "routerLinkActive", "active", 1, "nav-link", "rounded", "px-2", "py-2", 2, "color", "#334155"], [1, "bi", "bi-houses", "me-2"], ["routerLink", "/master-data/vehicle-models", "routerLinkActive", "active", 1, "nav-link", "rounded", "px-2", "py-2", 2, "color", "#334155"], [1, "bi", "bi-car-front", "me-2"], ["routerLink", "/vehicle-config", "routerLinkActive", "active", 1, "nav-link", "rounded", "px-2", "py-2", 2, "color", "#334155"], [1, "bi", "bi-sliders", "me-2"], ["routerLink", "/engineering", "routerLinkActive", "active", 1, "nav-link", "rounded", "px-2", "py-2", 2, "color", "#334155"], [1, "bi", "bi-diagram-3", "me-2"], ["routerLink", "/supply-chain", "routerLinkActive", "active", 1, "nav-link", "rounded", "px-2", "py-2", 2, "color", "#334155"], [1, "bi", "bi-truck", "me-2"], ["routerLink", "/inventory", "routerLinkActive", "active", 1, "nav-link", "rounded", "px-2", "py-2", 2, "color", "#334155"], [1, "bi", "bi-box-seam", "me-2"], ["routerLink", "/production", "routerLinkActive", "active", 1, "nav-link", "rounded", "px-2", "py-2", 2, "color", "#334155"], [1, "bi", "bi-clipboard-check", "me-2"], ["routerLink", "/scheduling", "routerLinkActive", "active", 1, "nav-link", "rounded", "px-2", "py-2", 2, "color", "#334155"], [1, "bi", "bi-calendar3", "me-2"], ["routerLink", "/quality", "routerLinkActive", "active", 1, "nav-link", "rounded", "px-2", "py-2", 2, "color", "#334155"], [1, "bi", "bi-shield-check", "me-2"], ["routerLink", "/vin-traceability", "routerLinkActive", "active", 1, "nav-link", "rounded", "px-2", "py-2", 2, "color", "#334155"], [1, "bi", "bi-fingerprint", "me-2"], ["routerLink", "/sales-payments", "routerLinkActive", "active", 1, "nav-link", "rounded", "px-2", "py-2", 2, "color", "#334155"], [1, "bi", "bi-credit-card", "me-2"], ["routerLink", "/finished-vehicles", "routerLinkActive", "active", 1, "nav-link", "rounded", "px-2", "py-2", 2, "color", "#334155"], [1, "bi", "bi-geo-alt", "me-2"], ["routerLink", "/approval-queues", "routerLinkActive", "active", 1, "nav-link", "rounded", "px-2", "py-2", 2, "color", "#334155"], [1, "bi", "bi-check2-square", "me-2"], ["routerLink", "/workforce", "routerLinkActive", "active", 1, "nav-link", "rounded", "px-2", "py-2", 2, "color", "#334155"], [1, "bi", "bi-people", "me-2"], ["routerLink", "/maintenance", "routerLinkActive", "active", 1, "nav-link", "rounded", "px-2", "py-2", 2, "color", "#334155"], [1, "bi", "bi-tools", "me-2"], ["routerLink", "/safety", "routerLinkActive", "active", 1, "nav-link", "rounded", "px-2", "py-2", 2, "color", "#334155"], [1, "bi", "bi-shield-exclamation", "me-2"], ["routerLink", "/reports", "routerLinkActive", "active", 1, "nav-link", "rounded", "px-2", "py-2", 2, "color", "#334155"], [1, "bi", "bi-graph-up", "me-2"], ["routerLink", "/audit-log", "routerLinkActive", "active", 1, "nav-link", "rounded", "px-2", "py-2", 2, "color", "#334155"], [1, "bi", "bi-journal-text", "me-2"], [1, "mt-auto", "px-2", 2, "color", "#94a3b8", "font-size", ".65rem"], [1, "flex-grow-1", "d-flex", "flex-column", 2, "min-width", "0"], [1, "navbar", "px-3", "py-2", 2, "background", "#ffffff", "border-bottom", "1px solid #e2e8f0"], [1, "navbar-brand", "mb-0", "h6", "small", "fw-bold", "d-md-none", 2, "color", "#0f172a"], [1, "ms-auto", "d-flex", "align-items-center", "gap-2"], [1, "d-none", "d-md-block"], [1, "small", "d-none", "d-sm-inline", 2, "color", "#64748b"], [1, "bi", "bi-person-circle", "me-1"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-box-arrow-right", "me-1"], [1, "p-3", "p-md-4", "flex-grow-1"], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3", 2, "z-index", "1080"], ["role", "alert", 1, "toast", "show", 3, "style"], ["role", "alert", 1, "toast", "show"], [1, "toast-body", "d-flex", "justify-content-between", "align-items-center"], [1, "small"], [1, "btn-close", "ms-2", 3, "click"]], template: function AdminLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "div", 5);
        \u0275\u0275text(7, "VeynaX AMMS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6);
        \u0275\u0275text(9, "v0.3.0 \xB7 Modern UI");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "nav", 7)(11, "a", 8);
        \u0275\u0275element(12, "i", 9);
        \u0275\u0275text(13, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10);
        \u0275\u0275text(15, "Master Data");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "a", 11);
        \u0275\u0275element(17, "i", 12);
        \u0275\u0275text(18, "Organizations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "a", 13);
        \u0275\u0275element(20, "i", 14);
        \u0275\u0275text(21, "Factories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "a", 15);
        \u0275\u0275element(23, "i", 16);
        \u0275\u0275text(24, "Vehicle Models");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "a", 17);
        \u0275\u0275element(26, "i", 18);
        \u0275\u0275text(27, "Variants / Config");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 10);
        \u0275\u0275text(29, "Operations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "a", 19);
        \u0275\u0275element(31, "i", 20);
        \u0275\u0275text(32, "Engineering / BOM");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "a", 21);
        \u0275\u0275element(34, "i", 22);
        \u0275\u0275text(35, "Supply Chain");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "a", 23);
        \u0275\u0275element(37, "i", 24);
        \u0275\u0275text(38, "Inventory / MRP");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "a", 25);
        \u0275\u0275element(40, "i", 26);
        \u0275\u0275text(41, "Production / MES");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "a", 27);
        \u0275\u0275element(43, "i", 28);
        \u0275\u0275text(44, "Scheduling Board");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "a", 29);
        \u0275\u0275element(46, "i", 30);
        \u0275\u0275text(47, "Quality / NCR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "a", 31);
        \u0275\u0275element(49, "i", 32);
        \u0275\u0275text(50, "VIN Traceability");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 10);
        \u0275\u0275text(52, "Commercial & Support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "a", 33);
        \u0275\u0275element(54, "i", 34);
        \u0275\u0275text(55, "Sales & Payments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "a", 35);
        \u0275\u0275element(57, "i", 36);
        \u0275\u0275text(58, "Finished Vehicle Yard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "a", 37);
        \u0275\u0275element(60, "i", 38);
        \u0275\u0275text(61, "Approval Queues");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "a", 39);
        \u0275\u0275element(63, "i", 40);
        \u0275\u0275text(64, "Workforce");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "a", 41);
        \u0275\u0275element(66, "i", 42);
        \u0275\u0275text(67, "Maintenance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "a", 43);
        \u0275\u0275element(69, "i", 44);
        \u0275\u0275text(70, "Health & Safety");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "a", 45);
        \u0275\u0275element(72, "i", 46);
        \u0275\u0275text(73, "Reports");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "a", 47);
        \u0275\u0275element(75, "i", 48);
        \u0275\u0275text(76, "Audit Log");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 49);
        \u0275\u0275text(78, "One factory \xB7 one digital thread");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 50);
        \u0275\u0275element(80, "vx-demo-banner");
        \u0275\u0275elementStart(81, "nav", 51)(82, "span", 52);
        \u0275\u0275text(83, "VeynaX AMMS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div", 53)(85, "div", 54);
        \u0275\u0275element(86, "vx-global-search");
        \u0275\u0275elementEnd();
        \u0275\u0275element(87, "vx-notification-bell");
        \u0275\u0275elementStart(88, "span", 55);
        \u0275\u0275element(89, "i", 56);
        \u0275\u0275text(90);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "button", 57);
        \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_91_listener() {
          return ctx.auth.logout();
        });
        \u0275\u0275element(92, "i", 58);
        \u0275\u0275text(93, "Logout");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(94, "main", 59);
        \u0275\u0275element(95, "router-outlet");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(96, "vx-confirm-dialog");
        \u0275\u0275elementStart(97, "div", 60);
        \u0275\u0275repeaterCreate(98, AdminLayoutComponent_For_99_Template, 5, 4, "div", 61, _forTrack03);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(90);
        \u0275\u0275textInterpolate2("", (tmp_0_0 = ctx.auth.currentUser()) == null ? null : tmp_0_0.fullName, " \xB7 ", (tmp_0_0 = ctx.auth.currentUser()) == null ? null : tmp_0_0.role, "");
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.toast.toasts());
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, GlobalSearchComponent, NotificationBellComponent, DemoBannerComponent, ConfirmDialogComponent], styles: ["\n\n.nav-link.active[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.08);\n  color: #2563eb !important;\n  font-weight: 600;\n}\n.nav-link[_ngcontent-%COMP%]:hover:not(.disabled) {\n  background: #f1f5f9;\n  color: #0f172a !important;\n}\n/*# sourceMappingURL=admin-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src/app/layouts/admin-layout/admin-layout.component.ts", lineNumber: 89 });
})();
export {
  AdminLayoutComponent
};
//# sourceMappingURL=chunk-XXDW4T2K.js.map
