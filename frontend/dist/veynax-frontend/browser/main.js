import {
  AuthService
} from "./chunk-WUJLGHIB.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-NGYPB4KR.js";
import {
  ToastService
} from "./chunk-QQ227YGG.js";
import "./chunk-HGQUEZGA.js";
import {
  provideHttpClient,
  withInterceptors
} from "./chunk-OWZPG4BG.js";
import {
  catchError,
  inject,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-UYLOIQ7B.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["vx-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 10 });
})();

// src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isAuthenticated())
    return true;
  return router.parseUrl("/login");
};

// src/app/app.routes.ts
var routes = [
  { path: "login", loadComponent: () => import("./chunk-WIGUTYEM.js").then((m) => m.LoginComponent) },
  {
    path: "",
    loadComponent: () => import("./chunk-XXDW4T2K.js").then((m) => m.AdminLayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", loadComponent: () => import("./chunk-LVTFLUOD.js").then((m) => m.DashboardComponent) },
      { path: "master-data/organizations", loadComponent: () => import("./chunk-XLLN7QXH.js").then((m) => m.OrganizationComponent) },
      { path: "master-data/factories", loadComponent: () => import("./chunk-DUB6F6TB.js").then((m) => m.FactoryComponent) },
      { path: "master-data/vehicle-models", loadComponent: () => import("./chunk-O5ZLNKXV.js").then((m) => m.VehicleModelComponent) },
      { path: "vehicle-config", loadComponent: () => import("./chunk-F2SCGME6.js").then((m) => m.VehicleConfigComponent) },
      { path: "engineering", loadComponent: () => import("./chunk-7H5LUY5K.js").then((m) => m.EngineeringComponent) },
      { path: "supply-chain", loadComponent: () => import("./chunk-NR6T66JM.js").then((m) => m.SupplyChainComponent) },
      { path: "inventory", loadComponent: () => import("./chunk-65BDFTXH.js").then((m) => m.InventoryComponent) },
      { path: "production", loadComponent: () => import("./chunk-BWPFA3CZ.js").then((m) => m.ProductionComponent) },
      { path: "quality", loadComponent: () => import("./chunk-A65MJKS4.js").then((m) => m.QualityComponent) },
      { path: "vin-traceability", loadComponent: () => import("./chunk-XTMCQSSA.js").then((m) => m.VinTraceabilityComponent) },
      { path: "sales-payments", loadComponent: () => import("./chunk-EH5C4CZK.js").then((m) => m.SalesPaymentsComponent) },
      { path: "finished-vehicles", loadComponent: () => import("./chunk-RLPKTZYJ.js").then((m) => m.FinishedVehiclesComponent) },
      { path: "workforce", loadComponent: () => import("./chunk-FUQ6F3XC.js").then((m) => m.WorkforceComponent) },
      { path: "maintenance", loadComponent: () => import("./chunk-VO2TUVRG.js").then((m) => m.MaintenanceComponent) },
      { path: "reports", loadComponent: () => import("./chunk-3DBXXGPN.js").then((m) => m.ReportsComponent) },
      { path: "approval-queues", loadComponent: () => import("./chunk-AJNIW54F.js").then((m) => m.ApprovalQueuesComponent) },
      { path: "scheduling", loadComponent: () => import("./chunk-F6Q5L3FX.js").then((m) => m.SchedulingComponent) },
      { path: "safety", loadComponent: () => import("./chunk-BJRTKOFC.js").then((m) => m.SafetyComponent) },
      { path: "audit-log", loadComponent: () => import("./chunk-GZ4GORDL.js").then((m) => m.AuditLogComponent) }
    ]
  },
  { path: "**", loadComponent: () => import("./chunk-6KLDA76V.js").then((m) => m.NotFoundComponent) }
];

// src/app/core/interceptors/jwt.interceptor.ts
var jwtInterceptor = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.getToken();
  if (token) {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
  return next(req);
};

// src/app/core/interceptors/error.interceptor.ts
var errorInterceptor = (req, next) => {
  const toast = inject(ToastService);
  const auth = inject(AuthService);
  return next(req).pipe(catchError((err) => {
    if (err.status === 401) {
      toast.error("Session expired. Please log in again.");
      auth.logout();
    } else if (err.status === 403) {
      toast.error("You do not have permission for this action.");
    } else if (err.error?.errors?.length) {
      toast.error(err.error.errors[0]);
    } else if (err.error?.message) {
      toast.error(err.error.message);
    } else {
      toast.error("An unexpected error occurred.");
    }
    return throwError(() => err);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([jwtInterceptor, errorInterceptor]))
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
