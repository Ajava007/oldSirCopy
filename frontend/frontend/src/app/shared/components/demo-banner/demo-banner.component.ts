import { Component } from '@angular/core';

@Component({
  selector: 'vx-demo-banner',
  standalone: true,
  template: `<div style="background:#eff6ff;color:#1d4ed8;text-align:center;font-size:.72rem;padding:.3rem 1rem;font-weight:600;letter-spacing:.03em;border-bottom:1px solid #bfdbfe;">Some sections need a backend data source and will stay empty until one is added.</div>`
})
export class DemoBannerComponent {}
