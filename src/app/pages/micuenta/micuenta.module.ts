import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MicuentaPageRoutingModule } from './micuenta-routing.module';
import { MicuentaPage } from './micuenta.page';

// Importamos para poder consumir la API
import { ApiconsumoComponent } from '../../components/apiconsumo/apiconsumo.component';

// Para los botones
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MicuentaPageRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  declarations: [
    MicuentaPage,
    ApiconsumoComponent // Añade ApiconsumoComponent a las declaraciones
  ]
})
export class MicuentaPageModule {}

