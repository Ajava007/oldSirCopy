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
  ɵɵtextInterpolate1
} from "./chunk-UYLOIQ7B.js";

// src/app/pages/safety/safety.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SafetyComponent_Conditional_47_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "vx-status-badge", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275element(14, "vx-status-badge", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", i_r1.severity)("status", i_r1.severity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1.location);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", i_r1.status)("status", i_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1.reportedBy);
  }
}
function SafetyComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Severity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Reported by");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, SafetyComponent_Conditional_47_For_22_Template, 17, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r1.mock.safetyIncidents);
  }
}
function SafetyComponent_Conditional_48_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 18)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.area);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.required);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", p_r3.compliance >= 95 ? "#059669" : p_r3.compliance >= 90 ? "#d97706" : "#dc2626");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", p_r3.compliance, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.lastCheck);
  }
}
function SafetyComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Area");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Required PPE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 18);
    \u0275\u0275text(9, "Compliance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Last check");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, SafetyComponent_Conditional_48_For_14_Template, 10, 6, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.mock.ppeChecks);
  }
}
function SafetyComponent_Conditional_49_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "vx-status-badge", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4.employee);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4.course);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4.expiry);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", t_r4.status)("status", t_r4.status);
  }
}
function SafetyComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Employee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Course");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Expiry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, SafetyComponent_Conditional_49_For_14_Template, 9, 5, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.mock.safetyTraining);
  }
}
var SafetyComponent = class _SafetyComponent {
  constructor(mock) {
    this.mock = mock;
    this.tab = signal("incidents");
  }
  static {
    this.\u0275fac = function SafetyComponent_Factory(t) {
      return new (t || _SafetyComponent)(\u0275\u0275directiveInject(MockDataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SafetyComponent, selectors: [["vx-safety"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 50, vars: 9, consts: [[1, "fw-bold", "mb-1", 2, "color", "#0f172a"], [1, "mb-3", 2, "color", "#64748b", "font-size", ".9rem"], [1, "row", "g-3", "mb-3"], [1, "col-6", "col-md-3"], [1, "vx-card", "p-3"], [1, "text-uppercase", 2, "color", "#64748b", "font-size", ".7rem", "font-weight", "600"], [1, "display-6", "fw-bold", 2, "color", "#dc2626"], [1, "small", 2, "color", "#94a3b8"], [1, "display-6", "fw-bold", 2, "color", "#d97706"], [1, "display-6", "fw-bold", 2, "color", "#059669"], [1, "nav", "nav-pills", "gap-1", "mb-3"], [1, "nav-item"], [1, "nav-link", "btn-sm", 3, "click"], [1, "vx-card", "p-0", "overflow-auto"], [1, "table", "vx-table", "table-hover", "mb-0"], [1, "mono"], [3, "label", "status"], [1, "small"], [1, "text-end"], [1, "fw-semibold"]], template: function SafetyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5", 0);
        \u0275\u0275text(1, "Health & Safety (EHS)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "p", 1);
        \u0275\u0275text(3, "Incidents, near-misses, hazards, PPE compliance, and training \u2014 spec \xA728.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5);
        \u0275\u0275text(8, "Open Incidents");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275text(10, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7);
        \u0275\u0275text(12, "under investigation");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 3)(14, "div", 4)(15, "div", 5);
        \u0275\u0275text(16, "Near-Misses (30d)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 8);
        \u0275\u0275text(18, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 7);
        \u0275\u0275text(20, "closed");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 3)(22, "div", 4)(23, "div", 5);
        \u0275\u0275text(24, "PPE Compliance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 9);
        \u0275\u0275text(26, "95%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 7);
        \u0275\u0275text(28, "avg across areas");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 3)(30, "div", 4)(31, "div", 5);
        \u0275\u0275text(32, "Expired Training");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 6);
        \u0275\u0275text(34, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 7);
        \u0275\u0275text(36, "1 expiring soon");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "ul", 10)(38, "li", 11)(39, "button", 12);
        \u0275\u0275listener("click", function SafetyComponent_Template_button_click_39_listener() {
          return ctx.tab.set("incidents");
        });
        \u0275\u0275text(40, "Incidents / Near-Misses / Hazards");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "li", 11)(42, "button", 12);
        \u0275\u0275listener("click", function SafetyComponent_Template_button_click_42_listener() {
          return ctx.tab.set("ppe");
        });
        \u0275\u0275text(43, "PPE Compliance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "li", 11)(45, "button", 12);
        \u0275\u0275listener("click", function SafetyComponent_Template_button_click_45_listener() {
          return ctx.tab.set("training");
        });
        \u0275\u0275text(46, "Training & Certifications");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(47, SafetyComponent_Conditional_47_Template, 23, 0, "div", 13)(48, SafetyComponent_Conditional_48_Template, 15, 0, "div", 13)(49, SafetyComponent_Conditional_49_Template, 15, 0, "div", 13);
      }
      if (rf & 2) {
        \u0275\u0275advance(39);
        \u0275\u0275classProp("active", ctx.tab() === "incidents");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.tab() === "ppe");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.tab() === "training");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(47, ctx.tab() === "incidents" ? 47 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(48, ctx.tab() === "ppe" ? 48 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(49, ctx.tab() === "training" ? 49 : -1);
      }
    }, dependencies: [CommonModule, StatusBadgeComponent], styles: ["\n\n.mono[_ngcontent-%COMP%] {\n  font-family: ui-monospace, monospace;\n}\n/*# sourceMappingURL=safety.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SafetyComponent, { className: "SafetyComponent", filePath: "src/app/pages/safety/safety.component.ts", lineNumber: 76 });
})();
export {
  SafetyComponent
};
//# sourceMappingURL=chunk-BJRTKOFC.js.map
