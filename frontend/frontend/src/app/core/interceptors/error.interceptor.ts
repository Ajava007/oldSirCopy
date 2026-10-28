import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastService } from '../services/toast.service';
import { AuthService } from '../services/auth.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastService);
  const auth = inject(AuthService);
  return next(req).pipe(
    catchError((err) => {
      if (err.status === 401) {
        toast.error('Session expired. Please log in again.');
        auth.logout();
      } else if (err.status === 403) {
        toast.error('You do not have permission for this action.');
      } else if (err.error?.errors?.length) {
        toast.error(err.error.errors[0]);
      } else if (err.error?.message) {
        toast.error(err.error.message);
      } else {
        toast.error('An unexpected error occurred.');
      }
      return throwError(() => err);
    })
  );
};
