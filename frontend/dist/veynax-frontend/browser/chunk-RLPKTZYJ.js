import {
  MockDataService
} from "./chunk-4P265WU7.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UYLOIQ7B.js";

// src/app/pages/finished-vehicles/finished-vehicles.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function FinishedVehiclesComponent_For_9_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(slot_r2.vin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slot_r2.model);
  }
}
function FinishedVehiclesComponent_For_9_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, "empty");
    \u0275\u0275elementEnd();
  }
}
function FinishedVehiclesComponent_For_9_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function FinishedVehiclesComponent_For_9_For_5_Template_div_click_0_listener() {
      const slot_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectedSlot.set(slot_r2));
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, FinishedVehiclesComponent_For_9_For_5_Conditional_3_Template, 4, 2)(4, FinishedVehiclesComponent_For_9_For_5_Conditional_4_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", ctx_r2.slotBg(slot_r2))("border-color", ctx_r2.slotBorder(slot_r2));
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r2.slotTextColor(slot_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(slot_r2.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, slot_r2.vin ? 3 : 4);
  }
}
function FinishedVehiclesComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275repeaterCreate(4, FinishedVehiclesComponent_For_9_For_5_Template, 5, 8, "div", 16, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Row ", row_r4, "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.slotsByRow(row_r4));
  }
}
function FinishedVehiclesComponent_Conditional_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
    \u0275\u0275elementStart(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.vin);
  }
}
function FinishedVehiclesComponent_Conditional_23_Conditional_4_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Vehicle cannot be dispatched \u2014 release status: ", s_r5.releaseStatus, ".");
  }
}
function FinishedVehiclesComponent_Conditional_23_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "span", 26);
    \u0275\u0275text(3, "Model:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 25)(7, "span", 26);
    \u0275\u0275text(8, "Quality:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 25)(12, "span", 26);
    \u0275\u0275text(13, "Release:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 25)(17, "span", 26);
    \u0275\u0275text(18, "Sales:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 25)(22, "span", 26);
    \u0275\u0275text(23, "Allocation:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "strong");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(26, FinishedVehiclesComponent_Conditional_23_Conditional_4_Conditional_26_Template, 3, 1, "p", 27);
  }
  if (rf & 2) {
    const s_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r5.model);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r5.qualityStatus);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r5.releaseStatus);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r5.salesStatus);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r5.allocationStatus);
    \u0275\u0275advance();
    \u0275\u0275conditional(26, s_r5.releaseStatus !== "RELEASED" ? 26 : -1);
  }
}
function FinishedVehiclesComponent_Conditional_23_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, "Empty slot \u2014 available for finished vehicle parking.");
    \u0275\u0275elementEnd();
  }
}
function FinishedVehiclesComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h6", 22);
    \u0275\u0275text(2);
    \u0275\u0275template(3, FinishedVehiclesComponent_Conditional_23_Conditional_3_Template, 3, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FinishedVehiclesComponent_Conditional_23_Conditional_4_Template, 27, 6)(5, FinishedVehiclesComponent_Conditional_23_Conditional_5_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Slot ", s_r5.id, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(3, s_r5.vin ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, s_r5.vin ? 4 : 5);
  }
}
function FinishedVehiclesComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 30);
    \u0275\u0275listener("click", function FinishedVehiclesComponent_For_44_Template_tr_click_0_listener() {
      const s_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedSlot.set(s_r7));
    });
    \u0275\u0275elementStart(1, "td", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const s_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("cursor", "pointer");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_12_0 = s_r7.vin) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r7.model);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.badge(s_r7.qualityStatus).bg)("color", ctx_r2.badge(s_r7.qualityStatus).fg);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r7.qualityStatus);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r7.releaseStatus);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r7.salesStatus);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r7.allocationStatus);
  }
}
var FinishedVehiclesComponent = class _FinishedVehiclesComponent {
  constructor(mock) {
    this.mock = mock;
    this.selectedSlot = signal(null);
  }
  rows() {
    return [...new Set(this.mock.yardSlots.map((s) => s.row))];
  }
  slotsByRow(r) {
    return this.mock.yardSlots.filter((s) => s.row === r);
  }
  slotBg(s) {
    return s.vin ? this.slotColor(s).bg : "#f8fafc";
  }
  slotBorder(s) {
    return s.vin ? this.slotColor(s).border : "#e2e8f0";
  }
  slotTextColor(s) {
    return s.vin ? "#ffffff" : "#94a3b8";
  }
  slotColor(s) {
    if (s.qualityStatus === "RELEASED")
      return { bg: "#059669", border: "#059669" };
    if (s.qualityStatus === "HOLD")
      return { bg: "#d97706", border: "#d97706" };
    if (s.qualityStatus === "QUARANTINE")
      return { bg: "#dc2626", border: "#dc2626" };
    return { bg: "#f8fafc", border: "#e2e8f0" };
  }
  badge(status) {
    if (status === "RELEASED")
      return { bg: "rgba(5,150,105,.12)", fg: "#059669" };
    if (status === "HOLD")
      return { bg: "rgba(217,119,6,.12)", fg: "#d97706" };
    if (status === "QUARANTINE")
      return { bg: "rgba(220,38,38,.12)", fg: "#dc2626" };
    return { bg: "#f1f5f9", fg: "#94a3b8" };
  }
  static {
    this.\u0275fac = function FinishedVehiclesComponent_Factory(t) {
      return new (t || _FinishedVehiclesComponent)(\u0275\u0275directiveInject(MockDataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FinishedVehiclesComponent, selectors: [["vx-finished-vehicles"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 45, vars: 1, consts: [[1, "fw-bold", "mb-1", 2, "color", "#0f172a"], [1, "mb-3", 2, "color", "#64748b", "font-size", ".9rem"], [1, "vx-card", "p-4", "mb-3"], [1, "fw-bold", "mb-3", 2, "color", "#0f172a"], [1, "d-flex", "flex-wrap", "gap-3"], [1, "d-flex", "gap-3", "mt-3", "small", 2, "color", "#64748b"], [1, "d-inline-block", "rounded", "me-1", 2, "width", "12px", "height", "12px", "background", "#059669"], [1, "d-inline-block", "rounded", "me-1", 2, "width", "12px", "height", "12px", "background", "#d97706"], [1, "d-inline-block", "rounded", "me-1", 2, "width", "12px", "height", "12px", "background", "#dc2626"], [1, "d-inline-block", "rounded", "me-1", 2, "width", "12px", "height", "12px", "background", "#f8fafc", "border", "1px solid #e2e8f0"], [1, "vx-card", "p-4", "mb-3", 2, "border-left", "4px solid #2563eb"], [1, "vx-card", "p-0", "overflow-auto"], [1, "table", "vx-table", "table-hover", "mb-0"], [3, "cursor"], [1, "text-center", "text-uppercase", "mb-1", 2, "color", "#94a3b8", "font-size", ".65rem", "font-weight", "700"], [1, "d-flex", "gap-2"], [1, "rounded-2", "border", "d-flex", "flex-column", "justify-content-between", "p-2", 2, "width", "120px", "min-height", "84px", "cursor", "pointer", 3, "background", "border-color"], [1, "rounded-2", "border", "d-flex", "flex-column", "justify-content-between", "p-2", 2, "width", "120px", "min-height", "84px", "cursor", "pointer", 3, "click"], [1, "mono", 2, "font-size", ".6rem"], [1, "mono", "fw-bold", 2, "font-size", ".62rem", "color", "#fff", "word-break", "break-all"], [2, "font-size", ".6rem", "color", "rgba(255,255,255,.85)"], [1, "text-center", 2, "color", "#cbd5e1", "font-size", ".7rem", "margin-top", "1rem"], [1, "fw-bold", "mb-2", 2, "color", "#0f172a"], [1, "mono"], [1, "row", "g-2", "small"], [1, "col-6", "col-md-3"], [2, "color", "#64748b"], [1, "small", "mt-2", "mb-0", 2, "color", "#dc2626"], [1, "bi", "bi-exclamation-triangle", "me-1"], [1, "small", "mb-0", 2, "color", "#94a3b8"], [3, "click"], [1, "mono", "fw-bold"], [1, "badge"]], template: function FinishedVehiclesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5", 0);
        \u0275\u0275text(1, "Finished Vehicle Yard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "p", 1);
        \u0275\u0275text(3, "Yard visibility \u2014 VIN \xD7 position \xD7 quality / release / sales / allocation status. Phase 2A.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "h6", 3);
        \u0275\u0275text(6, "Yard map");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275repeaterCreate(8, FinishedVehiclesComponent_For_9_Template, 6, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 5)(11, "span");
        \u0275\u0275element(12, "span", 6);
        \u0275\u0275text(13, "Released");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span");
        \u0275\u0275element(15, "span", 7);
        \u0275\u0275text(16, "Hold");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span");
        \u0275\u0275element(18, "span", 8);
        \u0275\u0275text(19, "Quarantine");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span");
        \u0275\u0275element(21, "span", 9);
        \u0275\u0275text(22, "Empty");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(23, FinishedVehiclesComponent_Conditional_23_Template, 6, 3, "div", 10);
        \u0275\u0275elementStart(24, "div", 11)(25, "table", 12)(26, "thead")(27, "tr")(28, "th");
        \u0275\u0275text(29, "Slot");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "th");
        \u0275\u0275text(31, "VIN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "th");
        \u0275\u0275text(33, "Model");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "th");
        \u0275\u0275text(35, "Quality");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "th");
        \u0275\u0275text(37, "Release");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "th");
        \u0275\u0275text(39, "Sales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "th");
        \u0275\u0275text(41, "Allocation");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "tbody");
        \u0275\u0275repeaterCreate(43, FinishedVehiclesComponent_For_44_Template, 16, 13, "tr", 13, _forTrack0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.rows());
        \u0275\u0275advance(15);
        \u0275\u0275conditional(23, (tmp_1_0 = ctx.selectedSlot()) ? 23 : -1, tmp_1_0);
        \u0275\u0275advance(20);
        \u0275\u0275repeater(ctx.mock.yardSlots);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.mono[_ngcontent-%COMP%] {\n  font-family: ui-monospace, monospace;\n}\n/*# sourceMappingURL=finished-vehicles.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FinishedVehiclesComponent, { className: "FinishedVehiclesComponent", filePath: "src/app/pages/finished-vehicles/finished-vehicles.component.ts", lineNumber: 85 });
})();
export {
  FinishedVehiclesComponent
};
//# sourceMappingURL=chunk-RLPKTZYJ.js.map
