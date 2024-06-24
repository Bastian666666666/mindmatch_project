import { CanActivateFn } from '@angular/router';

export const routeguardGuard: CanActivateFn = (route, state) => {
  return true;
};
