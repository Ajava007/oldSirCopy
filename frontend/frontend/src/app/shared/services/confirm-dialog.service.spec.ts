import { TestBed } from '@angular/core/testing';
import { ConfirmDialogService } from './confirm-dialog.service';

describe('ConfirmDialogService', () => {
  let svc: ConfirmDialogService;
  beforeEach(() => { TestBed.configureTestingModule({}); svc = TestBed.inject(ConfirmDialogService); });

  it('starts closed', () => {
    expect(svc.state().open).toBeFalse();
  });

  it('opens with provided message and resolves true on confirm', async () => {
    const p = svc.confirm({ message: 'Delete?', confirmLabel: 'Delete' });
    expect(svc.state().open).toBeTrue();
    expect(svc.state().message).toBe('Delete?');
    svc.close(true);
    expect(await p).toBeTrue();
    expect(svc.state().open).toBeFalse();
  });

  it('resolves false on cancel', async () => {
    const p = svc.confirm({ message: 'Cancel?' });
    svc.close(false);
    expect(await p).toBeFalse();
  });
});
