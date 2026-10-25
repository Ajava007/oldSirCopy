import {
  CommonModule,
  EventEmitter,
  computed,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate3
} from "./chunk-UYLOIQ7B.js";

// src/app/shared/components/pagination/pagination.component.ts
function PaginationComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function PaginationComponent_For_9_Template_button_click_0_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.go(p_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("btn-primary", p_r2 === ctx_r2.currentPage)("btn-outline-secondary", p_r2 !== ctx_r2.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r2);
  }
}
var PaginationComponent = class _PaginationComponent {
  constructor() {
    this.totalItems = 0;
    this.pageSize = 5;
    this.currentPage = 1;
    this.pageChange = new EventEmitter();
    this.totalPages = computed(() => Math.max(1, Math.ceil(this.totalItems / this.pageSize)));
    this.from = computed(() => (this.currentPage - 1) * this.pageSize + 1);
    this.to = computed(() => Math.min(this.currentPage * this.pageSize, this.totalItems));
  }
  pages() {
    const t = this.totalPages();
    const c = this.currentPage;
    const start = Math.max(1, Math.min(c - 1, t - 2));
    const end = Math.min(t, start + 2);
    const arr = [];
    for (let i = start; i <= end; i++)
      arr.push(i);
    return arr;
  }
  go(p) {
    if (p < 1 || p > this.totalPages() || p === this.currentPage)
      return;
    this.pageChange.emit(p);
  }
  static {
    this.\u0275fac = function PaginationComponent_Factory(t) {
      return new (t || _PaginationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginationComponent, selectors: [["vx-pagination"]], inputs: { totalItems: "totalItems", pageSize: "pageSize", currentPage: "currentPage" }, outputs: { pageChange: "pageChange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 7, consts: [[1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "gap-2", "mt-3"], [1, "small", 2, "color", "#64748b"], [1, "btn-group", "btn-group-sm"], [1, "btn", "btn-outline-secondary", 3, "click", "disabled"], [1, "bi", "bi-chevron-double-left"], [1, "bi", "bi-chevron-left"], [1, "btn", 3, "btn-primary", "btn-outline-secondary"], [1, "bi", "bi-chevron-right"], [1, "bi", "bi-chevron-double-right"], [1, "btn", 3, "click"]], template: function PaginationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
        \u0275\u0275listener("click", function PaginationComponent_Template_button_click_4_listener() {
          return ctx.go(1);
        });
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 3);
        \u0275\u0275listener("click", function PaginationComponent_Template_button_click_6_listener() {
          return ctx.go(ctx.currentPage - 1);
        });
        \u0275\u0275element(7, "i", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(8, PaginationComponent_For_9_Template, 2, 5, "button", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(10, "button", 3);
        \u0275\u0275listener("click", function PaginationComponent_Template_button_click_10_listener() {
          return ctx.go(ctx.currentPage + 1);
        });
        \u0275\u0275element(11, "i", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 3);
        \u0275\u0275listener("click", function PaginationComponent_Template_button_click_12_listener() {
          return ctx.go(ctx.totalPages());
        });
        \u0275\u0275element(13, "i", 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate3("Showing ", ctx.from(), "\u2013", ctx.to(), " of ", ctx.totalItems, " items");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage === 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage === 1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.pages());
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage === ctx.totalPages());
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage === ctx.totalPages());
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "src/app/shared/components/pagination/pagination.component.ts", lineNumber: 23 });
})();

export {
  PaginationComponent
};
//# sourceMappingURL=chunk-IO5XVC26.js.map
