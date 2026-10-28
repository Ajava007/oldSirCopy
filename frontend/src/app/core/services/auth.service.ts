import { Injectable, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { AuthResponse, BackendLoginResponse, LoginRequest, RegisterRequest } from '../models/auth';
import { environment } from '../../../environments/environment';

const TOKEN_KEY = 'veynax_token';
const USER_KEY = 'veynax_user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private base = `${environment.apiBaseUrl}/api/auth`;
  private currentUserSig = signal<AuthResponse | null>(this.loadUser());
  currentUser = this.currentUserSig.asReadonly();
  isAuthenticated = computed(() => !!this.currentUserSig()?.token);

  constructor(private router: Router, private http: HttpClient) { }

  login(req: LoginRequest): Observable<ApiResponse<AuthResponse>> {
    return this.http.post<BackendLoginResponse>(`${this.base}/signin`, req).pipe(
      map(response => {
        const user = response.user;
        const fullName = [user.userFirstName, user.userLastName].filter(Boolean).join(' ') || user.userName;
        return {
          success: true,
          message: 'Login successful',
          data: {
            token: response.jwtToken,
            tokenType: 'Bearer',
            username: user.userName,
            fullName,
            role: user.roles.join(', '),
          } as AuthResponse,
          timestamp: new Date().toISOString()
        };
      }),
      tap(res => { if (res.data) this.storeSession(res.data); })
    );
  }

  register(req: RegisterRequest): Observable<ApiResponse<AuthResponse>> {
    return this.http.post(`${this.base}/signup`, req, { responseType: 'text' }).pipe(
      map(message => ({ success: true, message, data: null as any, timestamp: new Date().toISOString() }))
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
