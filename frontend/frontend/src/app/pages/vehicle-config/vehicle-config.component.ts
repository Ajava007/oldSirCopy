import { Component } from '@angular/core';

@Component({
  selector: 'vx-vehicle-config',
  standalone: true,
  template: `<h5 class="fw-bold mb-1">Vehicle Options</h5><div class="vx-card p-3"><h6>No vehicle option data</h6><p class="small text-muted mb-0">The backend does not have an API for vehicle trims, colors, or selectable options yet.</p></div>`
})
export class VehicleConfigComponent {}
