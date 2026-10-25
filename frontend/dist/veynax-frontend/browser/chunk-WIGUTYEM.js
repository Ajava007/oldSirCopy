import {
  AuthService
} from "./chunk-WUJLGHIB.js";
import {
  Router
} from "./chunk-NGYPB4KR.js";
import {
  FieldErrorComponent
} from "./chunk-C7HAUPGC.js";
import {
  ToastService
} from "./chunk-QQ227YGG.js";
import "./chunk-HGQUEZGA.js";
import "./chunk-OWZPG4BG.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-O3LMM4DO.js";
import {
  CommonModule,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-UYLOIQ7B.js";

// src/app/pages/login/login.component.ts
function LoginComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 13);
    \u0275\u0275text(2, "Full name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 23)(4, "vx-field-error", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12)(6, "label", 13);
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 24)(9, "vx-field-error", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("control", ctx_r0.form.get("fullName"));
    \u0275\u0275advance(5);
    \u0275\u0275property("control", ctx_r0.form.get("email"));
  }
}
function LoginComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
}
var LoginComponent = class _LoginComponent {
  constructor(fb, auth, router, toast) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.toast = toast;
    this.mode = signal("login");
    this.loading = signal(false);
    this.form = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      fullName: [""],
      email: [""]
    });
  }
  submit() {
    if (this.form.invalid) {
      this.toast.error("Please fill in all required fields.");
      return;
    }
    this.loading.set(true);
    const v = this.form.value;
    const req$ = this.mode() === "login" ? this.auth.login({ username: v.username, password: v.password }) : this.auth.register({ username: v.username, email: v.email || "", fullName: v.fullName || v.username, password: v.password });
    req$.subscribe({
      next: (res) => {
        this.loading.set(false);
        if (!res.success) {
          this.toast.error(res.message || "Login failed.");
          return;
        }
        this.toast.success("Welcome, " + (this.auth.currentUser()?.fullName ?? "user"));
        this.router.navigate(["/dashboard"]);
      },
      error: () => this.loading.set(false)
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["vx-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 11, consts: [[1, "d-flex", "align-items-center", "justify-content-center", 2, "min-height", "100vh", "background", "linear-gradient(135deg,#eef2ff 0%,#f0f9ff 50%,#f4f6fb 100%)"], [1, "vx-card", "p-4", "p-md-5", 2, "width", "100%", "max-width", "420px", "box-shadow", "0 20px 50px -20px rgba(37,99,235,.25)"], [1, "text-center", "mb-4"], [1, "d-inline-flex", "align-items-center", "justify-content-center", "mb-3", 2, "width", "56px", "height", "56px", "border-radius", "16px", "background", "linear-gradient(135deg,#2563eb,#0d9488)", "color", "#fff", "box-shadow", "0 8px 20px -6px rgba(37,99,235,.5)"], [1, "bi", "bi-lightning-charge-fill", 2, "font-size", "26px"], [1, "fw-bold", "mb-1", 2, "color", "#0f172a"], [2, "color", "#2563eb"], [1, "mb-0", 2, "color", "#64748b", "font-size", ".85rem"], [1, "nav", "nav-pills", "nav-fill", "mb-3"], [1, "nav-item"], [1, "nav-link", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "mb-2"], [1, "form-label", "small", 2, "color", "#64748b"], ["type", "text", "formControlName", "username", "placeholder", "username", "autocomplete", "username", 1, "form-control"], [3, "control"], [1, "mb-3"], ["type", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "mt-3", "p-2", "rounded", 2, "background", "#f8fafc", "border", "1px solid #e2e8f0"], [1, "small", "text-center", "mb-1", 2, "color", "#64748b"], [1, "small", "text-center", "mb-0", "mono", 2, "color", "#2563eb"], ["type", "text", "formControlName", "fullName", "placeholder", "Jane Engineer", 1, "form-control"], ["type", "email", "formControlName", "email", "placeholder", "jane@veynax.com", 1, "form-control"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h3", 5);
        \u0275\u0275text(6, "VeynaX ");
        \u0275\u0275elementStart(7, "span", 6);
        \u0275\u0275text(8, "AMMS");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "p", 7);
        \u0275\u0275text(10, "Automotive Manufacturing Management System");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "ul", 8)(12, "li", 9)(13, "button", 10);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_13_listener() {
          return ctx.mode.set("login");
        });
        \u0275\u0275text(14, "Login");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "li", 9)(16, "button", 10);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_16_listener() {
          return ctx.mode.set("register");
        });
        \u0275\u0275text(17, "Register");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "form", 11);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_18_listener() {
          return ctx.submit();
        });
        \u0275\u0275template(19, LoginComponent_Conditional_19_Template, 10, 2);
        \u0275\u0275elementStart(20, "div", 12)(21, "label", 13);
        \u0275\u0275text(22, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 14)(24, "vx-field-error", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 16)(26, "label", 13);
        \u0275\u0275text(27, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "input", 17)(29, "vx-field-error", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "button", 18);
        \u0275\u0275template(31, LoginComponent_Conditional_31_Template, 1, 0, "span", 19);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 20)(34, "p", 21);
        \u0275\u0275text(35, "Demo logins \u2014 no backend needed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "p", 22);
        \u0275\u0275text(37, "admin/admin123 \xB7 manager/manager123 \xB7 viewer/viewer123");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275classProp("active", ctx.mode() === "login");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.mode() === "register");
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275conditional(19, ctx.mode() === "register" ? 19 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("control", ctx.form.get("username"));
        \u0275\u0275advance(5);
        \u0275\u0275property("control", ctx.form.get("password"));
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(31, ctx.loading() ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.mode() === "login" ? "Sign in" : "Create account", " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FieldErrorComponent], styles: ["\n\n.mono[_ngcontent-%COMP%] {\n  font-family: ui-monospace, monospace;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/login/login.component.ts", lineNumber: 66 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-WIGUTYEM.js.map
