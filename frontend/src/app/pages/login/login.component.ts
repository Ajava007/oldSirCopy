import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { ApiResponse } from '../../core/models/api-response';
import { AuthResponse } from '../../core/models/auth';
import { FieldErrorComponent } from '../../shared/components/field-error/field-error.component';

@Component({
  selector: 'vx-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, FieldErrorComponent],
  template: `
    <div class="d-flex align-items-center justify-content-center" style="min-height:100vh;background:linear-gradient(135deg,#eef2ff 0%,#f0f9ff 50%,#f4f6fb 100%);">
      <div class="vx-card p-4 p-md-5" style="width:100%;max-width:420px;box-shadow:0 20px 50px -20px rgba(37,99,235,.25);">
        <div class="text-center mb-4">
          <div class="d-inline-flex align-items-center justify-content-center mb-3" style="width:56px;height:56px;border-radius:16px;background:linear-gradient(135deg,#2563eb,#0d9488);color:#fff;box-shadow:0 8px 20px -6px rgba(37,99,235,.5);">
            <i class="bi bi-lightning-charge-fill" style="font-size:26px;"></i>
          </div>
          <h3 class="fw-bold mb-1" style="color:#0f172a;">VeynaX <span style="color:#2563eb;">AMMS</span></h3>
          <p class="mb-0" style="color:#64748b;font-size:.85rem;">Automotive Manufacturing Management System</p>
        </div>
        <ul class="nav nav-pills nav-fill mb-3">
          <li class="nav-item"><button class="nav-link" [class.active]="mode()==='login'" (click)="mode.set('login')">Login</button></li>
          <li class="nav-item"><button class="nav-link" [class.active]="mode()==='register'" (click)="mode.set('register')">Register</button></li>
        </ul>
        <form [formGroup]="form" (ngSubmit)="submit()">
          @if (mode() === 'register') {
            <div class="mb-2">
              <label class="form-label small" style="color:#64748b;">Full name</label>
              <input type="text" class="form-control" formControlName="fullName" placeholder="Jane Engineer">
              <vx-field-error [control]="form.get('fullName')" />
            </div>
            <div class="mb-2">
              <label class="form-label small" style="color:#64748b;">Email</label>
              <input type="email" class="form-control" formControlName="email" placeholder="jane@veynax.com">
              <vx-field-error [control]="form.get('email')" />
            </div>
          }
          <div class="mb-2">
            <label class="form-label small" style="color:#64748b;">Username</label>
            <input type="text" class="form-control" formControlName="username" placeholder="username" autocomplete="username">
            <vx-field-error [control]="form.get('username')" />
          </div>
          <div class="mb-3">
            <label class="form-label small" style="color:#64748b;">Password</label>
            <input type="password" class="form-control" formControlName="password" placeholder="••••••••" autocomplete="current-password">
            <vx-field-error [control]="form.get('password')" />
          </div>
          <button type="submit" class="btn btn-primary w-100" [disabled]="loading()">
            @if (loading()) { <span class="spinner-border spinner-border-sm me-2"></span> }
            {{ mode() === 'login' ? 'Sign in' : 'Create account' }}
          </button>
        </form>
        <div class="mt-3 p-2 rounded" style="background:#f8fafc;border:1px solid #e2e8f0;">
          <p class="small text-center mb-1" style="color:#64748b;">Demo logins — no backend needed</p>
          <p class="small text-center mb-0 mono" style="color:#2563eb;">admin/admin123 · manager/manager123 · viewer/viewer123</p>
        </div>
      </div>
    </div>
  `,
  styles: ['.mono{font-family:ui-monospace,monospace;font-size:.8rem;}']
})
export class LoginComponent {
  mode = signal<'login' | 'register'>('login');
  loading = signal(false);

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    fullName: [''],
    email: ['']
  });

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toast: ToastService) {}

  submit() {
    if (this.form.invalid) { this.toast.error('Please fill in all required fields.'); return; }
    this.loading.set(true);
    const v = this.form.value;
    const req$ = this.mode() === 'login'
      ? this.auth.login({ username: v.username!, password: v.password! })
      : this.auth.register({ username: v.username!, email: v.email || '', fullName: v.fullName || v.username!, password: v.password! });
    req$.subscribe({
      next: (res: ApiResponse<AuthResponse>) => {
        this.loading.set(false);
        if (!res.success) { this.toast.error(res.message || 'Login failed.'); return; }
        this.toast.success('Welcome, ' + (this.auth.currentUser()?.fullName ?? 'user'));
        this.router.navigate(['/dashboard']);
      },
      error: () => this.loading.set(false)
    });
  }
}
