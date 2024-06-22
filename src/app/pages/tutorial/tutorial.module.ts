import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialPageRoutingModule } from './tutorial-routing.module';

import { TutorialPage } from './tutorial.page';

import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button'; // Importa MatButtonModule
import { MatDividerModule } from '@angular/material/divider'; // Importa MatDividerModule
import { MatIconModule } from '@angular/material/icon'; // Importa MatIconModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialPageRoutingModule,
    MatCardModule, // Agrega MatCardModule
    MatButtonModule, // Agrega MatButtonModule
    MatDividerModule, // Agrega MatDividerModule
    MatIconModule // Agrega MatIconModule
  ],
  declarations: [TutorialPage]
})
export class TutorialPageModule {}
