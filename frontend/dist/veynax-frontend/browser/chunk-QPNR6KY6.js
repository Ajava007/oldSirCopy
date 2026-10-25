import {
  signal,
  ɵɵdefineInjectable
} from "./chunk-UYLOIQ7B.js";

// src/app/shared/services/confirm-dialog.service.ts
var ConfirmDialogService = class _ConfirmDialogService {
  constructor() {
    this.state = signal({ open: false, message: "", resolve: null });
  }
  confirm(options) {
    return new Promise((resolve) => {
      this.state.set({
        open: true,
        title: options.title ?? "Confirm action",
        message: options.message,
        confirmLabel: options.confirmLabel ?? "Confirm",
        cancelLabel: options.cancelLabel ?? "Cancel",
        danger: options.danger ?? true,
        resolve
      });
    });
  }
  close(result) {
    const resolve = this.state().resolve;
    this.state.set({ open: false, message: "", resolve: null });
    if (resolve)
      resolve(result);
  }
  static {
    this.\u0275fac = function ConfirmDialogService_Factory(t) {
      return new (t || _ConfirmDialogService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfirmDialogService, factory: _ConfirmDialogService.\u0275fac, providedIn: "root" });
  }
};

export {
  ConfirmDialogService
};
//# sourceMappingURL=chunk-QPNR6KY6.js.map
