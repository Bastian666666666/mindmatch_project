import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ChangeDetectionStrategy, Component } from '@angular/core'; //!Es para el formulario pero debe ir en ts
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
    LoginPageRoutingModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule, // Importación necesaria para los botones de Material
    MatDividerModule // Importación necesaria para los divisores de Material
  ],
  declarations: [LoginPage],
  providers: [],
})
export class LoginPageModule {}