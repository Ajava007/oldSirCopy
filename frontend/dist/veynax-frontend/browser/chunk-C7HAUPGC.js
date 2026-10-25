import {
  CommonModule,
  computed,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UYLOIQ7B.js";

// src/app/shared/validation/validation-messages.ts
var VALIDATION_MESSAGES = {
  required: () => "This field is required.",
  minlength: (e) => `Must be at least ${e.requiredLength} characters (currently ${e.actualLength}).`,
  maxlength: (e) => `Must be at most ${e.requiredLength} characters.`,
  min: (e) => `Must be ${e.min} or greater.`,
  max: (e) => `Must be ${e.max} or less.`,
  email: () => "Enter a valid email address.",
  pattern: () => "Invalid format.",
  unique: () => "This value is already in use.",
  match: () => "Values do not match."
};
function firstValidationMessage(errors) {
  if (!errors)
    return null;
  const key = Object.keys(errors)[0];
  const fn = VALIDATION_MESSAGES[key];
  return fn ? fn(errors[key]) : "This field is invalid.";
}

// src/app/shared/components/field-error/field-error.component.ts
function FieldErrorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "i", 1);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx);
  }
}
var FieldErrorComponent = class _FieldErrorComponent {
  constructor() {
    this.message = computed(() => {
      const c = this.control;
      if (!c || !c.errors)
        return null;
      if (!(c.touched || c.dirty))
        return null;
      return firstValidationMessage(c.errors);
    });
  }
  static {
    this.\u0275fac = function FieldErrorComponent_Factory(t) {
      return new (t || _FieldErrorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FieldErrorComponent, selectors: [["vx-field-error"]], inputs: { control: "control" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["role", "alert", 1, "d-flex", "align-items-center", "gap-1", "mt-1", 2, "color", "#dc2626", "font-size", ".75rem", "font-weight", "500"], [1, "bi", "bi-exclamation-circle-fill", 2, "font-size", ".7rem"]], template: function FieldErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, FieldErrorComponent_Conditional_0_Template, 4, 1, "div", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional(0, (tmp_0_0 = ctx.message()) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FieldErrorComponent, { className: "FieldErrorComponent", filePath: "src/app/shared/components/field-error/field-error.component.ts", lineNumber: 19 });
})();

export {
  FieldErrorComponent
};
//# sourceMappingURL=chunk-C7HAUPGC.js.map
