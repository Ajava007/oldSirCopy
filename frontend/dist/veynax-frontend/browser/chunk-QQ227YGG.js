import {
  signal,
  ɵɵdefineInjectable
} from "./chunk-UYLOIQ7B.js";

// src/app/core/services/toast.service.ts
var ToastService = class _ToastService {
  constructor() {
    this.toasts = signal([]);
    this.nextId = 1;
  }
  show(type, message) {
    const id = this.nextId++;
    this.toasts.update((list) => [...list, { id, type, message }]);
    setTimeout(() => this.dismiss(id), 4e3);
  }
  success(msg) {
    this.show("success", msg);
  }
  error(msg) {
    this.show("error", msg);
  }
  info(msg) {
    this.show("info", msg);
  }
  dismiss(id) {
    this.toasts.update((list) => list.filter((t) => t.id !== id));
  }
  static {
    this.\u0275fac = function ToastService_Factory(t) {
      return new (t || _ToastService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
  }
};

export {
  ToastService
};
//# sourceMappingURL=chunk-QQ227YGG.js.map
