import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserLoginService } from '../user-login.service';

export const notAuthenticatedUserGuard: CanActivateFn = (route, state) => {
  const isUserLogged = inject(UserLoginService).isLogged;

  if (isUserLogged) {
    inject(Router).navigate(['']);
    return false;
  } else {
    return true
  }
};
