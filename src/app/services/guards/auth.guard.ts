import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserLoginService } from '../user-login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserLoginService);
  const router = inject(Router);

  if (authService.isLogged) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
