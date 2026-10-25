import {
  MockDataService
} from "./chunk-4P265WU7.js";
import {
  CommonModule,
  computed,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleMapInterpolate1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UYLOIQ7B.js";

// src/app/pages/scheduling/scheduling.component.ts
var _forTrack0 = ($index, $item) => $item.model;
var _forTrack1 = ($index, $item) => $item.time;
function SchedulingComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275element(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleMapInterpolate1("width:14px;height:14px;background:", m_r1.color, ";");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r1.model);
  }
}
function SchedulingComponent_For_22_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275styleMapInterpolate1("min-width:96px;background:", s_r2.color, ";box-shadow:0 2px 6px rgba(15,23,42,.15);");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.time);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.model);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.variant);
  }
}
function SchedulingComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275repeaterCreate(4, SchedulingComponent_For_22_For_5_Template, 7, 6, "div", 13, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r3);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.slotsByLine(line_r3));
  }
}
var SchedulingComponent = class _SchedulingComponent {
  constructor(mock) {
    this.mock = mock;
    this.changeovers = computed(() => {
      let count = 0;
      this.lines().forEach((line) => {
        const slots = this.slotsByLine(line);
        for (let i = 1; i < slots.length; i++) {
          if (slots[i].model !== slots[i - 1].model)
            count++;
        }
      });
      return count;
    });
  }
  lines() {
    return [...new Set(this.mock.scheduleSlots.map((s) => s.line))];
  }
  slotsByLine(line) {
    return this.mock.scheduleSlots.filter((s) => s.line === line);
  }
  modelLegend() {
    const seen = /* @__PURE__ */ new Map();
    this.mock.scheduleSlots.forEach((s) => seen.set(s.model, s.color));
    return [...seen.entries()].map(([model, color]) => ({ model, color }));
  }
  static {
    this.\u0275fac = function SchedulingComponent_Factory(t) {
      return new (t || _SchedulingComponent)(\u0275\u0275directiveInject(MockDataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SchedulingComponent, selectors: [["vx-scheduling"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 1, consts: [[1, "fw-bold", "mb-1", 2, "color", "#0f172a"], [1, "mb-3", 2, "color", "#64748b", "font-size", ".9rem"], [1, "vx-card", "p-4", "mb-3"], [1, "d-flex", "gap-3", "flex-wrap", "align-items-center", "mb-3"], [1, "small", 2, "color", "#64748b"], [1, "mono", 2, "color", "#0f172a"], [1, "d-flex", "gap-3", "mb-3", "small", "flex-wrap"], [1, "d-flex", "align-items-center", "gap-1"], [1, "mb-3"], [1, "small", "mb-0", 2, "color", "#94a3b8"], [1, "rounded"], [1, "fw-semibold", "small", "mb-1", 2, "color", "#334155"], [1, "d-flex", "gap-2", "flex-wrap"], [1, "rounded", "p-2", "text-white", 3, "style"], [1, "rounded", "p-2", "text-white"], [1, "mono", 2, "font-size", ".65rem", "opacity", ".85"], [1, "fw-bold", 2, "font-size", ".78rem"], [1, "mono", 2, "font-size", ".6rem", "opacity", ".8"]], template: function SchedulingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5", 0);
        \u0275\u0275text(1, "Production Scheduling Board");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "p", 1);
        \u0275\u0275text(3, "Line \xD7 time sequenced slots \u2014 takt 8 min. Compatible models grouped to reduce changeovers (spec \xA712).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "span", 4);
        \u0275\u0275text(7, "Takt time: ");
        \u0275\u0275elementStart(8, "strong", 5);
        \u0275\u0275text(9, "8 min");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "span", 4);
        \u0275\u0275text(11, "Changeovers: ");
        \u0275\u0275elementStart(12, "strong", 5);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "span", 4);
        \u0275\u0275text(15, "Shift: ");
        \u0275\u0275elementStart(16, "strong", 5);
        \u0275\u0275text(17, "08:00 \u2013 16:00");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "div", 6);
        \u0275\u0275repeaterCreate(19, SchedulingComponent_For_20_Template, 3, 4, "span", 7, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(21, SchedulingComponent_For_22_Template, 6, 1, "div", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(23, "p", 9);
        \u0275\u0275text(24, "Note: heuristic sequencing only \u2014 no mathematical optimization claimed (spec \xA712). Drag-and-drop rescheduling lands in a later phase.");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate(ctx.changeovers());
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.modelLegend());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.lines());
      }
    }, dependencies: [CommonModule], styles: ["\n\n.mono[_ngcontent-%COMP%] {\n  font-family: ui-monospace, monospace;\n}\n/*# sourceMappingURL=scheduling.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SchedulingComponent, { className: "SchedulingComponent", filePath: "src/app/pages/scheduling/scheduling.component.ts", lineNumber: 44 });
})();
export {
  SchedulingComponent
};
//# sourceMappingURL=chunk-F6Q5L3FX.js.map
