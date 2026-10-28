import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl } from '@angular/forms';
import { firstValidationMessage } from '../../validation/validation-messages';

@Component({
  selector: 'vx-field-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss']
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
