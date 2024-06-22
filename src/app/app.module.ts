import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx'; // 1. Importa SQLite para usarlo en la aplicación
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Importa provideAnimationsAsync que sirve para proveer animaciones asíncronas

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite, // 2. Provee SQLite para usarlo en la aplicación
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
