import {
  StatusBadgeComponent
} from "./chunk-YFSO6DQS.js";
import {
  ConfirmDialogService
} from "./chunk-QPNR6KY6.js";
import {
  ToastService
} from "./chunk-QQ227YGG.js";
import {
  MockDataService
} from "./chunk-4P265WU7.js";
import {
  CommonModule,
  __async,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-UYLOIQ7B.js";

// src/app/pages/approval-queues/approval-queues.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ApprovalQueuesComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function ApprovalQueuesComponent_For_6_Template_button_click_0_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filter.set(f_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("btn-primary", ctx_r2.filter() === f_r2)("btn-outline-secondary", ctx_r2.filter() !== f_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r2, " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.badgeBg(f_r2))("color", ctx_r2.badgeFg(f_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.countFor(f_r2));
  }
}
function ApprovalQueuesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "No pending approvals in this queue.");
    \u0275\u0275elementEnd();
  }
}
function ApprovalQueuesComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 12);
    \u0275\u0275text(9);
    \u0275\u0275element(10, "vx-status-badge", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 14)(12, "button", 15);
    \u0275\u0275listener("click", function ApprovalQueuesComponent_For_9_Template_button_click_12_listener() {
      const a_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reject(a_r5));
    });
    \u0275\u0275element(13, "i", 16);
    \u0275\u0275text(14, "Reject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 17);
    \u0275\u0275listener("click", function ApprovalQueuesComponent_For_9_Template_button_click_15_listener() {
      const a_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.approve(a_r5));
    });
    \u0275\u0275element(16, "i", 18);
    \u0275\u0275text(17, "Approve");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r5.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r5.detail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Requested by ", a_r5.requestedBy, " \xB7 ", a_r5.date, " \xB7 ");
    \u0275\u0275advance();
    \u0275\u0275property("label", a_r5.priority)("status", a_r5.priority);
  }
}
var ApprovalQueuesComponent = class _ApprovalQueuesComponent {
  constructor(mock, confirm, toast) {
    this.mock = mock;
    this.confirm = confirm;
    this.toast = toast;
    this.filter = signal("ALL");
    this.filters = ["ALL", "PO", "ECR", "QUALITY_RELEASE", "VEHICLE_RELEASE", "MAINTENANCE"];
    this.items = signal([...this.mock.approvalQueues]);
    this.visible = computed(() => this.filter() === "ALL" ? this.items() : this.items().filter((i) => i.type === this.filter()));
  }
  countFor(f) {
    return f === "ALL" ? this.items().length : this.items().filter((i) => i.type === f).length;
  }
  badgeBg(f) {
    return this.filter() === f ? "rgba(255,255,255,.25)" : "#e2e8f0";
  }
  badgeFg(f) {
    return this.filter() === f ? "#ffffff" : "#64748b";
  }
  approve(a) {
    return __async(this, null, function* () {
      const ok = yield this.confirm.confirm({ title: "Approve request", message: `Approve "${a.title}"? This action is logged.`, confirmLabel: "Approve", danger: false });
      if (!ok)
        return;
      this.items.update((list) => list.filter((i) => i.id !== a.id));
      this.toast.success(`Approved ${a.id}.`);
    });
  }
  reject(a) {
    return __async(this, null, function* () {
      const ok = yield this.confirm.confirm({ title: "Reject request", message: `Reject "${a.title}"? The requester will be notified.`, confirmLabel: "Reject", danger: true });
      if (!ok)
        return;
      this.items.update((list) => list.filter((i) => i.id !== a.id));
      this.toast.error(`Rejected ${a.id}.`);
    });
  }
  static {
    this.\u0275fac = function ApprovalQueuesComponent_Factory(t) {
      return new (t || _ApprovalQueuesComponent)(\u0275\u0275directiveInject(MockDataService), \u0275\u0275directiveInject(ConfirmDialogService), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApprovalQueuesComponent, selectors: [["vx-approval-queues"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 1, consts: [[1, "fw-bold", "mb-1", 2, "color", "#0f172a"], [1, "mb-3", 2, "color", "#64748b", "font-size", ".9rem"], [1, "d-flex", "flex-wrap", "gap-2", "mb-3"], [1, "btn", "btn-sm", 3, "btn-primary", "btn-outline-secondary"], [1, "vx-card", "p-5", "text-center", 2, "color", "#94a3b8"], [1, "vx-card", "p-3", "mb-2", "d-flex", "align-items-start", "gap-3", "flex-wrap"], [1, "btn", "btn-sm", 3, "click"], [1, "badge"], [1, "badge", "flex-shrink-0", 2, "background", "rgba(37,99,235,.1)", "color", "#2563eb", "font-size", ".65rem"], [1, "flex-grow-1", 2, "min-width", "200px"], [1, "fw-semibold", "small", 2, "color", "#0f172a"], [1, "small", 2, "color", "#64748b"], [1, "small", "mt-1", 2, "color", "#94a3b8"], [3, "label", "status"], [1, "d-flex", "gap-2", "flex-shrink-0"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-x-lg", "me-1"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "bi", "bi-check-lg", "me-1"]], template: function ApprovalQueuesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5", 0);
        \u0275\u0275text(1, "Approval Queues");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "p", 1);
        \u0275\u0275text(3, "Reusable approval framework \u2014 POs, ECRs, quality/vehicle releases, maintenance. Approve or reject with confirmation.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275repeaterCreate(5, ApprovalQueuesComponent_For_6_Template, 4, 10, "button", 3, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, ApprovalQueuesComponent_Conditional_7_Template, 2, 0, "div", 4);
        \u0275\u0275repeaterCreate(8, ApprovalQueuesComponent_For_9_Template, 18, 7, "div", 5, _forTrack0);
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.filters);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(7, ctx.visible().length === 0 ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.visible());
      }
    }, dependencies: [CommonModule, StatusBadgeComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApprovalQueuesComponent, { className: "ApprovalQueuesComponent", filePath: "src/app/pages/approval-queues/approval-queues.component.ts", lineNumber: 46 });
})();
export {
  ApprovalQueuesComponent
};
//# sourceMappingURL=chunk-AJNIW54F.js.map
