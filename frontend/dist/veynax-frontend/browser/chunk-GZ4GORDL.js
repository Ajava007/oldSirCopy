import {
  PaginationComponent
} from "./chunk-IO5XVC26.js";
import {
  StatusBadgeComponent
} from "./chunk-YFSO6DQS.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-O3LMM4DO.js";
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
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UYLOIQ7B.js";

// src/app/pages/audit-log/audit-log.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AuditLogComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "vx-status-badge", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 12);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 14);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 12);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r1.timestamp);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r1.user);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r1.role);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", a_r1.action)("status", a_r1.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", a_r1.entity, " \xB7 ", a_r1.entityId, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r1.detail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r1.ip);
  }
}
function AuditLogComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 16);
    \u0275\u0275text(2, "No audit entries match your filter.");
    \u0275\u0275elementEnd()();
  }
}
var AuditLogComponent = class _AuditLogComponent {
  constructor(mock) {
    this.mock = mock;
    this.query = signal("");
    this.actionFilter = signal("");
    this.page = signal(1);
    this.pageSize = 5;
    this.filtered = computed(() => {
      const q = this.query().trim().toLowerCase();
      const af = this.actionFilter();
      return this.mock.auditLog.filter((a) => (!af || a.action === af) && (!q || a.user.toLowerCase().includes(q) || a.entity.toLowerCase().includes(q) || a.detail.toLowerCase().includes(q)));
    });
    this.paged = computed(() => this.filtered().slice((this.page() - 1) * this.pageSize, this.page() * this.pageSize));
  }
  static {
    this.\u0275fac = function AuditLogComponent_Factory(t) {
      return new (t || _AuditLogComponent)(\u0275\u0275directiveInject(MockDataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditLogComponent, selectors: [["vx-audit-log"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 44, vars: 7, consts: [[1, "fw-bold", "mb-1", 2, "color", "#0f172a"], [1, "mb-3", 2, "color", "#64748b", "font-size", ".9rem"], [1, "d-flex", "gap-2", "mb-3", "flex-wrap", "align-items-center"], [1, "position-relative", 2, "width", "240px", "max-width", "100%"], [1, "bi", "bi-search", "position-absolute", 2, "left", ".7rem", "top", "50%", "transform", "translateY(-50%)", "color", "#94a3b8", "font-size", ".8rem"], ["type", "text", "placeholder", "Filter by user, entity, action\u2026", 1, "form-control", "form-control-sm", 2, "padding-left", "2rem", "border-radius", "10px", 3, "ngModelChange", "ngModel"], [1, "form-select", "form-select-sm", 2, "width", "160px", "border-radius", "10px", 3, "ngModelChange", "ngModel"], ["value", ""], [1, "small", 2, "color", "#94a3b8"], [1, "vx-card", "p-0", "overflow-auto"], [1, "table", "vx-table", "table-hover", "mb-0"], [3, "pageChange", "totalItems", "pageSize", "currentPage"], [1, "mono", "small"], [1, "fw-semibold"], [1, "small"], [3, "label", "status"], ["colspan", "7", 1, "text-center", "py-4", 2, "color", "#94a3b8"]], template: function AuditLogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5", 0);
        \u0275\u0275text(1, "Audit Log");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "p", 1);
        \u0275\u0275text(3, "Immutable trail \u2014 who changed what, when, from where. Spec \xA736. Append-only; never edited or deleted.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3);
        \u0275\u0275element(6, "i", 4);
        \u0275\u0275elementStart(7, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function AuditLogComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.query, $event) || (ctx.query = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function AuditLogComponent_Template_input_ngModelChange_7_listener() {
          return ctx.page.set(1);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function AuditLogComponent_Template_select_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.actionFilter, $event) || (ctx.actionFilter = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function AuditLogComponent_Template_select_ngModelChange_8_listener() {
          return ctx.page.set(1);
        });
        \u0275\u0275elementStart(9, "option", 7);
        \u0275\u0275text(10, "All actions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "option");
        \u0275\u0275text(12, "CREATE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "option");
        \u0275\u0275text(14, "UPDATE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "option");
        \u0275\u0275text(16, "DELETE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "option");
        \u0275\u0275text(18, "LOGIN");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "span", 8);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 9)(22, "table", 10)(23, "thead")(24, "tr")(25, "th");
        \u0275\u0275text(26, "Timestamp");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "th");
        \u0275\u0275text(28, "User");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "th");
        \u0275\u0275text(30, "Role");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "th");
        \u0275\u0275text(32, "Action");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th");
        \u0275\u0275text(34, "Entity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "th");
        \u0275\u0275text(36, "Detail");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th");
        \u0275\u0275text(38, "IP");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "tbody");
        \u0275\u0275repeaterCreate(40, AuditLogComponent_For_41_Template, 15, 9, "tr", null, _forTrack0);
        \u0275\u0275template(42, AuditLogComponent_Conditional_42_Template, 3, 0, "tr");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "vx-pagination", 11);
        \u0275\u0275listener("pageChange", function AuditLogComponent_Template_vx_pagination_pageChange_43_listener($event) {
          return ctx.page.set($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.query);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.actionFilter);
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate1("", ctx.filtered().length, " entries");
        \u0275\u0275advance(20);
        \u0275\u0275repeater(ctx.paged());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(42, ctx.filtered().length === 0 ? 42 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("totalItems", ctx.filtered().length)("pageSize", 5)("currentPage", ctx.page());
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, StatusBadgeComponent, PaginationComponent], styles: ["\n\n.mono[_ngcontent-%COMP%] {\n  font-family: ui-monospace, monospace;\n}\n/*# sourceMappingURL=audit-log.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditLogComponent, { className: "AuditLogComponent", filePath: "src/app/pages/audit-log/audit-log.component.ts", lineNumber: 51 });
})();
export {
  AuditLogComponent
};
//# sourceMappingURL=chunk-GZ4GORDL.js.map
