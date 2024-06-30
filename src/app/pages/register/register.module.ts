import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';

import { MatFormFieldModule } from '@angular/material/form-field'; //Para usar el componente mat-form-field
import { MatIconModule } from '@angular/material/icon'; //Para usar el componente mat-icon
import { MatInputModule } from '@angular/material/input'; //Para usar el componente mat-input
import { MatButtonModule } from '@angular/material/button'; //Para usar el componente mat-button
import { MatDividerModule } from '@angular/material/divider'; //Para usar el componente mat-divider

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    MatFormFieldModule, // Importación necesaria para los formularios de Material
    MatInputModule, // Importación necesaria para los inputs de Material
    MatIconModule, // Importación necesaria para los iconos de Material
    MatButtonModule, // Importación necesaria para los botones de Material
    MatDividerModule, // Importación necesaria para los divisores de Material
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
