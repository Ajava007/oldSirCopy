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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UYLOIQ7B.js";

// src/app/pages/workforce/workforce.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function WorkforceComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 6);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const e_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r1.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r1.factory);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r1.shift);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r1.skill);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", e_r1.status === "ACTIVE" ? "rgba(111,191,115,.18)" : "rgba(212,168,74,.18)")("color", e_r1.status === "ACTIVE" ? "#6fbf73" : "#d4a84a");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r1.status);
  }
}
var WorkforceComponent = class _WorkforceComponent {
  constructor(mock) {
    this.mock = mock;
  }
  static {
    this.\u0275fac = function WorkforceComponent_Factory(t) {
      return new (t || _WorkforceComponent)(\u0275\u0275directiveInject(MockDataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkforceComponent, selectors: [["vx-workforce"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 0, consts: [[1, "fw-bold", "mb-1"], [1, "text-muted", "small", "mb-3"], [1, "vx-card", "p-0", "overflow-auto"], [1, "table", "vx-table", "table-hover", "mb-0"], [1, "fw-semibold"], [1, "mono"], [1, "badge"]], template: function WorkforceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5", 0);
        \u0275\u0275text(1, "Workforce");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "p", 1);
        \u0275\u0275text(3, "Employees, skills, certifications, shifts \u2014 scoped per factory (static data).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "table", 3)(6, "thead")(7, "tr")(8, "th");
        \u0275\u0275text(9, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "th");
        \u0275\u0275text(11, "Role");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "th");
        \u0275\u0275text(13, "Factory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "th");
        \u0275\u0275text(15, "Shift");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "th");
        \u0275\u0275text(17, "Skill / Certification");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th");
        \u0275\u0275text(19, "Status");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "tbody");
        \u0275\u0275repeaterCreate(21, WorkforceComponent_For_22_Template, 14, 10, "tr", null, _forTrack0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(21);
        \u0275\u0275repeater(ctx.mock.employees);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n/*# sourceMappingURL=workforce.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkforceComponent, { className: "WorkforceComponent", filePath: "src/app/pages/workforce/workforce.component.ts", lineNumber: 26 });
})();
export {
  WorkforceComponent
};
//# sourceMappingURL=chunk-FUQ6F3XC.js.map
