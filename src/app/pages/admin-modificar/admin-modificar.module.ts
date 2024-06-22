import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminModificarPageRoutingModule } from './admin-modificar-routing.module';

import { AdminModificarPage } from './admin-modificar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminModificarPageRoutingModule
  ],
  declarations: [AdminModificarPage]
})
export class AdminModificarPageModule {}
