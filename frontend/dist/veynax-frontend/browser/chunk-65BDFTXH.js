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
  ɵɵtextInterpolate2
} from "./chunk-UYLOIQ7B.js";

// src/app/pages/inventory/inventory.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.partCode;
function InventoryComponent_Conditional_14_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 12);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 10);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.partCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.warehouse);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.onHand);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.reserved);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", s_r1.onHand - s_r1.reserved < 10 ? "#d46a5a" : "#6fbf73");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1.onHand - s_r1.reserved);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.value.toLocaleString());
  }
}
function InventoryComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 6)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Part");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Warehouse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 7);
    \u0275\u0275text(11, "On Hand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 7);
    \u0275\u0275text(13, "Reserved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 7);
    \u0275\u0275text(15, "Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 7);
    \u0275\u0275text(17, "Value");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, InventoryComponent_Conditional_14_For_20_Template, 15, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.mock.stock);
  }
}
function InventoryComponent_Conditional_15_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 10);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 8);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 8);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.date);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.partCode);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", t_r3.qty < 0 ? "#d46a5a" : "#6fbf73");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r3.qty > 0 ? "+" : "", "", t_r3.qty, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.warehouse);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.ref);
  }
}
function InventoryComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 6)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Txn ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Part");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 7);
    \u0275\u0275text(13, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Warehouse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Reference");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, InventoryComponent_Conditional_15_For_20_Template, 16, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "p", 13);
    \u0275\u0275text(22, "Every stock change = one traceable transaction. No silent stock modification.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.mock.stockTxns);
  }
}
function InventoryComponent_Conditional_16_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 12);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.partCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.required);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.onHand);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.reserved);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.incoming);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", m_r4.shortage > 0 ? "#d46a5a" : "#6fbf73");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r4.shortage > 0 ? m_r4.shortage : "OK");
  }
}
function InventoryComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 6)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Part");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 7);
    \u0275\u0275text(9, "Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 7);
    \u0275\u0275text(11, "On Hand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 7);
    \u0275\u0275text(13, "Reserved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 7);
    \u0275\u0275text(15, "Incoming");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 7);
    \u0275\u0275text(17, "Net Shortage");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, InventoryComponent_Conditional_16_For_20_Template, 15, 9, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.mock.mrp);
  }
}
var InventoryComponent = class _InventoryComponent {
  constructor(mock) {
    this.mock = mock;
    this.tab = signal("stock");
  }
  static {
    this.\u0275fac = function InventoryComponent_Factory(t) {
      return new (t || _InventoryComponent)(\u0275\u0275directiveInject(MockDataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryComponent, selectors: [["vx-inventory"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 9, consts: [[1, "fw-bold", "mb-1"], [1, "text-muted", "small", "mb-3"], [1, "nav", "nav-pills", "gap-1", "mb-3"], [1, "nav-item"], [1, "nav-link", "btn-sm", 2, "color", "#e8e5df", 3, "click"], [1, "vx-card", "p-0", "overflow-auto"], [1, "table", "vx-table", "table-hover", "mb-0"], [1, "text-end"], [1, "mono"], [1, "fw-semibold"], [1, "text-end", "mono"], [1, "text-end", "mono", 2, "color", "#d4a84a"], [1, "text-end", "mono", "fw-bold"], [1, "small", "text-muted", "p-2", "mb-0"], [1, "badge", "text-bg-secondary"]], template: function InventoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5", 0);
        \u0275\u0275text(1, "Inventory & MRP");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "p", 1);
        \u0275\u0275text(3, "Stock on hand, traceable transactions, and material requirement planning \u2014 Phase 3 (static data).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "ul", 2)(5, "li", 3)(6, "button", 4);
        \u0275\u0275listener("click", function InventoryComponent_Template_button_click_6_listener() {
          return ctx.tab.set("stock");
        });
        \u0275\u0275text(7, "Stock");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 3)(9, "button", 4);
        \u0275\u0275listener("click", function InventoryComponent_Template_button_click_9_listener() {
          return ctx.tab.set("txns");
        });
        \u0275\u0275text(10, "Transactions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "li", 3)(12, "button", 4);
        \u0275\u0275listener("click", function InventoryComponent_Template_button_click_12_listener() {
          return ctx.tab.set("mrp");
        });
        \u0275\u0275text(13, "MRP Shortage");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(14, InventoryComponent_Conditional_14_Template, 21, 0, "div", 5)(15, InventoryComponent_Conditional_15_Template, 23, 0, "div", 5)(16, InventoryComponent_Conditional_16_Template, 21, 0, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.tab() === "stock");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.tab() === "txns");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.tab() === "mrp");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(14, ctx.tab() === "stock" ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(15, ctx.tab() === "txns" ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(16, ctx.tab() === "mrp" ? 16 : -1);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n/*# sourceMappingURL=inventory.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryComponent, { className: "InventoryComponent", filePath: "src/app/pages/inventory/inventory.component.ts", lineNumber: 68 });
})();
export {
  InventoryComponent
};
//# sourceMappingURL=chunk-65BDFTXH.js.map
