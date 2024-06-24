import { CanActivateFn } from '@angular/router';

export const routeguardGuard: CanActivateFn = (route, state) => {
  const username = sessionStorage.getItem('username');
  if (username) {
    // Si el username existe en sessionStorage, permite el acceso
    return true;
  } else {
    // Si no hay username, no permite el acceso
    return false;
  }
};