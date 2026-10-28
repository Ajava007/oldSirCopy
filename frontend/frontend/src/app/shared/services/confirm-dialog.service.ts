import { Injectable, signal } from '@angular/core';

export interface ConfirmOptions {
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  danger?: boolean;
}

interface DialogState extends ConfirmOptions { open: boolean; resolve: ((v: boolean) => void) | null; }

@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
  state = signal<DialogState>({ open: false, message: '', resolve: null });

  confirm(options: ConfirmOptions): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.state.set({
        open: true,
        title: options.title ?? 'Confirm action',
        message: options.message,
        confirmLabel: options.confirmLabel ?? 'Confirm',
        cancelLabel: options.cancelLabel ?? 'Cancel',
        danger: options.danger ?? true,
        resolve
      });
    });
  }

  close(result: boolean) {
    const resolve = this.state().resolve;
    this.state.set({ open: false, message: '', resolve: null });
    if (resolve) resolve(result);
  }
}
