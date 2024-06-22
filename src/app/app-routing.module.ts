import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
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
    loadChildren: () => import('./pages/tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'ev',
    loadChildren: () => import('./pages/ev/ev.module').then( m => m.EvPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: 'adminhome',
    loadChildren: () => import('./pages/adminhome/adminhome.module').then( m => m.AdminhomePageModule)
  },
  {
    path: 'admin-agregar',
    loadChildren: () => import('./pages/admin-agregar/admin-agregar.module').then( m => m.AdminAgregarPageModule)
  },
  {
    path: 'admin-modificar',
    loadChildren: () => import('./pages/admin-modificar/admin-modificar.module').then( m => m.AdminModificarPageModule)
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
