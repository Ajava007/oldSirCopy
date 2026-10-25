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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-UYLOIQ7B.js";

// src/app/pages/engineering/engineering.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.code;
var _forTrack2 = ($index, $item) => $item.seq;
function EngineeringComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 3)(1, "button", 6);
    \u0275\u0275listener("click", function EngineeringComponent_For_6_Template_button_click_1_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.tab.set(t_r2.id));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.tab() === t_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2.label);
  }
}
function EngineeringComponent_Conditional_7_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 12);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.uom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.cost.toLocaleString());
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", p_r4.status === "ACTIVE" ? "rgba(111,191,115,.18)" : "rgba(212,168,74,.18)")("color", p_r4.status === "ACTIVE" ? "#6fbf73" : "#d4a84a");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4.status);
  }
}
function EngineeringComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "table", 7)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "UoM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 8);
    \u0275\u0275text(13, "Unit cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, EngineeringComponent_Conditional_7_For_18_Template, 14, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.mock.parts);
  }
}
function EngineeringComponent_Conditional_8_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r5 = ctx.$implicit;
    \u0275\u0275styleProp("font-weight", b_r5.level === 0 ? "700" : "400")("background", b_r5.level === 0 ? "rgba(196,112,70,.08)" : "transparent");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r5.level);
    \u0275\u0275advance();
    \u0275\u0275styleProp("padding-left", b_r5.level * 18, "px");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r5.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", b_r5.qty, " ", b_r5.uom, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r5.type);
  }
}
function EngineeringComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "p", 13);
    \u0275\u0275text(2, "Multi-level BOM for ");
    \u0275\u0275elementStart(3, "strong", 14);
    \u0275\u0275text(4, "SUVX-2026");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u2014 circular-reference prevention enforced at backend.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "table", 15)(7, "thead")(8, "tr")(9, "th", 16);
    \u0275\u0275text(10, "Lvl");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Component");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Type");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, EngineeringComponent_Conditional_8_For_21_Template, 12, 12, "tr", 17, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r2.mock.bom);
  }
}
function EngineeringComponent_Conditional_9_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 11);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.seq);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.workCenter);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.machine);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.setupMin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.cycleMin);
  }
}
function EngineeringComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "table", 7)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Seq");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Operation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Work Center");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Machine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 8);
    \u0275\u0275text(13, "Setup (min)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 8);
    \u0275\u0275text(15, "Cycle (min)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, EngineeringComponent_Conditional_9_For_18_Template, 13, 6, "tr", null, _forTrack2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.mock.routing);
  }
}
var EngineeringComponent = class _EngineeringComponent {
  constructor(mock) {
    this.mock = mock;
    this.tab = signal("parts");
    this.tabs = [
      { id: "parts", label: "Part Master" },
      { id: "bom", label: "BOM (multi-level)" },
      { id: "routing", label: "Manufacturing Routing" }
    ];
  }
  static {
    this.\u0275fac = function EngineeringComponent_Factory(t) {
      return new (t || _EngineeringComponent)(\u0275\u0275directiveInject(MockDataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EngineeringComponent, selectors: [["vx-engineering"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 3, consts: [[1, "fw-bold", "mb-1"], [1, "text-muted", "small", "mb-3"], [1, "nav", "nav-pills", "gap-1", "mb-3"], [1, "nav-item"], [1, "vx-card", "p-0", "overflow-auto"], [1, "vx-card", "p-3"], [1, "nav-link", "btn-sm", 2, "color", "#e8e5df", 3, "click"], [1, "table", "vx-table", "table-hover", "mb-0"], [1, "text-end"], [1, "mono"], [1, "fw-semibold"], [1, "text-end", "mono"], [1, "badge"], [1, "small", "text-muted", "mb-2"], [1, "text-white"], [1, "table", "vx-table", "table-sm", "mb-0"], [2, "width", "40px"], [3, "font-weight", "background"], [1, "badge", "text-bg-secondary"]], template: function EngineeringComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5", 0);
        \u0275\u0275text(1, "Engineering");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "p", 1);
        \u0275\u0275text(3, "Part master, multi-level BOM, and manufacturing routing \u2014 Phase 2 module (static data).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "ul", 2);
        \u0275\u0275repeaterCreate(5, EngineeringComponent_For_6_Template, 3, 3, "li", 3, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, EngineeringComponent_Conditional_7_Template, 19, 0, "div", 4)(8, EngineeringComponent_Conditional_8_Template, 22, 0, "div", 5)(9, EngineeringComponent_Conditional_9_Template, 19, 0, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.tabs);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(7, ctx.tab() === "parts" ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.tab() === "bom" ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(9, ctx.tab() === "routing" ? 9 : -1);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n/*# sourceMappingURL=engineering.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EngineeringComponent, { className: "EngineeringComponent", filePath: "src/app/pages/engineering/engineering.component.ts", lineNumber: 65 });
})();
export {
  EngineeringComponent
};
//# sourceMappingURL=chunk-7H5LUY5K.js.map
