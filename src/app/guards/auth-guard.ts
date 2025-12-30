import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // return authService.isLoggedin$.pipe(
  //   map((isLoggedIn) => {
  //     if (!isLoggedIn) {
  //       router.navigate(['/login']);
  //       return false;
  //     }
  //     return true;
  //   })
  // );

  return localStorage.getItem('token') ? true : router.createUrlTree(['/login']);
};
