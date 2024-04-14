import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const sadminGuard: CanActivateFn = (route, state) => {
  console.log("sadmin guard")
  return inject(AuthService).SadminSub;
};
