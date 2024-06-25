import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MicuentaPageRoutingModule } from './micuenta-routing.module';
import { MicuentaPage } from './micuenta.page';
// Asegúrate de importar ApiconsumoComponent
import { ApiconsumoComponent } from '../../components/apiconsumo/apiconsumo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MicuentaPageRoutingModule
  ],
  declarations: [
    MicuentaPage,
    ApiconsumoComponent // Añade ApiconsumoComponent a las declaraciones
  ]
})
export class MicuentaPageModule {}

