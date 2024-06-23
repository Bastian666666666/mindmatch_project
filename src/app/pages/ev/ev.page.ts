import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-ev',
  templateUrl: './ev.page.html',
  styleUrls: ['./ev.page.scss'],
})
export class EvPage implements OnInit {
  username: string = "";

  constructor(private dbservice: DbserviceService, private router: Router) { }

  ngOnInit() {
    this.username = localStorage.getItem('username') || ''; // Recuperar el nombre de usuario
  }

  logout() {
    sessionStorage.removeItem('username'); // Eliminar el nombre de usuario de sessionStorage
    this.router.navigateByUrl('/login'); // Redirigir al usuario a la página de inicio de sesión
  }

  

}


