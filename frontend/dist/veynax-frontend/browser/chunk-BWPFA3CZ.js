import {
  StatusBadgeComponent
} from "./chunk-YFSO6DQS.js";
import {
  MockDataService
} from "./chunk-4P265WU7.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4
} from "./chunk-UYLOIQ7B.js";

// src/app/pages/production/production.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ProductionComponent_Conditional_14_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 12);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.model);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.line);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.start);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.end);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", p_r1.status === "IN_PROGRESS" ? "rgba(196,112,70,.18)" : "rgba(123,168,184,.18)")("color", p_r1.status === "IN_PROGRESS" ? "#c47046" : "#7ba8b8");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r1.status);
  }
}
function ProductionComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 7)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Model");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 8);
    \u0275\u0275text(9, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Line");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Start");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "End");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, ProductionComponent_Conditional_14_For_20_Template, 16, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.mock.productionPlans);
  }
}
function ProductionComponent_Conditional_15_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 14)(14, "div", 15);
    \u0275\u0275element(15, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275element(17, "vx-status-badge", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const w_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(w_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(w_r3.model);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(w_r3.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(w_r3.completed);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", w_r3.rejected > 0 ? "#d46a5a" : "inherit");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r3.rejected);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(w_r3.line);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", w_r3.completed / w_r3.qty * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("label", w_r3.status);
  }
}
function ProductionComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 7)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Work Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Model");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 8);
    \u0275\u0275text(9, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 8);
    \u0275\u0275text(11, "Done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 8);
    \u0275\u0275text(13, "Rejected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Line");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, ProductionComponent_Conditional_15_For_22_Template, 18, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "p", 13);
    \u0275\u0275text(24, "Status transitions enforced backend: PLANNED \u2192 RELEASED \u2192 IN_PROGRESS \u2192 PAUSED \u2192 COMPLETED / CANCELLED. No arbitrary jumps.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r1.mock.workOrders);
  }
}
function ProductionComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 18)(2, "div")(3, "span", 19);
    \u0275\u0275text(4, "RUNNING");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 21);
    \u0275\u0275text(8, "Operator view \u2014 admin functions hidden");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 22)(10, "div", 23)(11, "div", 24)(12, "div", 25);
    \u0275\u0275text(13, "Model");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 26);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 23)(17, "div", 24)(18, "div", 25);
    \u0275\u0275text(19, "Operation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 26);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 23)(23, "div", 24)(24, "div", 25);
    \u0275\u0275text(25, "Target / Actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 27);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 23)(29, "div", 24)(30, "div", 25);
    \u0275\u0275text(31, "Takt time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 27);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 28)(35, "button", 29);
    \u0275\u0275element(36, "i", 30);
    \u0275\u0275text(37, "Start");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 31);
    \u0275\u0275element(39, "i", 32);
    \u0275\u0275text(40, "Pause");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 31);
    \u0275\u0275element(42, "i", 33);
    \u0275\u0275text(43, "Complete Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 31);
    \u0275\u0275element(45, "i", 34);
    \u0275\u0275text(46, "Report Defect");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 31);
    \u0275\u0275element(48, "i", 35);
    \u0275\u0275text(49, "Report Downtime");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "p", 36);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.sf.line, " \xB7 ", ctx_r1.sf.workOrder, "");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.sf.model);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.sf.operation);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.sf.actual, " / ", ctx_r1.sf.target, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.sf.taktMin, " min");
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate4("Reject: ", ctx_r1.sf.reject, " \xB7 Rework: ", ctx_r1.sf.rework, " \xB7 Operators: ", ctx_r1.sf.operators, " \xB7 Machine: ", ctx_r1.sf.machine, "");
  }
}
var ProductionComponent = class _ProductionComponent {
  constructor(mock) {
    this.mock = mock;
    this.tab = signal("plans");
  }
  get sf() {
    return this.mock.shopFloor;
  }
  woColor(s) {
    if (s === "COMPLETED")
      return { bg: "rgba(111,191,115,.18)", fg: "#6fbf73" };
    if (s === "IN_PROGRESS")
      return { bg: "rgba(196,112,70,.18)", fg: "#c47046" };
    if (s === "PAUSED")
      return { bg: "rgba(212,168,74,.18)", fg: "#d4a84a" };
    return { bg: "rgba(123,168,184,.18)", fg: "#7ba8b8" };
  }
  static {
    this.\u0275fac = function ProductionComponent_Factory(t) {
      return new (t || _ProductionComponent)(\u0275\u0275directiveInject(MockDataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductionComponent, selectors: [["vx-production"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 9, consts: [[1, "fw-bold", "mb-1"], [1, "text-muted", "small", "mb-3"], [1, "nav", "nav-pills", "gap-1", "mb-3"], [1, "nav-item"], [1, "nav-link", "btn-sm", 2, "color", "#e8e5df", 3, "click"], [1, "vx-card", "p-0", "overflow-auto"], [1, "vx-card", "p-4"], [1, "table", "vx-table", "table-hover", "mb-0"], [1, "text-end"], [1, "mono"], [1, "fw-semibold"], [1, "text-end", "mono"], [1, "badge"], [1, "small", "text-muted", "p-2", "mb-0"], [2, "min-width", "120px"], [2, "height", "8px", "background", "rgba(255,255,255,.08)", "border-radius", "4px", "overflow", "hidden"], [2, "height", "100%", "background", "linear-gradient(90deg,#c47046,#7ba8b8)"], [3, "label"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "flex-wrap", "gap-2"], [1, "badge", 2, "background", "rgba(111,191,115,.18)", "color", "#6fbf73"], [1, "ms-2"], [1, "text-muted", "small"], [1, "row", "g-3", "mb-3"], [1, "col-6", "col-md-3"], [1, "p-3", "rounded", 2, "background", "rgba(0,0,0,.2)", "border", "1px solid rgba(232,229,223,.12)"], [1, "text-muted", "small", "text-uppercase"], [1, "fw-bold"], [1, "fw-bold", "mono"], [1, "d-flex", "flex-wrap", "gap-2"], [1, "btn", "btn-primary", "btn-sm"], [1, "bi", "bi-play-fill", "me-1"], [1, "btn", "btn-outline-secondary", "btn-sm"], [1, "bi", "bi-pause-fill", "me-1"], [1, "bi", "bi-check-lg", "me-1"], [1, "bi", "bi-exclamation-triangle", "me-1"], [1, "bi", "bi-tools", "me-1"], [1, "small", "text-muted", "mt-3", "mb-0"]], template: function ProductionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5", 0);
        \u0275\u0275text(1, "Production & MES");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "p", 1);
        \u0275\u0275text(3, "Production planning, work orders, and shop-floor execution \u2014 Phase 4 (static data).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "ul", 2)(5, "li", 3)(6, "button", 4);
        \u0275\u0275listener("click", function ProductionComponent_Template_button_click_6_listener() {
          return ctx.tab.set("plans");
        });
        \u0275\u0275text(7, "Production Plans");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 3)(9, "button", 4);
        \u0275\u0275listener("click", function ProductionComponent_Template_button_click_9_listener() {
          return ctx.tab.set("wos");
        });
        \u0275\u0275text(10, "Work Orders");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "li", 3)(12, "button", 4);
        \u0275\u0275listener("click", function ProductionComponent_Template_button_click_12_listener() {
          return ctx.tab.set("shopfloor");
        });
        \u0275\u0275text(13, "Shop Floor");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(14, ProductionComponent_Conditional_14_Template, 21, 0, "div", 5)(15, ProductionComponent_Conditional_15_Template, 25, 0, "div", 5)(16, ProductionComponent_Conditional_16_Template, 52, 11, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.tab() === "plans");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.tab() === "wos");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.tab() === "shopfloor");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(14, ctx.tab() === "plans" ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(15, ctx.tab() === "wos" ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(16, ctx.tab() === "shopfloor" ? 16 : -1);
      }
    }, dependencies: [CommonModule, StatusBadgeComponent], styles: ["\n\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n/*# sourceMappingURL=production.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductionComponent, { className: "ProductionComponent", filePath: "src/app/pages/production/production.component.ts", lineNumber: 77 });
})();
export {
  ProductionComponent
};
//# sourceMappingURL=chunk-BWPFA3CZ.js.map
