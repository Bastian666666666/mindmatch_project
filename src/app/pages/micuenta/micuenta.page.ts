import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.page.html',
  styleUrls: ['./micuenta.page.scss'],
})
export class MicuentaPage implements OnInit {
  
  username = '';
  profileImage: string | null = null; // Añadir la propiedad para la imagen de perfil

  constructor(private dbservice: DbserviceService, private router: Router) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username') || ''; // Recuperar el nombre de usuario
    this.loadProfileImage(); // Llamar a loadProfileImage para cargar la imagen de perfil
  }

  logout() {
    sessionStorage.removeItem('username'); // Eliminar el nombre de usuario de sessionStorage
    this.router.navigateByUrl('/login'); // Redirigir al usuario a la página de inicio de sesión
  }

  loadProfileImage() {
    const savedImage = sessionStorage.getItem('savedImage');
    if (savedImage) {
      this.profileImage = savedImage;
    } else {
      console.log('No existe imagen guardada');
      // Manejar el caso de no encontrar una imagen guardada
    }
  }
}