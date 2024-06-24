import { CanActivateFn, ActivatedRouteSnapshot } from '@angular/router';

export const routeguardGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state) => {
  const username = sessionStorage.getItem('username');
  const adminRoutes = ['adminhome', 'admin-agregar', 'admin-modificar'];
  const isAccessingAdminRoute = adminRoutes.some(adminRoute => state.url.includes(adminRoute));

  if (username) {
    // Si el username existe y no está intentando acceder a una ruta de administrador, permite el acceso
    if (!isAccessingAdminRoute) return true;
    // Si está intentando acceder a una ruta de administrador, verifica si el username es "RoyB"
    return username === "RoyB";
  } else {
    // Si no hay username, no permite el acceso
    return false;
  }
};