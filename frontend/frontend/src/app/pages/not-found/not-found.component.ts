import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'vx-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="d-flex flex-column align-items-center justify-content-center text-center" style="min-height:60vh;">
      <div class="display-1 fw-bold" style="color:#2563eb;">404</div>
      <h5 class="fw-bold" style="color:#0f172a;">Page not found</h5>
      <p class="mb-4" style="color:#64748b;max-width:360px;">The route you requested doesn't exist in this build. It may be planned for a later phase.</p>
      <a routerLink="/dashboard" class="btn btn-primary">Back to dashboard</a>
    </div>
  `
})
export class NotFoundComponent {}
