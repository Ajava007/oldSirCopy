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
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-UYLOIQ7B.js";

// src/app/pages/quality/quality.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.subgroup;
function QualityComponent_Conditional_17_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 8);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1.part);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1.operation);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", i_r1.result === "PASS" ? "rgba(111,191,115,.18)" : i_r1.result === "FAIL" ? "rgba(212,106,90,.18)" : "rgba(212,168,74,.18)")("color", i_r1.result === "PASS" ? "#6fbf73" : i_r1.result === "FAIL" ? "#d46a5a" : "#d4a84a");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r1.result);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1.inspector);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1.date);
  }
}
function QualityComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 7)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Inspection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Part / Vehicle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Operation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Result");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Inspector");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, QualityComponent_Conditional_17_For_18_Template, 14, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.mock.inspections);
  }
}
function QualityComponent_Conditional_18_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 11);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 12);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r3.vin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r3.category);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", d_r3.severity === "Critical" ? "rgba(212,106,90,.2)" : d_r3.severity === "Major" ? "rgba(212,168,74,.2)" : "rgba(123,168,184,.2)")("color", d_r3.severity === "Critical" ? "#d46a5a" : d_r3.severity === "Major" ? "#d4a84a" : "#7ba8b8");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r3.severity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r3.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r3.status);
  }
}
function QualityComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 7)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Defect");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "VIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Severity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, QualityComponent_Conditional_18_For_18_Template, 15, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.mock.defects);
  }
}
function QualityComponent_Conditional_19_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 8);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r4.vin);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", n_r4.status === "CLOSED" ? "rgba(111,191,115,.18)" : "rgba(196,112,70,.18)")("color", n_r4.status === "CLOSED" ? "#6fbf73" : "#c47046");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r4.owner);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r4.due);
  }
}
function QualityComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 7)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "NCR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "VIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Stage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Owner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Due");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, QualityComponent_Conditional_19_For_18_Template, 14, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p", 13);
    \u0275\u0275text(20, "NCR lifecycle: Created \u2192 Containment \u2192 Investigation \u2192 Root Cause \u2192 Corrective Action \u2192 Rework/Disposition \u2192 Verification \u2192 Closed. A reworked vehicle must be reinspected.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.mock.ncrs);
  }
}
function QualityComponent_Conditional_20_For_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 32);
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("cx", ctx_r1.xPos(p_r5.subgroup))("cy", ctx_r1.yX(p_r5.xbar))("fill", p_r5.outOfControl ? "#d46a5a" : "#2563eb")("stroke", p_r5.outOfControl ? "#d46a5a" : "#1e40af");
  }
}
function QualityComponent_Conditional_20_For_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 37);
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("cx", ctx_r1.xPos(p_r6.subgroup))("cy", ctx_r1.yR(p_r6.range));
  }
}
function QualityComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 15)(2, "div", 16)(3, "h6", 17);
    \u0275\u0275text(4, "Characteristic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18)(6, "strong");
    \u0275\u0275text(7, "Wheel stud torque");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " \u2014 Subgroup size n=5, 25 subgroups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 19);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "hr");
    \u0275\u0275elementStart(12, "h6", 17);
    \u0275\u0275text(13, "Process Capability");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 20)(15, "span");
    \u0275\u0275text(16, "Cp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 20)(20, "span");
    \u0275\u0275text(21, "Cpk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 20)(25, "span");
    \u0275\u0275text(26, "\u03C3\u0302 (from R\u0304/d\u2082)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 20)(30, "span");
    \u0275\u0275text(31, "X\u0304\u0304 (center line)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "strong");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 20)(35, "span");
    \u0275\u0275text(36, "R\u0304");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "strong");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 21)(40, "span");
    \u0275\u0275text(41, "Out-of-control points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "strong");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "p", 22);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 23)(47, "div", 24)(48, "h6", 0);
    \u0275\u0275text(49, "X\u0304 Chart (subgroup means)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p", 25);
    \u0275\u0275text(51, "UCL = X\u0304\u0304 + A\u2082\xB7R\u0304 \xA0|\xA0 LCL = X\u0304\u0304 \u2212 A\u2082\xB7R\u0304 (A\u2082=0.577 for n=5). Red points = out of control.");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(52, "svg", 26);
    \u0275\u0275element(53, "line", 27);
    \u0275\u0275elementStart(54, "text", 28);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "line", 29);
    \u0275\u0275elementStart(57, "text", 30);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "line", 27);
    \u0275\u0275elementStart(60, "text", 28);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "polyline", 31);
    \u0275\u0275repeaterCreate(63, QualityComponent_Conditional_20_For_64_Template, 1, 4, ":svg:circle", 32, _forTrack1);
    \u0275\u0275element(65, "line", 33)(66, "line", 34);
    \u0275\u0275elementStart(67, "text", 35);
    \u0275\u0275text(68, "Subgroup");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(69, "div", 16)(70, "h6", 0);
    \u0275\u0275text(71, "R Chart (subgroup ranges)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "p", 25);
    \u0275\u0275text(73, "UCL = D\u2084\xB7R\u0304 = 2.114\xB7R\u0304 \xA0|\xA0 LCL = D\u2083\xB7R\u0304 = 0 (n=5)");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(74, "svg", 26);
    \u0275\u0275element(75, "line", 27);
    \u0275\u0275elementStart(76, "text", 28);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd();
    \u0275\u0275element(78, "line", 29);
    \u0275\u0275elementStart(79, "text", 30);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd();
    \u0275\u0275element(81, "polyline", 36);
    \u0275\u0275repeaterCreate(82, QualityComponent_Conditional_20_For_83_Template, 1, 2, ":svg:circle", 37, _forTrack1);
    \u0275\u0275element(84, "line", 38)(85, "line", 39);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate3("Target: ", ctx_r1.target, " N\xB7m \xA0|\xA0 USL: ", ctx_r1.usl, " \xA0|\xA0 LSL: ", ctx_r1.lsl, "");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.cp().toFixed(2));
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r1.cpk() < 1.33 ? "#d46a5a" : "#6fbf73");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cpk().toFixed(2));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.sigmaHat());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.xbarBar());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.rbar());
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r1.oocCount() > 0 ? "#d46a5a" : "#6fbf73");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.oocCount());
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.cpk() >= 1.33 ? "#6fbf73" : "#d46a5a");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.cpk() >= 1.33 ? "Process is capable (Cpk \u2265 1.33)." : "Process NOT capable \u2014 Cpk below 1.33 threshold. Investigate special causes.", " ");
    \u0275\u0275advance(7);
    \u0275\u0275attribute("viewBox", "0 0 640 220");
    \u0275\u0275advance();
    \u0275\u0275attribute("y1", ctx_r1.yX(ctx_r1.uclX()))("y2", ctx_r1.yX(ctx_r1.uclX()));
    \u0275\u0275advance();
    \u0275\u0275attribute("y", ctx_r1.yX(ctx_r1.uclX()) + 4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("UCL ", ctx_r1.uclX().toFixed(2), "");
    \u0275\u0275advance();
    \u0275\u0275attribute("y1", ctx_r1.yX(ctx_r1.xbarBar()))("y2", ctx_r1.yX(ctx_r1.xbarBar()));
    \u0275\u0275advance();
    \u0275\u0275attribute("y", ctx_r1.yX(ctx_r1.xbarBar()) + 4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("CL ", ctx_r1.xbarBar().toFixed(2), "");
    \u0275\u0275advance();
    \u0275\u0275attribute("y1", ctx_r1.yX(ctx_r1.lclX()))("y2", ctx_r1.yX(ctx_r1.lclX()));
    \u0275\u0275advance();
    \u0275\u0275attribute("y", ctx_r1.yX(ctx_r1.lclX()) + 4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("LCL ", ctx_r1.lclX().toFixed(2), "");
    \u0275\u0275advance();
    \u0275\u0275attribute("points", ctx_r1.xbarPolyline());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.spcData);
    \u0275\u0275advance(11);
    \u0275\u0275attribute("viewBox", "0 0 640 160");
    \u0275\u0275advance();
    \u0275\u0275attribute("y1", ctx_r1.yR(ctx_r1.uclR()))("y2", ctx_r1.yR(ctx_r1.uclR()));
    \u0275\u0275advance();
    \u0275\u0275attribute("y", ctx_r1.yR(ctx_r1.uclR()) + 4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("UCL ", ctx_r1.uclR().toFixed(2), "");
    \u0275\u0275advance();
    \u0275\u0275attribute("y1", ctx_r1.yR(ctx_r1.rbar()))("y2", ctx_r1.yR(ctx_r1.rbar()));
    \u0275\u0275advance();
    \u0275\u0275attribute("y", ctx_r1.yR(ctx_r1.rbar()) + 4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("R\u0304 ", ctx_r1.rbar().toFixed(2), "");
    \u0275\u0275advance();
    \u0275\u0275attribute("points", ctx_r1.rPolyline());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.spcData);
  }
}
function mulberry32(seed) {
  return function() {
    seed |= 0;
    seed = seed + 1831565813 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
var QualityComponent = class _QualityComponent {
  constructor(mock) {
    this.mock = mock;
    this.tab = signal("inspections");
    this.target = 100;
    this.usl = 106;
    this.lsl = 94;
    this.n = 5;
    this.A2 = 0.577;
    this.D3 = 0;
    this.D4 = 2.114;
    this.d2 = 2.326;
    this.spcData = [];
    this.xbarBar = computed(() => this.spcData.reduce((a, p) => a + p.xbar, 0) / this.spcData.length);
    this.rbar = computed(() => this.spcData.reduce((a, p) => a + p.range, 0) / this.spcData.length);
    this.uclX = computed(() => this.xbarBar() + this.A2 * this.rbar());
    this.lclX = computed(() => this.xbarBar() - this.A2 * this.rbar());
    this.uclR = computed(() => this.D4 * this.rbar());
    this.lclR = computed(() => this.D3 * this.rbar());
    this.sigmaHat = computed(() => this.rbar() / this.d2);
    this.cp = computed(() => (this.usl - this.lsl) / (6 * this.sigmaHat()));
    this.cpk = computed(() => {
      const upper = (this.usl - this.xbarBar()) / (3 * this.sigmaHat());
      const lower = (this.xbarBar() - this.lsl) / (3 * this.sigmaHat());
      return Math.min(upper, lower);
    });
    this.oocCount = computed(() => this.spcData.filter((p) => p.xbar > this.uclX() || p.xbar < this.lclX()).length);
    this.xbarPolyline = computed(() => this.spcData.map((p) => `${this.xPos(p.subgroup)},${this.yX(p.xbar)}`).join(" "));
    this.rPolyline = computed(() => this.spcData.map((p) => `${this.xPos(p.subgroup)},${this.yR(p.range)}`).join(" "));
    const rand = mulberry32(42);
    const sigma = 2.2;
    for (let s = 1; s <= 25; s++) {
      const readings = [];
      for (let i = 0; i < this.n; i++) {
        const meanShift = s >= 18 ? 3.5 : 0;
        const u1 = rand(), u2 = rand();
        const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
        readings.push(this.target + meanShift + z * sigma);
      }
      const xbar = readings.reduce((a, b) => a + b, 0) / this.n;
      const range = Math.max(...readings) - Math.min(...readings);
      this.spcData.push({ subgroup: s, xbar, range, outOfControl: false });
    }
  }
  xPos(s) {
    return 40 + (s - 1) * (580 / 24);
  }
  yX(v) {
    const min = this.lclX() - 1, max = this.uclX() + 1;
    return 190 - (v - min) / (max - min) * 170;
  }
  yR(v) {
    const max = this.uclR() * 1.15;
    return 130 - v / max * 115;
  }
  // outOfControl flag used in template via direct comparison (template checks p.outOfControl which is always false;
  // we instead color by computed comparison — but template uses p.outOfControl, so set it here)
  ngOnInit() {
    this.spcData.forEach((p) => {
      p.outOfControl = p.xbar > this.uclX() || p.xbar < this.lclX();
    });
  }
  static {
    this.\u0275fac = function QualityComponent_Factory(t) {
      return new (t || _QualityComponent)(\u0275\u0275directiveInject(MockDataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QualityComponent, selectors: [["vx-quality"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 12, consts: [[1, "fw-bold", "mb-1"], [1, "text-muted", "small", "mb-3"], [1, "nav", "nav-pills", "gap-1", "mb-3"], [1, "nav-item"], [1, "nav-link", "btn-sm", 2, "color", "#e8e5df", 3, "click"], [1, "vx-card", "p-0", "overflow-auto"], [1, "row", "g-3"], [1, "table", "vx-table", "table-hover", "mb-0"], [1, "mono"], [1, "badge"], [1, "mono", "small"], [1, "small"], [1, "badge", "text-bg-secondary"], [1, "small", "text-muted", "p-2", "mb-0"], [1, "fw-semibold"], [1, "col-md-4"], [1, "vx-card", "p-3"], [1, "fw-bold", "mb-2"], [1, "mb-1", "small"], [1, "mb-1", "small", "text-muted"], [1, "d-flex", "justify-content-between", "small", "mb-1"], [1, "d-flex", "justify-content-between", "small"], [1, "small", "mt-2", "mb-0"], [1, "col-md-8"], [1, "vx-card", "p-3", "mb-3"], [1, "small", "text-muted", "mb-2"], [2, "width", "100%", "height", "auto", "background", "#fafafa", "border-radius", "8px"], ["x1", "40", "x2", "620", "stroke", "#d46a5a", "stroke-width", "1", "stroke-dasharray", "4,3"], ["x", "622", "font-size", "9", "fill", "#d46a5a"], ["x1", "40", "x2", "620", "stroke", "#7ba8b8", "stroke-width", "1.5"], ["x", "622", "font-size", "9", "fill", "#7ba8b8"], ["fill", "none", "stroke", "#2563eb", "stroke-width", "1.5"], ["r", "3.5", "stroke-width", "1"], ["x1", "40", "y1", "10", "x2", "40", "y2", "200", "stroke", "#999", "stroke-width", "1"], ["x1", "40", "y1", "200", "x2", "620", "y2", "200", "stroke", "#999", "stroke-width", "1"], ["x", "330", "y", "216", "font-size", "10", "fill", "#666", "text-anchor", "middle"], ["fill", "none", "stroke", "#0d9488", "stroke-width", "1.5"], ["r", "3", "fill", "#0d9488", "stroke", "#0f766e", "stroke-width", "1"], ["x1", "40", "y1", "10", "x2", "40", "y2", "140", "stroke", "#999", "stroke-width", "1"], ["x1", "40", "y1", "140", "x2", "620", "y2", "140", "stroke", "#999", "stroke-width", "1"]], template: function QualityComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5", 0);
        \u0275\u0275text(1, "Quality Management (QMS)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "p", 1);
        \u0275\u0275text(3, "Inspections, defects, NCR lifecycle, and Statistical Process Control \u2014 static data.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "ul", 2)(5, "li", 3)(6, "button", 4);
        \u0275\u0275listener("click", function QualityComponent_Template_button_click_6_listener() {
          return ctx.tab.set("inspections");
        });
        \u0275\u0275text(7, "Inspections");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 3)(9, "button", 4);
        \u0275\u0275listener("click", function QualityComponent_Template_button_click_9_listener() {
          return ctx.tab.set("defects");
        });
        \u0275\u0275text(10, "Defects");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "li", 3)(12, "button", 4);
        \u0275\u0275listener("click", function QualityComponent_Template_button_click_12_listener() {
          return ctx.tab.set("ncrs");
        });
        \u0275\u0275text(13, "NCR / Non-Conformance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "li", 3)(15, "button", 4);
        \u0275\u0275listener("click", function QualityComponent_Template_button_click_15_listener() {
          return ctx.tab.set("spc");
        });
        \u0275\u0275text(16, "SPC Charts");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(17, QualityComponent_Conditional_17_Template, 19, 0, "div", 5)(18, QualityComponent_Conditional_18_Template, 19, 0, "div", 5)(19, QualityComponent_Conditional_19_Template, 21, 0, "div", 5)(20, QualityComponent_Conditional_20_Template, 86, 40, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.tab() === "inspections");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.tab() === "defects");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.tab() === "ncrs");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.tab() === "spc");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(17, ctx.tab() === "inspections" ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(18, ctx.tab() === "defects" ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(19, ctx.tab() === "ncrs" ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(20, ctx.tab() === "spc" ? 20 : -1);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n/*# sourceMappingURL=quality.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QualityComponent, { className: "QualityComponent", filePath: "src/app/pages/quality/quality.component.ts", lineNumber: 148 });
})();
export {
  QualityComponent
};
//# sourceMappingURL=chunk-A65MJKS4.js.map
