import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { routeguardGuard } from './services/routeguard.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [routeguardGuard] // Agrega tu guard aquí
  },
  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then( m => m.TutorialPageModule),
    canActivate: [routeguardGuard] //
  },
  {
    path: 'ev',
    loadChildren: () => import('./pages/ev/ev.module').then( m => m.EvPageModule),
    canActivate: [routeguardGuard] //
  },
  {
    path: 'resultado',
    loadChildren: () => import('./pages/resultado/resultado.module').then( m => m.ResultadoPageModule),
    canActivate: [routeguardGuard] //
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule),
    canActivate: [routeguardGuard] //
  },
  {
    path: 'adminhome',
    loadChildren: () => import('./pages/adminhome/adminhome.module').then( m => m.AdminhomePageModule),
    canActivate: [routeguardGuard] //
  },
  {
    path: 'admin-agregar',
    loadChildren: () => import('./pages/admin-agregar/admin-agregar.module').then( m => m.AdminAgregarPageModule),
    canActivate: [routeguardGuard] //
  },
  {
    path: 'admin-modificar',
    loadChildren: () => import('./pages/admin-modificar/admin-modificar.module').then( m => m.AdminModificarPageModule),
    canActivate: [routeguardGuard] //
  },
  {
    path: 'micuenta',
    loadChildren: () => import('./pages/micuenta/micuenta.module').then( m => m.MicuentaPageModule),
    canActivate: [routeguardGuard] //
  },
  {
    path: 'camara',
    loadChildren: () => import('./pages/camara/camara.module').then( m => m.CamaraPageModule),
    canActivate: [routeguardGuard] //
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
