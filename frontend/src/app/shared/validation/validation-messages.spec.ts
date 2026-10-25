import { firstValidationMessage } from './validation-messages';

describe('firstValidationMessage', () => {
  it('returns null when no errors', () => {
    expect(firstValidationMessage(null)).toBeNull();
    expect(firstValidationMessage({})).toBeNull();
  });

  it('returns required message', () => {
    expect(firstValidationMessage({ required: true })).toContain('required');
  });

  it('returns minlength message with params', () => {
    const msg = firstValidationMessage({ minlength: { requiredLength: 6, actualLength: 3 } });
    expect(msg).toContain('6');
    expect(msg).toContain('3');
  });

  it('returns email message', () => {
    expect(firstValidationMessage({ email: true })).toContain('email');
  });

  it('falls back to generic message for unknown keys', () => {
    expect(firstValidationMessage({ unknownValidator: true })).toContain('invalid');
  });
});
