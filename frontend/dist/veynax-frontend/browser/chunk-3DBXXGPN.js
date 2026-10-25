import {
  MockDataService
} from "./chunk-4P265WU7.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UYLOIQ7B.js";

// src/app/pages/reports/reports.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.partCode;
function ReportsComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 17)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 19);
    \u0275\u0275element(7, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", row_r1.value / ctx_r1.totalWO * 100, "%")("background", row_r1.color);
  }
}
function ReportsComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 17)(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 19);
    \u0275\u0275element(7, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r3.partCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("short ", m_r3.shortage, "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", m_r3.shortage / m_r3.required * 100, "%");
  }
}
var ReportsComponent = class _ReportsComponent {
  get woMix() {
    const list = this.mock.workOrders;
    return [
      { label: "In Progress", value: list.filter((w) => w.status === "IN_PROGRESS").length, color: "#c47046" },
      { label: "Completed", value: list.filter((w) => w.status === "COMPLETED").length, color: "#6fbf73" },
      { label: "Paused", value: list.filter((w) => w.status === "PAUSED").length, color: "#d4a84a" },
      { label: "Released", value: list.filter((w) => w.status === "RELEASED").length, color: "#7ba8b8" }
    ];
  }
  get totalWO() {
    return this.mock.workOrders.length || 1;
  }
  get shortageParts() {
    return this.mock.mrp.filter((x) => x.shortage > 0);
  }
  constructor(mock) {
    this.mock = mock;
    this.s = this.mock.stats();
  }
  static {
    this.\u0275fac = function ReportsComponent_Factory(t) {
      return new (t || _ReportsComponent)(\u0275\u0275directiveInject(MockDataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["vx-reports"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 4, consts: [[1, "fw-bold", "mb-1"], [1, "text-muted", "small", "mb-3"], [1, "row", "g-3", "mb-4"], [1, "col-6", "col-md-3"], [1, "vx-card", "p-3"], [1, "text-muted", "small", "text-uppercase"], [1, "display-6", "fw-bold", 2, "color", "#c47046"], [1, "small", "text-muted"], [1, "display-6", "fw-bold", 2, "color", "#6fbf73"], [1, "display-6", "fw-bold", 2, "color", "#7ba8b8"], [1, "display-6", "fw-bold", 2, "color", "#d4a84a"], [1, "row", "g-3"], [1, "col-12", "col-md-6"], [1, "vx-card", "p-4"], [1, "fw-bold", "mb-3"], [1, "mb-2"], [1, "small", "text-muted", "mt-3", "mb-0"], [1, "d-flex", "justify-content-between", "small", "mb-1"], [1, "mono"], [2, "height", "10px", "background", "rgba(255,255,255,.08)", "border-radius", "5px", "overflow", "hidden"], [2, "height", "100%"], [1, "mono", 2, "color", "#d46a5a"], [2, "height", "100%", "background", "linear-gradient(90deg,#d46a5a,#c47046)"]], template: function ReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5", 0);
        \u0275\u0275text(1, "Reports & Analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "p", 1);
        \u0275\u0275text(3, "Operational KPIs from static data. JasperReports PDF documents (invoices, contracts, quality) land in Phase 8.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5);
        \u0275\u0275text(8, "Vehicles Built");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7);
        \u0275\u0275text(12, "YTD");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 3)(14, "div", 4)(15, "div", 5);
        \u0275\u0275text(16, "First Pass Yield");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 8);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 7);
        \u0275\u0275text(20, "target \u2265 95%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 3)(22, "div", 4)(23, "div", 5);
        \u0275\u0275text(24, "OEE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 9);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 7);
        \u0275\u0275text(28, "Line-A");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 3)(30, "div", 4)(31, "div", 5);
        \u0275\u0275text(32, "Payments Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 10);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 7);
        \u0275\u0275text(36, "unverified");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "div", 11)(38, "div", 12)(39, "div", 13)(40, "h6", 14);
        \u0275\u0275text(41, "Work Order Status Mix");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(42, ReportsComponent_For_43_Template, 8, 6, "div", 15, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 12)(45, "div", 13)(46, "h6", 14);
        \u0275\u0275text(47, "MRP Shortage Exposure");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(48, ReportsComponent_For_49_Template, 8, 4, "div", 15, _forTrack1);
        \u0275\u0275elementStart(50, "p", 16);
        \u0275\u0275text(51, "Shortage parts block production release until PO receipts cover the gap.");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.s.vehiclesBuilt);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.s.firstPassYield, "%");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.s.oee, "%");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", (ctx.s.pendingPayments / 1e3).toFixed(0), "k");
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.woMix);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.shortageParts);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n/*# sourceMappingURL=reports.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "src/app/pages/reports/reports.component.ts", lineNumber: 48 });
})();
export {
  ReportsComponent
};
//# sourceMappingURL=chunk-3DBXXGPN.js.map
