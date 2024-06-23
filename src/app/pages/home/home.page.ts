import { Component } from '@angular/core';

import { DbserviceService } from 'src/app/services/dbservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = "";

  constructor(private dbservice: DbserviceService, private router: Router) {}

  ngOnInit() {
    this.username = localStorage.getItem('username') || ''; // Recuperar el nombre de usuario
  }

  logout() {
    sessionStorage.removeItem('username'); // Eliminar el nombre de usuario de sessionStorage
    this.router.navigateByUrl('/login'); // Redirigir al usuario a la página de inicio de sesión
  }

}