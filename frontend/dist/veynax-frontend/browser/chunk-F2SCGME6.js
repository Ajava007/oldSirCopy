import {
  FormsModule
} from "./chunk-O3LMM4DO.js";
import {
  MockDataService
} from "./chunk-4P265WU7.js";
import {
  CommonModule,
  __spreadProps,
  __spreadValues,
  computed,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UYLOIQ7B.js";

// src/app/pages/vehicle-config/vehicle-config.component.ts
var _forTrack0 = ($index, $item) => $item.code;
function VehicleConfigComponent_Conditional_11_For_20_Template(rf, ctx) {
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
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r1.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r1.model);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r1.engine);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r1.transmission);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r1.trim);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r1.market);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r1.modelYear);
  }
}
function VehicleConfigComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 7)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Variant Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Model");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Engine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Transmission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Trim");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Market");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Year");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, VehicleConfigComponent_Conditional_11_For_20_Template, 15, 7, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.mock.variants);
  }
}
function VehicleConfigComponent_Conditional_12_For_6_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function VehicleConfigComponent_Conditional_12_For_6_For_5_Template_button_click_0_listener() {
      const o_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const g_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.select(g_r5, o_r4.code));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    const g_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("btn-primary", ctx_r1.selected()[g_r5] === o_r4.code)("btn-outline-secondary", ctx_r1.selected()[g_r5] !== o_r4.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r4.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r4.price > 0 ? "+" + o_r4.price : "incl.");
  }
}
function VehicleConfigComponent_Conditional_12_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275repeaterCreate(4, VehicleConfigComponent_Conditional_12_For_6_For_5_Template, 4, 6, "button", 25, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r5);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.optionsByGroup(g_r5));
  }
}
function VehicleConfigComponent_Conditional_12_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.labelOf(g_r6));
  }
}
function VehicleConfigComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 10)(2, "div", 11)(3, "h6", 12);
    \u0275\u0275text(4, "Select options");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, VehicleConfigComponent_Conditional_12_For_6_Template, 6, 1, "div", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14)(8, "div", 15)(9, "h6", 16);
    \u0275\u0275text(10, "Configuration summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "table", 18)(14, "tbody");
    \u0275\u0275repeaterCreate(15, VehicleConfigComponent_Conditional_12_For_16_Template, 5, 2, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 19)(18, "span", 20);
    \u0275\u0275text(19, "Total options");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 21);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "p", 22);
    \u0275\u0275text(23, "This config ID maps to an applicable BOM revision and routing. Backend will validate effectivity.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.optionGroups());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("CFG-", ctx_r1.configId(), "");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.optionGroups());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("+", ctx_r1.totalPrice().toLocaleString(), "");
  }
}
var VehicleConfigComponent = class _VehicleConfigComponent {
  constructor(mock) {
    this.mock = mock;
    this.tab = signal("variants");
    this.selected = signal({});
    this.totalPrice = computed(() => {
      let sum = 0;
      Object.entries(this.selected()).forEach(([g, code]) => {
        const o = this.mock.configOptions.find((x) => x.group === g && x.code === code);
        if (o)
          sum += o.price;
      });
      return sum;
    });
    this.configId = computed(() => {
      return Object.values(this.selected()).join("-").toUpperCase();
    });
    const init = {};
    this.optionGroups().forEach((g) => {
      const opts = this.optionsByGroup(g);
      if (opts[0])
        init[g] = opts[0].code;
    });
    this.selected.set(init);
  }
  optionGroups() {
    return [...new Set(this.mock.configOptions.map((o) => o.group))];
  }
  optionsByGroup(g) {
    return this.mock.configOptions.filter((o) => o.group === g);
  }
  select(g, code) {
    this.selected.update((s) => __spreadProps(__spreadValues({}, s), { [g]: code }));
  }
  labelOf(g) {
    const code = this.selected()[g];
    return this.mock.configOptions.find((o) => o.group === g && o.code === code)?.label ?? "\u2014";
  }
  static {
    this.\u0275fac = function VehicleConfigComponent_Factory(t) {
      return new (t || _VehicleConfigComponent)(\u0275\u0275directiveInject(MockDataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VehicleConfigComponent, selectors: [["vx-vehicle-config"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 6, consts: [[1, "fw-bold", "mb-1", 2, "color", "#0f172a"], [1, "mb-3", 2, "color", "#64748b", "font-size", ".9rem"], [1, "nav", "nav-pills", "gap-1", "mb-3"], [1, "nav-item"], [1, "nav-link", "btn-sm", 3, "click"], [1, "vx-card", "p-0", "overflow-auto"], [1, "row", "g-3"], [1, "table", "vx-table", "table-hover", "mb-0"], [1, "mono", "fw-bold"], [1, "mono"], [1, "col-12", "col-md-7"], [1, "vx-card", "p-4"], [1, "fw-bold", "mb-3", 2, "color", "#0f172a"], [1, "mb-3"], [1, "col-12", "col-md-5"], [1, "vx-card", "p-4", 2, "position", "sticky", "top", "1rem"], [1, "fw-bold", "mb-2", 2, "color", "#0f172a"], [1, "mono", "p-2", "rounded", "mb-3", 2, "background", "#f1f5f9", "font-size", ".78rem", "color", "#2563eb", "word-break", "break-all"], [1, "table", "table-sm", "mb-3", 2, "font-size", ".82rem"], [1, "d-flex", "justify-content-between", "align-items-center", "pt-2", "border-top"], [1, "fw-bold", 2, "color", "#0f172a"], [1, "fw-bold", "mono", 2, "color", "#2563eb", "font-size", "1.1rem"], [1, "small", "mt-3", "mb-0", 2, "color", "#94a3b8"], [1, "text-uppercase", "mb-1", 2, "color", "#64748b", "font-size", ".68rem", "font-weight", "700", "letter-spacing", ".08em"], [1, "d-flex", "flex-wrap", "gap-2"], [1, "btn", "btn-sm", 3, "btn-primary", "btn-outline-secondary"], [1, "btn", "btn-sm", 3, "click"], [1, "mono", 2, "opacity", ".75"], [2, "color", "#64748b"], [1, "text-end", "fw-semibold"]], template: function VehicleConfigComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5", 0);
        \u0275\u0275text(1, "Vehicle Product Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "p", 1);
        \u0275\u0275text(3, "Variants and selectable configuration \u2014 config determines applicable BOM & routing. Phase 2A.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "ul", 2)(5, "li", 3)(6, "button", 4);
        \u0275\u0275listener("click", function VehicleConfigComponent_Template_button_click_6_listener() {
          return ctx.tab.set("variants");
        });
        \u0275\u0275text(7, "Variants");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 3)(9, "button", 4);
        \u0275\u0275listener("click", function VehicleConfigComponent_Template_button_click_9_listener() {
          return ctx.tab.set("builder");
        });
        \u0275\u0275text(10, "Configuration Builder");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, VehicleConfigComponent_Conditional_11_Template, 21, 0, "div", 5)(12, VehicleConfigComponent_Conditional_12_Template, 24, 2, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.tab() === "variants");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.tab() === "builder");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(11, ctx.tab() === "variants" ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(12, ctx.tab() === "builder" ? 12 : -1);
      }
    }, dependencies: [CommonModule, FormsModule], styles: ["\n\n.mono[_ngcontent-%COMP%] {\n  font-family: ui-monospace, monospace;\n}\n/*# sourceMappingURL=vehicle-config.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VehicleConfigComponent, { className: "VehicleConfigComponent", filePath: "src/app/pages/vehicle-config/vehicle-config.component.ts", lineNumber: 75 });
})();
export {
  VehicleConfigComponent
};
//# sourceMappingURL=chunk-F2SCGME6.js.map
