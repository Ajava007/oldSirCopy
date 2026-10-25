import { Component } from '@angular/core';

@Component({
  selector: 'vx-demo-banner',
  standalone: true,
  template: `<div style="background:linear-gradient(90deg,#d97706,#b45309);color:#fff;text-align:center;font-size:.72rem;padding:.3rem 1rem;font-weight:600;letter-spacing:.03em;">DEMO DATA — static in-memory mock, not connected to a backend. Transactions do not persist.</div>`
})
export class DemoBannerComponent {}
