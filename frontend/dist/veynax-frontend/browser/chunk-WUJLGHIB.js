import {
  Router
} from "./chunk-NGYPB4KR.js";
import {
  environment
} from "./chunk-HGQUEZGA.js";
import {
  HttpClient
} from "./chunk-OWZPG4BG.js";
import {
  computed,
  of,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UYLOIQ7B.js";

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "veynax_token";
var USER_KEY = "veynax_user";
var STATIC_USERS = [
  { username: "admin", password: "admin123", fullName: "System Admin", email: "admin@veynax.local", role: "SUPER_ADMIN" },
  { username: "manager", password: "manager123", fullName: "Plant Manager", email: "mgr@veynax.local", role: "MANAGER" },
  { username: "viewer", password: "viewer123", fullName: "Read Only User", email: "view@veynax.local", role: "VIEWER" }
];
var AuthService = class _AuthService {
  constructor(router, http) {
    this.router = router;
    this.http = http;
    this.base = `${environment.apiBaseUrl}/auth`;
    this.currentUserSig = signal(this.loadUser());
    this.currentUser = this.currentUserSig.asReadonly();
    this.isAuthenticated = computed(() => !!this.currentUserSig()?.token);
  }
  login(req) {
    if (environment.useMock) {
      const user = STATIC_USERS.find((u) => u.username === req.username && u.password === req.password);
      if (!user) {
        return of({ success: false, message: "Invalid credentials. Try admin / admin123", data: null, timestamp: (/* @__PURE__ */ new Date()).toISOString(), errors: ["Invalid credentials"] });
      }
      const auth = {
        token: "mock-jwt-" + btoa(user.username + ":" + Date.now()),
        tokenType: "Bearer",
        username: user.username,
        fullName: user.fullName,
        role: user.role,
        expiresInMs: 864e5
      };
      this.storeSession(auth);
      return of({ success: true, message: "Login successful (static data)", data: auth, timestamp: (/* @__PURE__ */ new Date()).toISOString() });
    }
    return this.http.post(`${this.base}/login`, req).pipe(tap((res) => {
      if (res.success && res.data)
        this.storeSession(res.data);
    }));
  }
  register(req) {
    if (environment.useMock) {
      const auth = {
        token: "mock-jwt-" + btoa(req.username + ":" + Date.now()),
        tokenType: "Bearer",
        username: req.username,
        fullName: req.fullName,
        role: "VIEWER",
        expiresInMs: 864e5
      };
      this.storeSession(auth);
      return of({ success: true, message: "Registered (static \u2014 role VIEWER)", data: auth, timestamp: (/* @__PURE__ */ new Date()).toISOString() });
    }
    return this.http.post(`${this.base}/register`, req).pipe(tap((res) => {
      if (res.success && res.data)
        this.storeSession(res.data);
    }));
  }
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this.currentUserSig.set(null);
    this.router.navigate(["/login"]);
  }
  storeSession(auth) {
    localStorage.setItem(TOKEN_KEY, auth.token);
    localStorage.setItem(USER_KEY, JSON.stringify(auth));
    this.currentUserSig.set(auth);
  }
  loadUser() {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(Router), \u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-WUJLGHIB.js.map
