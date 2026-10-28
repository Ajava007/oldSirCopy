import { ValidationErrors } from '@angular/forms';

export type ValidationMessageFn = (error: any) => string;

export const VALIDATION_MESSAGES: Record<string, ValidationMessageFn> = {
  required: () => 'This field is required.',
  minlength: (e) => `Must be at least ${e.requiredLength} characters (currently ${e.actualLength}).`,
  maxlength: (e) => `Must be at most ${e.requiredLength} characters.`,
  min: (e) => `Must be ${e.min} or greater.`,
  max: (e) => `Must be ${e.max} or less.`,
  email: () => 'Enter a valid email address.',
  pattern: () => 'Invalid format.',
  unique: () => 'This value is already in use.',
  match: () => 'Values do not match.'
};

export function firstValidationMessage(errors: ValidationErrors | null): string | null {
  if (!errors) return null;
  const key = Object.keys(errors)[0];
  const fn = VALIDATION_MESSAGES[key];
  return fn ? fn(errors[key]) : 'This field is invalid.';
}
