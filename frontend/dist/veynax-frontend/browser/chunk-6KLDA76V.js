import {
  RouterLink
} from "./chunk-NGYPB4KR.js";
import "./chunk-OWZPG4BG.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-UYLOIQ7B.js";

// src/app/pages/not-found/not-found.component.ts
var NotFoundComponent = class _NotFoundComponent {
  static {
    this.\u0275fac = function NotFoundComponent_Factory(t) {
      return new (t || _NotFoundComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["vx-not-found"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 0, consts: [[1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "text-center", 2, "min-height", "60vh"], [1, "display-1", "fw-bold", 2, "color", "#2563eb"], [1, "fw-bold", 2, "color", "#0f172a"], [1, "mb-4", 2, "color", "#64748b", "max-width", "360px"], ["routerLink", "/dashboard", 1, "btn", "btn-primary"]], template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275text(2, "404");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "h5", 2);
        \u0275\u0275text(4, "Page not found");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "The route you requested doesn't exist in this build. It may be planned for a later phase.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "a", 4);
        \u0275\u0275text(8, "Back to dashboard");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src/app/pages/not-found/not-found.component.ts", lineNumber: 17 });
})();
export {
  NotFoundComponent
};
//# sourceMappingURL=chunk-6KLDA76V.js.map
