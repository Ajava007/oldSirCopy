import { paletteForStatus } from './status-badge.component';

describe('paletteForStatus', () => {
  it('maps success statuses', () => {
    expect(paletteForStatus('RELEASED')).toBe('success');
    expect(paletteForStatus('COMPLETED')).toBe('success');
    expect(paletteForStatus('PAID')).toBe('success');
    expect(paletteForStatus('APPROVED')).toBe('success');
  });

  it('maps warning statuses', () => {
    expect(paletteForStatus('HOLD')).toBe('warning');
    expect(paletteForStatus('PENDING')).toBe('warning');
    expect(paletteForStatus('IN_PROGRESS')).toBe('warning');
  });

  it('maps danger statuses', () => {
    expect(paletteForStatus('QUARANTINE')).toBe('danger');
    expect(paletteForStatus('FAIL')).toBe('danger');
    expect(paletteForStatus('CRITICAL')).toBe('danger');
    expect(paletteForStatus('REJECTED')).toBe('danger');
  });

  it('defaults to neutral for unknown/null', () => {
    expect(paletteForStatus('WEIRD')).toBe('neutral');
    expect(paletteForStatus(null)).toBe('neutral');
    expect(paletteForStatus(undefined)).toBe('neutral');
  });
});
