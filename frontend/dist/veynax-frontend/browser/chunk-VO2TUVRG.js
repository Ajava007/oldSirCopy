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

// src/app/pages/maintenance/maintenance.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MaintenanceComponent_Conditional_11_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 7);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.workCenter);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", m_r1.status === "RUNNING" ? "rgba(111,191,115,.18)" : "rgba(212,106,90,.18)")("color", m_r1.status === "RUNNING" ? "#6fbf73" : "#d46a5a");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.nextMaintenance);
  }
}
function MaintenanceComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 6)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Machine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Work Center");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Next Maintenance");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, MaintenanceComponent_Conditional_11_For_18_Template, 14, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.mock.machines);
  }
}
function MaintenanceComponent_Conditional_12_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 7);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.machine);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.type);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", m_r3.priority === "HIGH" ? "rgba(212,106,90,.18)" : m_r3.priority === "MEDIUM" ? "rgba(212,168,74,.18)" : "rgba(123,168,184,.18)")("color", m_r3.priority === "HIGH" ? "#d46a5a" : m_r3.priority === "MEDIUM" ? "#d4a84a" : "#7ba8b8");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r3.priority);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r3.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.due);
  }
}
function MaintenanceComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 6)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "MO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Machine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Due");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, MaintenanceComponent_Conditional_12_For_18_Template, 15, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.mock.maintenanceOrders);
  }
}
var MaintenanceComponent = class _MaintenanceComponent {
  constructor(mock) {
    this.mock = mock;
    this.tab = signal("machines");
  }
  static {
    this.\u0275fac = function MaintenanceComponent_Factory(t) {
      return new (t || _MaintenanceComponent)(\u0275\u0275directiveInject(MockDataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MaintenanceComponent, selectors: [["vx-maintenance"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 6, consts: [[1, "fw-bold", "mb-1"], [1, "text-muted", "small", "mb-3"], [1, "nav", "nav-pills", "gap-1", "mb-3"], [1, "nav-item"], [1, "nav-link", "btn-sm", 2, "color", "#e8e5df", 3, "click"], [1, "vx-card", "p-0", "overflow-auto"], [1, "table", "vx-table", "table-hover", "mb-0"], [1, "mono"], [1, "fw-semibold"], [1, "badge"], [1, "badge", "text-bg-secondary"]], template: function MaintenanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5", 0);
        \u0275\u0275text(1, "Maintenance (CMMS)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "p", 1);
        \u0275\u0275text(3, "Machines, downtime, and preventive/corrective maintenance orders \u2014 static data.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "ul", 2)(5, "li", 3)(6, "button", 4);
        \u0275\u0275listener("click", function MaintenanceComponent_Template_button_click_6_listener() {
          return ctx.tab.set("machines");
        });
        \u0275\u0275text(7, "Machines");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 3)(9, "button", 4);
        \u0275\u0275listener("click", function MaintenanceComponent_Template_button_click_9_listener() {
          return ctx.tab.set("mos");
        });
        \u0275\u0275text(10, "Maintenance Orders");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, MaintenanceComponent_Conditional_11_Template, 19, 0, "div", 5)(12, MaintenanceComponent_Conditional_12_Template, 19, 0, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.tab() === "machines");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.tab() === "mos");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(11, ctx.tab() === "machines" ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(12, ctx.tab() === "mos" ? 12 : -1);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n/*# sourceMappingURL=maintenance.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MaintenanceComponent, { className: "MaintenanceComponent", filePath: "src/app/pages/maintenance/maintenance.component.ts", lineNumber: 51 });
})();
export {
  MaintenanceComponent
};
//# sourceMappingURL=chunk-VO2TUVRG.js.map
