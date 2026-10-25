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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UYLOIQ7B.js";

// src/app/pages/supply-chain/supply-chain.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SupplyChainComponent_Conditional_11_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.company);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", s_r1.rating, " / 5.0");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", s_r1.status === "APPROVED" ? "rgba(111,191,115,.18)" : "rgba(212,168,74,.18)")("color", s_r1.status === "APPROVED" ? "#6fbf73" : "#d4a84a");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1.status);
  }
}
function SupplyChainComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 6)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 7);
    \u0275\u0275text(13, "Rating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, SupplyChainComponent_Conditional_11_For_18_Template, 14, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.mock.suppliers);
  }
}
function SupplyChainComponent_Conditional_12_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.supplier);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.items);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.total.toLocaleString());
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.statusColor(p_r3.status).bg)("color", ctx_r1.statusColor(p_r3.status).fg);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r3.status);
  }
}
function SupplyChainComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 6)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "PO Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 7);
    \u0275\u0275text(11, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 7);
    \u0275\u0275text(13, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, SupplyChainComponent_Conditional_12_For_18_Template, 14, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.mock.purchaseOrders);
  }
}
var SupplyChainComponent = class _SupplyChainComponent {
  constructor(mock) {
    this.mock = mock;
    this.tab = signal("suppliers");
  }
  statusColor(s) {
    if (s === "RECEIVED")
      return { bg: "rgba(111,191,115,.18)", fg: "#6fbf73" };
    if (s === "OPEN" || s === "APPROVED")
      return { bg: "rgba(123,168,184,.18)", fg: "#7ba8b8" };
    return { bg: "rgba(212,168,74,.18)", fg: "#d4a84a" };
  }
  static {
    this.\u0275fac = function SupplyChainComponent_Factory(t) {
      return new (t || _SupplyChainComponent)(\u0275\u0275directiveInject(MockDataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupplyChainComponent, selectors: [["vx-supply-chain"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 6, consts: [[1, "fw-bold", "mb-1"], [1, "text-muted", "small", "mb-3"], [1, "nav", "nav-pills", "gap-1", "mb-3"], [1, "nav-item"], [1, "nav-link", "btn-sm", 2, "color", "#e8e5df", 3, "click"], [1, "vx-card", "p-0", "overflow-auto"], [1, "table", "vx-table", "table-hover", "mb-0"], [1, "text-end"], [1, "mono"], [1, "fw-semibold"], [1, "text-end", "mono"], [1, "badge"]], template: function SupplyChainComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5", 0);
        \u0275\u0275text(1, "Supply Chain & Procurement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "p", 1);
        \u0275\u0275text(3, "Suppliers, purchase orders, goods receipt \u2014 Phase 3 module (static data).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "ul", 2)(5, "li", 3)(6, "button", 4);
        \u0275\u0275listener("click", function SupplyChainComponent_Template_button_click_6_listener() {
          return ctx.tab.set("suppliers");
        });
        \u0275\u0275text(7, "Suppliers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 3)(9, "button", 4);
        \u0275\u0275listener("click", function SupplyChainComponent_Template_button_click_9_listener() {
          return ctx.tab.set("pos");
        });
        \u0275\u0275text(10, "Purchase Orders");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, SupplyChainComponent_Conditional_11_Template, 19, 0, "div", 5)(12, SupplyChainComponent_Conditional_12_Template, 19, 0, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.tab() === "suppliers");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.tab() === "pos");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(11, ctx.tab() === "suppliers" ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(12, ctx.tab() === "pos" ? 12 : -1);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n/*# sourceMappingURL=supply-chain.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupplyChainComponent, { className: "SupplyChainComponent", filePath: "src/app/pages/supply-chain/supply-chain.component.ts", lineNumber: 49 });
})();
export {
  SupplyChainComponent
};
//# sourceMappingURL=chunk-NR6T66JM.js.map
