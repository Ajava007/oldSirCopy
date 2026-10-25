import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl } from '@angular/forms';
import { firstValidationMessage } from '../../validation/validation-messages';

@Component({
  selector: 'vx-field-error',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (message(); as msg) {
      <div class="d-flex align-items-center gap-1 mt-1" style="color:#dc2626;font-size:.75rem;font-weight:500;" role="alert">
        <i class="bi bi-exclamation-circle-fill" style="font-size:.7rem;"></i>
        <span>{{ msg }}</span>
      </div>
    }
  `
})
export class FieldErrorComponent {
  @Input({ required: true }) control!: AbstractControl | null;

  message = computed(() => {
    const c = this.control;
    if (!c || !c.errors) return null;
    if (!(c.touched || c.dirty)) return null;
    return firstValidationMessage(c.errors);
  });
}
