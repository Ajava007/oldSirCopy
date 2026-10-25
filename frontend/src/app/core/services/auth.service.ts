import { Injectable, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { AuthResponse, LoginRequest, RegisterRequest } from '../models/auth';
import { environment } from '../../../environments/environment';

const TOKEN_KEY = 'veynax_token';
const USER_KEY = 'veynax_user';

// Static demo users (used only when environment.useMock === true)
const STATIC_USERS = [
  { username: 'admin', password: 'admin123', fullName: 'System Admin', email: 'admin@veynax.local', role: 'SUPER_ADMIN' },
  { username: 'manager', password: 'manager123', fullName: 'Plant Manager', email: 'mgr@veynax.local', role: 'MANAGER' },
  { username: 'viewer', password: 'viewer123', fullName: 'Read Only User', email: 'view@veynax.local', role: 'VIEWER' }
];

@Injectable({ providedIn: 'root' })
export class AuthService {
  private base = `${environment.apiBaseUrl}/auth`;
  private currentUserSig = signal<AuthResponse | null>(this.loadUser());
  currentUser = this.currentUserSig.asReadonly();
  isAuthenticated = computed(() => !!this.currentUserSig()?.token);

  constructor(private router: Router, private http: HttpClient) {}

  login(req: LoginRequest): Observable<ApiResponse<AuthResponse>> {
    if (environment.useMock) {
      const user = STATIC_USERS.find(u => u.username === req.username && u.password === req.password);
      if (!user) {
        return of({ success: false, message: 'Invalid credentials. Try admin / admin123', data: null as any, timestamp: new Date().toISOString(), errors: ['Invalid credentials'] });
      }
      const auth: AuthResponse = {
        token: 'mock-jwt-' + btoa(user.username + ':' + Date.now()),
        tokenType: 'Bearer', username: user.username, fullName: user.fullName,
        role: user.role, expiresInMs: 86400000
      };
      this.storeSession(auth);
      return of({ success: true, message: 'Login successful (static data)', data: auth, timestamp: new Date().toISOString() });
    }
    return this.http.post<ApiResponse<AuthResponse>>(`${this.base}/login`, req).pipe(
      tap(res => { if (res.success && res.data) this.storeSession(res.data); })
    );
  }

  register(req: RegisterRequest): Observable<ApiResponse<AuthResponse>> {
    if (environment.useMock) {
      const auth: AuthResponse = {
        token: 'mock-jwt-' + btoa(req.username + ':' + Date.now()),
        tokenType: 'Bearer', username: req.username, fullName: req.fullName,
        role: 'VIEWER', expiresInMs: 86400000
      };
      this.storeSession(auth);
      return of({ success: true, message: 'Registered (static — role VIEWER)', data: auth, timestamp: new Date().toISOString() });
    }
    return this.http.post<ApiResponse<AuthResponse>>(`${this.base}/register`, req).pipe(
      tap(res => { if (res.success && res.data) this.storeSession(res.data); })
    );
  }

  getToken(): string | null { return localStorage.getItem(TOKEN_KEY); }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this.currentUserSig.set(null);
    this.router.navigate(['/login']);
  }

  private storeSession(auth: AuthResponse) {
    localStorage.setItem(TOKEN_KEY, auth.token);
    localStorage.setItem(USER_KEY, JSON.stringify(auth));
    this.currentUserSig.set(auth);
  }

  private loadUser(): AuthResponse | null {
    try { const raw = localStorage.getItem(USER_KEY); return raw ? JSON.parse(raw) as AuthResponse : null; } catch { return null; }
  }
}
