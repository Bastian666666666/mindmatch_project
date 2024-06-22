import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminModificarPage } from './admin-modificar.page';

const routes: Routes = [
  {
    path: '',
    component: AdminModificarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModificarPageRoutingModule {}
