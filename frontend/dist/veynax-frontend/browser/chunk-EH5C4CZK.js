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
  ɵɵtextInterpolate
} from "./chunk-UYLOIQ7B.js";

// src/app/pages/sales-payments/sales-payments.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SalesPaymentsComponent_Conditional_11_For_18_Template(rf, ctx) {
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
    const o_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r1.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r1.model);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r1.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r1.amount.toLocaleString());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r1.status);
  }
}
function SalesPaymentsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 6)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Customer / Dealer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Model");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 7);
    \u0275\u0275text(11, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 7);
    \u0275\u0275text(13, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, SalesPaymentsComponent_Conditional_11_For_18_Template, 14, 6, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.mock.salesOrders);
  }
}
function SalesPaymentsComponent_Conditional_12_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 8);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.order);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.method);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.amount.toLocaleString());
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", p_r3.status === "VERIFIED" ? "rgba(111,191,115,.18)" : "rgba(212,168,74,.18)")("color", p_r3.status === "VERIFIED" ? "#6fbf73" : "#d4a84a");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r3.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.date);
  }
}
function SalesPaymentsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 6)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 7);
    \u0275\u0275text(11, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, SalesPaymentsComponent_Conditional_12_For_18_Template, 14, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p", 12);
    \u0275\u0275text(20, "Methods: Cash \xB7 Card \xB7 Bank Transfer \xB7 Gateway (sandbox). A payment is never reported successful without verified confirmation. Idempotency keys prevent double capture. Refunds tracked per payment.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.mock.payments);
  }
}
var SalesPaymentsComponent = class _SalesPaymentsComponent {
  constructor(mock) {
    this.mock = mock;
    this.tab = signal("orders");
  }
  static {
    this.\u0275fac = function SalesPaymentsComponent_Factory(t) {
      return new (t || _SalesPaymentsComponent)(\u0275\u0275directiveInject(MockDataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalesPaymentsComponent, selectors: [["vx-sales-payments"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 6, consts: [[1, "fw-bold", "mb-1"], [1, "text-muted", "small", "mb-3"], [1, "nav", "nav-pills", "gap-1", "mb-3"], [1, "nav-item"], [1, "nav-link", "btn-sm", 2, "color", "#e8e5df", 3, "click"], [1, "vx-card", "p-0", "overflow-auto"], [1, "table", "vx-table", "table-hover", "mb-0"], [1, "text-end"], [1, "mono"], [1, "fw-semibold"], [1, "text-end", "mono"], [1, "badge", "text-bg-secondary"], [1, "small", "text-muted", "p-2", "mb-0"], [1, "badge"]], template: function SalesPaymentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5", 0);
        \u0275\u0275text(1, "Sales & Payments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "p", 1);
        \u0275\u0275text(3, "Customer orders and configurable payment methods \u2014 Phase 6 (static data). No card data stored; payments verified server-side.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "ul", 2)(5, "li", 3)(6, "button", 4);
        \u0275\u0275listener("click", function SalesPaymentsComponent_Template_button_click_6_listener() {
          return ctx.tab.set("orders");
        });
        \u0275\u0275text(7, "Sales Orders");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 3)(9, "button", 4);
        \u0275\u0275listener("click", function SalesPaymentsComponent_Template_button_click_9_listener() {
          return ctx.tab.set("payments");
        });
        \u0275\u0275text(10, "Payments & Receipts");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, SalesPaymentsComponent_Conditional_11_Template, 19, 0, "div", 5)(12, SalesPaymentsComponent_Conditional_12_Template, 21, 0, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.tab() === "orders");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.tab() === "payments");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(11, ctx.tab() === "orders" ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(12, ctx.tab() === "payments" ? 12 : -1);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n/*# sourceMappingURL=sales-payments.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalesPaymentsComponent, { className: "SalesPaymentsComponent", filePath: "src/app/pages/sales-payments/sales-payments.component.ts", lineNumber: 53 });
})();
export {
  SalesPaymentsComponent
};
//# sourceMappingURL=chunk-EH5C4CZK.js.map
