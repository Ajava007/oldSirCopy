import {
  CommonModule,
  computed,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UYLOIQ7B.js";

// src/app/shared/components/status-badge/status-badge.component.ts
var PALETTES = {
  success: { bg: "rgba(5,150,105,.12)", fg: "#059669" },
  warning: { bg: "rgba(217,119,6,.12)", fg: "#d97706" },
  danger: { bg: "rgba(220,38,38,.12)", fg: "#dc2626" },
  info: { bg: "rgba(13,148,136,.12)", fg: "#0d9488" },
  neutral: { bg: "#f1f5f9", fg: "#64748b" },
  primary: { bg: "rgba(37,99,235,.10)", fg: "#2563eb" }
};
var STATUS_MAP = [
  { match: /released|completed|pass|paid|verified|active|running|approved|closed|success|allocated|dispatched|delivered|sold/i, palette: "success" },
  { match: /hold|pending|paused|in_progress|in progress|conditional|submitted|review|open|planned|awaiting/i, palette: "warning" },
  { match: /fail|quarantine|rejected|downtime|critical|major|error|blocked|cancelled|canceled|not_released/i, palette: "danger" },
  { match: /medium|minor|info/i, palette: "info" },
  { match: /high|urgent|priority/i, palette: "primary" }
];
function paletteForStatus(status) {
  if (!status)
    return "neutral";
  for (const m of STATUS_MAP) {
    if (m.match.test(status))
      return m.palette;
  }
  return "neutral";
}
var StatusBadgeComponent = class _StatusBadgeComponent {
  constructor() {
    this.resolvedPalette = computed(() => {
      if (this.palette)
        return this.palette;
      return paletteForStatus(this.status ?? this.label);
    });
    this.styles = computed(() => PALETTES[this.resolvedPalette()]);
  }
  static {
    this.\u0275fac = function StatusBadgeComponent_Factory(t) {
      return new (t || _StatusBadgeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusBadgeComponent, selectors: [["vx-status-badge"]], inputs: { label: "label", palette: "palette", status: "status" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 5, consts: [[1, "badge"]], template: function StatusBadgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("background", ctx.styles().bg)("color", ctx.styles().fg);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.label);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.6rem;\n  border-radius: 9999px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=status-badge.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusBadgeComponent, { className: "StatusBadgeComponent", filePath: "src/app/shared/components/status-badge/status-badge.component.ts", lineNumber: 37 });
})();

export {
  StatusBadgeComponent
};
//# sourceMappingURL=chunk-YFSO6DQS.js.map
