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
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  mode = signal<'login' | 'register'>('login');
  loading = signal(false);

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    fullName: [''],
    email: ['']
  });

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toast: ToastService) {}

  submit() {
    if (this.form.invalid) { this.toast.error('Please fill in all required fields.'); return; }
    this.loading.set(true);
    const v = this.form.value;
    if (this.mode() === 'register' && (!v.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))) {
      this.loading.set(false);
      this.toast.error('Enter a valid email address to register.');
      return;
    }
    const req$ = this.mode() === 'login'
      ? this.auth.login({ username: v.username!, password: v.password! })
      : this.auth.register({
          username: v.username!,
          email: v.email || '',
          firstName: (v.fullName || '').trim().split(/\s+/)[0] || undefined,
          lastName: (v.fullName || '').trim().split(/\s+/).slice(1).join(' ') || undefined,
          password: v.password!
        });
    req$.subscribe({
      next: (res: ApiResponse<AuthResponse>) => {
        this.loading.set(false);
        if (!res.success) { this.toast.error(res.message || 'Login failed.'); return; }
        if (this.mode() === 'register') {
          this.toast.success(res.message || 'Account created. Please sign in.');
          this.mode.set('login');
          this.form.patchValue({ password: '' });
          return;
        }
        this.toast.success('Welcome, ' + (this.auth.currentUser()?.fullName ?? 'user'));
        this.router.navigate(['/dashboard']);
      },
      error: () => this.loading.set(false)
    });
  }
}
