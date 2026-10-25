import {
  MockDataService
} from "./chunk-4P265WU7.js";
import {
  CommonModule,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4
} from "./chunk-UYLOIQ7B.js";

// src/app/pages/vin-traceability/vin-traceability.component.ts
var _forTrack0 = ($index, $item) => $item.vin;
var _forTrack1 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.lot;
var _forTrack3 = ($index, $item) => $item.op;
var _forTrack4 = ($index, $item) => $item.machine;
var _forTrack5 = ($index, $item) => $item.id;
var _forTrack6 = ($index, $item) => $item.defect;
function VinTraceabilityComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function VinTraceabilityComponent_For_6_Template_button_click_0_listener() {
      const v_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.set(v_r2));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    const v_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("btn-primary", ((tmp_10_0 = ctx_r2.selected()) == null ? null : tmp_10_0.vin) === v_r2.vin)("btn-outline-secondary", ((tmp_11_0 = ctx_r2.selected()) == null ? null : tmp_11_0.vin) !== v_r2.vin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r2.vin);
  }
}
function VinTraceabilityComponent_Conditional_7_For_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "\u2192");
    \u0275\u0275elementEnd();
  }
}
function VinTraceabilityComponent_Conditional_7_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, VinTraceabilityComponent_Conditional_7_For_16_Conditional_2_Template, 2, 0, "span", 20);
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    const \u0275$index_41_r6 = ctx.$index;
    const \u0275$count_41_r7 = ctx.$count;
    \u0275\u0275styleProp("background", step_r5.done ? "rgba(37,99,235,.08)" : "#f8fafc")("border", step_r5.done ? "1px solid #2563eb" : "1px solid #e2e8f0")("color", step_r5.done ? "#1e40af" : "#94a3b8");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r5.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, !(\u0275$index_41_r6 === \u0275$count_41_r7 - 1) ? 2 : -1);
  }
}
function VinTraceabilityComponent_Conditional_7_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 21)(2, "div", 22)(3, "table", 23)(4, "tbody")(5, "tr")(6, "td", 24);
    \u0275\u0275text(7, "Engine Serial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 25);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "tr")(11, "td", 24);
    \u0275\u0275text(12, "Battery Serial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 25);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tr")(16, "td", 24);
    \u0275\u0275text(17, "Sales Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 25);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tr")(21, "td", 24);
    \u0275\u0275text(22, "Open defects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 25);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(25, "div", 21)(26, "div", 22)(27, "table", 23)(28, "tbody")(29, "tr")(30, "td", 24);
    \u0275\u0275text(31, "Material lots");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td", 25);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "tr")(35, "td", 24);
    \u0275\u0275text(36, "Operators");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td", 25);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "tr")(40, "td", 24);
    \u0275\u0275text(41, "Machines used");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "td", 25);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "tr")(45, "td", 24);
    \u0275\u0275text(46, "Inspections");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "td", 25);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "tr")(50, "td", 24);
    \u0275\u0275text(51, "Rework records");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "td", 25);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const v_r8 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(v_r8.engineSerial);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(v_r8.batterySerial);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(v_r8.salesOrder);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.defectsFor(v_r8.vin));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.gen().lots.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.gen().operators.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.gen().machineHistory.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.gen().inspectionHistory.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.gen().reworkHistory.length);
  }
}
function VinTraceabilityComponent_Conditional_7_Conditional_28_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r9.part);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r9.lot);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r9.supplier);
  }
}
function VinTraceabilityComponent_Conditional_7_Conditional_28_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r10.op);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", o_r10.name, "");
  }
}
function VinTraceabilityComponent_Conditional_7_Conditional_28_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "strong", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r11.machine);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", m_r11.operation, "");
  }
}
function VinTraceabilityComponent_Conditional_7_Conditional_28_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r12.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r12.result);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r12.inspector);
  }
}
function VinTraceabilityComponent_Conditional_7_Conditional_28_Conditional_44_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r13.defect);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u2014 ", r_r13.action, " (", r_r13.date, ")");
  }
}
function VinTraceabilityComponent_Conditional_7_Conditional_28_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 26);
    \u0275\u0275text(1, "Rework history");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, VinTraceabilityComponent_Conditional_7_Conditional_28_Conditional_44_For_3_Template, 4, 3, "div", 33, _forTrack6);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.gen().reworkHistory);
  }
}
function VinTraceabilityComponent_Conditional_7_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h6", 26);
    \u0275\u0275text(2, "Material lots (supplier traceability)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "table", 27)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "Part");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Lot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Supplier");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, VinTraceabilityComponent_Conditional_7_Conditional_28_For_14_Template, 7, 3, "tr", null, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "h6", 26);
    \u0275\u0275text(16, "Operations \u2014 operators & machines");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 28)(18, "div", 29)(19, "div", 30)(20, "div", 31);
    \u0275\u0275text(21, "Operators");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(22, VinTraceabilityComponent_Conditional_7_Conditional_28_For_23_Template, 4, 2, "div", 32, _forTrack3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 29)(25, "div", 30)(26, "div", 31);
    \u0275\u0275text(27, "Machine history");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(28, VinTraceabilityComponent_Conditional_7_Conditional_28_For_29_Template, 4, 2, "div", 32, _forTrack4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "h6", 26);
    \u0275\u0275text(31, "Inspection history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "table", 27)(33, "thead")(34, "tr")(35, "th");
    \u0275\u0275text(36, "Inspection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "Result");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40, "Inspector");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "tbody");
    \u0275\u0275repeaterCreate(42, VinTraceabilityComponent_Conditional_7_Conditional_28_For_43_Template, 7, 3, "tr", null, _forTrack5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, VinTraceabilityComponent_Conditional_7_Conditional_28_Conditional_44_Template, 4, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r2.gen().lots);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r2.gen().operators);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r2.gen().machineHistory);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r2.gen().inspectionHistory);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(44, ctx_r2.gen().reworkHistory.length ? 44 : -1);
  }
}
function VinTraceabilityComponent_Conditional_7_Conditional_29_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", c_r14.passed ? "#059669" : "#dc2626");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r14.passed ? "\u2713" : "\u2715");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", c_r14.passed ? "#0f172a" : "#dc2626");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r14.label);
  }
}
function VinTraceabilityComponent_Conditional_7_Conditional_29_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38)(1, "strong");
    \u0275\u0275text(2, "All gates passed.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Vehicle is eligible for quality release and dispatch.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 39);
    \u0275\u0275text(5, "Release vehicle for dispatch");
    \u0275\u0275elementEnd();
  }
}
function VinTraceabilityComponent_Conditional_7_Conditional_29_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40)(1, "strong");
    \u0275\u0275text(2, "Cannot release.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.failedCount(), " gate(s) open. A failed vehicle cannot be dispatched until resolved.");
  }
}
function VinTraceabilityComponent_Conditional_7_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h6", 26);
    \u0275\u0275text(2, "Quality release checklist \u2014 gates dispatch");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, VinTraceabilityComponent_Conditional_7_Conditional_29_For_4_Template, 5, 6, "div", 34, _forTrack1);
    \u0275\u0275elementStart(5, "div", 35);
    \u0275\u0275template(6, VinTraceabilityComponent_Conditional_7_Conditional_29_Conditional_6_Template, 6, 0)(7, VinTraceabilityComponent_Conditional_7_Conditional_29_Conditional_7_Template, 4, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.gen().releaseChecklist);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.releasable() ? "rgba(5,150,105,.08)" : "rgba(220,38,38,.06)")("border", "1px solid " + (ctx_r2.releasable() ? "#059669" : "#dc2626"));
    \u0275\u0275advance();
    \u0275\u0275conditional(6, ctx_r2.releasable() ? 6 : 7);
  }
}
function VinTraceabilityComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div")(3, "div", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 10)(8, "span", 11);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 11);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 12);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 13);
    \u0275\u0275repeaterCreate(15, VinTraceabilityComponent_Conditional_7_For_16_Template, 3, 8, null, null, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "ul", 14)(18, "li", 15)(19, "button", 16);
    \u0275\u0275listener("click", function VinTraceabilityComponent_Conditional_7_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.tab.set("summary"));
    });
    \u0275\u0275text(20, "Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "li", 15)(22, "button", 16);
    \u0275\u0275listener("click", function VinTraceabilityComponent_Conditional_7_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.tab.set("genealogy"));
    });
    \u0275\u0275text(23, "Genealogy Timeline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "li", 15)(25, "button", 16);
    \u0275\u0275listener("click", function VinTraceabilityComponent_Conditional_7_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.tab.set("release"));
    });
    \u0275\u0275text(26, "Release Checklist");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, VinTraceabilityComponent_Conditional_7_Conditional_27_Template, 54, 9, "div", 17)(28, VinTraceabilityComponent_Conditional_7_Conditional_28_Template, 45, 1, "div", 18)(29, VinTraceabilityComponent_Conditional_7_Conditional_29_Template, 8, 5, "div", 18);
  }
  if (rf & 2) {
    const v_r8 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(v_r8.vin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4("", v_r8.model, " \xB7 ", v_r8.config, " \xB7 Built ", v_r8.buildDate, " \xB7 ", v_r8.line, "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", v_r8.qualityStatus === "RELEASED" ? "rgba(5,150,105,.15)" : v_r8.qualityStatus === "HOLD" ? "rgba(217,119,6,.15)" : "rgba(220,38,38,.15)")("color", v_r8.qualityStatus === "RELEASED" ? "#059669" : v_r8.qualityStatus === "HOLD" ? "#d97706" : "#dc2626");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Quality: ", v_r8.qualityStatus, "");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", v_r8.paymentStatus === "PAID" ? "rgba(5,150,105,.15)" : "rgba(217,119,6,.15)")("color", v_r8.paymentStatus === "PAID" ? "#059669" : "#d97706");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Payment: ", v_r8.paymentStatus, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("WO ", v_r8.workOrder, "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.thread(v_r8));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r2.tab() === "summary");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r2.tab() === "genealogy");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r2.tab() === "release");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(27, ctx_r2.tab() === "summary" ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(28, ctx_r2.tab() === "genealogy" ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(29, ctx_r2.tab() === "release" ? 29 : -1);
  }
}
var VinTraceabilityComponent = class _VinTraceabilityComponent {
  constructor(mock) {
    this.mock = mock;
    this.selected = signal(null);
    this.tab = signal("summary");
    this.gen = computed(() => this.mock.vinGenealogy(this.selected()?.vin ?? ""));
    this.releasable = computed(() => this.gen().releaseChecklist.every((c) => c.passed));
    this.failedCount = computed(() => this.gen().releaseChecklist.filter((c) => !c.passed).length);
    if (this.mock.vins.length)
      this.selected.set(this.mock.vins[0]);
  }
  thread(v) {
    return [
      { label: "Engineering Rev", done: true },
      { label: "BOM/Routing", done: true },
      { label: "Production Plan", done: true },
      { label: v.workOrder, done: true },
      { label: "Operations", done: true },
      { label: "Quality " + v.qualityStatus, done: v.qualityStatus === "RELEASED" },
      { label: "VIN Assigned", done: true },
      { label: v.salesOrder, done: true },
      { label: "Payment " + v.paymentStatus, done: v.paymentStatus === "PAID" },
      { label: "Delivery", done: v.paymentStatus === "PAID" && v.qualityStatus === "RELEASED" }
    ];
  }
  defectsFor(vin) {
    return this.mock.defects.filter((d) => d.vin === vin && (d.status === "OPEN" || d.status === "IN_NCR")).length;
  }
  static {
    this.\u0275fac = function VinTraceabilityComponent_Factory(t) {
      return new (t || _VinTraceabilityComponent)(\u0275\u0275directiveInject(MockDataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VinTraceabilityComponent, selectors: [["vx-vin-traceability"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "fw-bold", "mb-1", 2, "color", "#0f172a"], [1, "mb-3", 2, "color", "#64748b", "font-size", ".9rem"], [1, "d-flex", "flex-wrap", "gap-2", "mb-3"], [1, "btn", "btn-sm", 3, "btn-primary", "btn-outline-secondary"], [1, "btn", "btn-sm", 3, "click"], [1, "mono", 2, "font-size", ".75rem"], [1, "vx-card", "p-4", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "gap-2", "mb-3"], [1, "mono", "fw-bold", 2, "font-size", "18px", "color", "#2563eb"], [2, "color", "#64748b", "font-size", ".85rem"], [1, "d-flex", "gap-2", "flex-wrap"], [1, "badge"], [1, "badge", 2, "background", "rgba(37,99,235,.1)", "color", "#2563eb"], [1, "d-flex", "flex-wrap", "gap-2", "align-items-center", "mb-2"], [1, "nav", "nav-pills", "gap-1", "mb-3"], [1, "nav-item"], [1, "nav-link", "btn-sm", 3, "click"], [1, "row", "g-2"], [1, "vx-card", "p-4"], [1, "px-2", "py-1", "rounded", "small"], [2, "color", "#2563eb"], [1, "col-12", "col-md-6"], [1, "vx-card", "p-3"], [1, "table", "table-sm", "mb-0", 2, "font-size", ".85rem"], [2, "color", "#64748b"], [1, "mono"], [1, "fw-bold", "mb-3", 2, "color", "#0f172a"], [1, "table", "table-sm", "mb-4", 2, "font-size", ".85rem"], [1, "row", "g-2", "mb-4"], [1, "col-md-6"], [1, "p-3", "rounded", 2, "background", "#f8fafc", "border", "1px solid #e2e8f0"], [1, "small", "text-uppercase", "mb-2", 2, "color", "#64748b", "font-size", ".7rem", "font-weight", "700"], [1, "small", "mb-1"], [1, "small", "p-2", "rounded", "mb-1", 2, "background", "rgba(217,119,6,.08)", "border-left", "3px solid #d97706"], [1, "d-flex", "align-items-center", "gap-2", "mb-2"], [1, "mt-4", "p-3", "rounded"], [1, "d-inline-flex", "align-items-center", "justify-content-center", "rounded-circle", "text-white", 2, "width", "22px", "height", "22px", "font-size", ".75rem"], [1, "small"], [1, "mb-2", "small", 2, "color", "#059669"], [1, "btn", "btn-primary", "btn-sm"], [1, "mb-0", "small", 2, "color", "#dc2626"]], template: function VinTraceabilityComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5", 0);
        \u0275\u0275text(1, "VIN Traceability \u2014 Digital Thread");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "p", 1);
        \u0275\u0275text(3, "Signature feature: full lifecycle genealogy per VIN. Select a VIN, then explore summary, genealogy, and release gating.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275repeaterCreate(5, VinTraceabilityComponent_For_6_Template, 3, 5, "button", 3, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, VinTraceabilityComponent_Conditional_7_Template, 30, 25);
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.mock.vins);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(7, (tmp_1_0 = ctx.selected()) ? 7 : -1, tmp_1_0);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.mono[_ngcontent-%COMP%] {\n  font-family: ui-monospace, monospace;\n}\n/*# sourceMappingURL=vin-traceability.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VinTraceabilityComponent, { className: "VinTraceabilityComponent", filePath: "src/app/pages/vin-traceability/vin-traceability.component.ts", lineNumber: 121 });
})();
export {
  VinTraceabilityComponent
};
//# sourceMappingURL=chunk-XTMCQSSA.js.map
