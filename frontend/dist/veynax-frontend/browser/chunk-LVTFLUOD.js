import {
  AuthService
} from "./chunk-WUJLGHIB.js";
import {
  RouterLink
} from "./chunk-NGYPB4KR.js";
import {
  StatusBadgeComponent
} from "./chunk-YFSO6DQS.js";
import "./chunk-HGQUEZGA.js";
import "./chunk-OWZPG4BG.js";
import {
  MockDataService
} from "./chunk-4P265WU7.js";
import {
  CommonModule,
  computed,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleMapInterpolate1,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-UYLOIQ7B.js";

// src/app/pages/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.route;
var _forTrack2 = ($index, $item) => $item.message;
function DashboardComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 16)(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const k_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(k_r1.label);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", k_r1.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r1.sub);
  }
}
function DashboardComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "a", 20);
    \u0275\u0275element(2, "i", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", m_r2.route);
    \u0275\u0275advance();
    \u0275\u0275classMap("bi " + m_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r2.label, " ");
  }
}
function DashboardComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "span", 22);
    \u0275\u0275elementStart(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "vx-status-badge", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleMapInterpolate1("width:8px;height:8px;background:", a_r3.severity === "CRITICAL" ? "#dc2626" : a_r3.severity === "HIGH" ? "#d97706" : "#2563eb", ";");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.message);
    \u0275\u0275advance();
    \u0275\u0275property("label", a_r3.severity)("status", a_r3.severity);
  }
}
var ROLE_VIEWS = {
  SUPER_ADMIN: {
    title: "Executive Dashboard",
    subtitle: "Cross-factory overview \u2014 production, quality, finance, and supplier performance.",
    kpis: [
      { label: "Vehicles Built YTD", value: "1,247", sub: "+8.2% vs target", color: "#2563eb" },
      { label: "Revenue (booked)", value: "$48.2M", sub: "orders confirmed", color: "#0d9488" },
      { label: "First Pass Yield", value: "96.4%", sub: "target \u2265 95%", color: "#059669" },
      { label: "Pending Approvals", value: "6", sub: "3 HIGH priority", color: "#dc2626" }
    ],
    shortcuts: [
      { label: "Reports & Analytics", route: "/reports", icon: "bi-graph-up" },
      { label: "Approval Queues", route: "/approval-queues", icon: "bi-check2-square" },
      { label: "VIN Traceability", route: "/vin-traceability", icon: "bi-fingerprint" },
      { label: "Finished Vehicle Yard", route: "/finished-vehicles", icon: "bi-geo-alt" }
    ],
    alerts: [
      { message: "Quality hold on VIN \u2026A00044 \u2014 dispatch blocked", severity: "CRITICAL" },
      { message: "Material shortage: BAT-4500 net 30 short", severity: "HIGH" },
      { message: "Press-2500T breakdown \u2014 maintenance MO pending approval", severity: "HIGH" },
      { message: "PO-2026-004 awaiting approval ($180k)", severity: "MEDIUM" }
    ]
  },
  MANAGER: {
    title: "Factory Manager Dashboard",
    subtitle: "Plant operations \u2014 production, quality, material, and workforce.",
    kpis: [
      { label: "Open Work Orders", value: "4", sub: "2 in progress", color: "#2563eb" },
      { label: "OEE (Line A)", value: "78.2%", sub: "downtime 42 min today", color: "#0d9488" },
      { label: "Open Defects", value: "2", sub: "1 critical", color: "#dc2626" },
      { label: "Material Shortages", value: "3", sub: "blocking 1 WO", color: "#d97706" }
    ],
    shortcuts: [
      { label: "Production / MES", route: "/production", icon: "bi-clipboard-check" },
      { label: "Quality / NCR", route: "/quality", icon: "bi-shield-check" },
      { label: "Inventory / MRP", route: "/inventory", icon: "bi-box-seam" },
      { label: "Maintenance", route: "/maintenance", icon: "bi-tools" }
    ],
    alerts: [
      { message: "WO-2026-008 at 84/120 \u2014 on takt", severity: "LOW" },
      { message: "Material shortage: BAT-4500 net 30 short", severity: "HIGH" },
      { message: "Press-2500T breakdown reported", severity: "HIGH" }
    ]
  },
  VIEWER: {
    title: "Read-Only Overview",
    subtitle: "View access \u2014 no create/edit/approve actions available.",
    kpis: [
      { label: "Vehicles Built YTD", value: "1,247", sub: "across plants", color: "#2563eb" },
      { label: "First Pass Yield", value: "96.4%", sub: "rolling 30d", color: "#059669" },
      { label: "OEE (Line A)", value: "78.2%", sub: "this week", color: "#0d9488" },
      { label: "Finished Vehicles", value: "5", sub: "in yard", color: "#64748b" }
    ],
    shortcuts: [
      { label: "VIN Traceability", route: "/vin-traceability", icon: "bi-fingerprint" },
      { label: "Reports", route: "/reports", icon: "bi-graph-up" },
      { label: "Finished Vehicle Yard", route: "/finished-vehicles", icon: "bi-geo-alt" }
    ],
    alerts: [
      { message: "You have read-only access. Contact an admin for write permissions.", severity: "MEDIUM" }
    ]
  }
};
var DashboardComponent = class _DashboardComponent {
  constructor(auth, mock) {
    this.auth = auth;
    this.mock = mock;
    this.role = computed(() => this.auth.currentUser()?.role ?? "VIEWER");
    this.view = computed(() => ROLE_VIEWS[this.role()] ?? ROLE_VIEWS["VIEWER"]);
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MockDataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["vx-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 4, consts: [[1, "fw-bold", "mb-1", 2, "color", "#0f172a"], [1, "badge", "ms-2", 2, "background", "rgba(37,99,235,.1)", "color", "#2563eb"], [1, "mb-4", 2, "color", "#64748b", "font-size", ".9rem"], [1, "row", "g-3", "mb-4"], [1, "col-6", "col-md-3"], [1, "row", "g-3"], [1, "col-12", "col-md-7"], [1, "vx-card", "p-4"], [1, "fw-bold", "mb-3", 2, "color", "#0f172a"], [1, "row", "g-2", "small"], [1, "col-6"], [1, "col-12", "col-md-5"], [1, "d-flex", "align-items-center", "gap-2", "mb-2", "small"], [1, "vx-card", "p-3", "mt-3", "text-center", 2, "background", "linear-gradient(135deg,#2563eb,#0d9488)", "color", "#fff", "border", "none"], ["routerLink", "/vin-traceability", 1, "btn", "btn-light", "btn-sm", "fw-bold", 2, "color", "#2563eb"], [1, "bi", "bi-arrow-right", "ms-1"], [1, "vx-card", "p-3"], [1, "text-uppercase", 2, "color", "#64748b", "font-size", ".7rem", "font-weight", "600"], [1, "display-6", "fw-bold"], [1, "small", 2, "color", "#94a3b8"], [1, "d-flex", "align-items-center", "gap-2", "p-2", "rounded", 2, "background", "#f8fafc", "color", "#334155", "text-decoration", "none", "border", "1px solid #e2e8f0", 3, "routerLink"], [2, "color", "#2563eb"], [1, "rounded-circle", "flex-shrink-0"], [1, "flex-grow-1", 2, "color", "#334155"], [3, "label", "status"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h4", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementStart(2, "span", 1);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 3);
        \u0275\u0275repeaterCreate(7, DashboardComponent_For_8_Template, 8, 5, "div", 4, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "h6", 8);
        \u0275\u0275text(13, "Quick actions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 9);
        \u0275\u0275repeaterCreate(15, DashboardComponent_For_16_Template, 4, 4, "div", 10, _forTrack1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 11)(18, "div", 7)(19, "h6", 8);
        \u0275\u0275text(20, "Live alerts");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(21, DashboardComponent_For_22_Template, 5, 6, "div", 12, _forTrack2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 13)(24, "a", 14);
        \u0275\u0275text(25, "Open VIN genealogy ");
        \u0275\u0275element(26, "i", 15);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("", ctx.view().title, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.role());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", ctx.view().subtitle, " \xB7 Welcome, ", (tmp_2_0 = ctx.auth.currentUser()) == null ? null : tmp_2_0.fullName, "");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.view().kpis);
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.view().shortcuts);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.view().alerts);
      }
    }, dependencies: [CommonModule, RouterLink, StatusBadgeComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/pages/dashboard/dashboard.component.ts", lineNumber: 123 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-LVTFLUOD.js.map
