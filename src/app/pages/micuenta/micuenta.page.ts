import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { Router } from '@angular/router';
import { AvatarserviceService } from 'src/app/services/avatarservice.service'; 

@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.page.html',
  styleUrls: ['./micuenta.page.scss'],
})
export class MicuentaPage implements OnInit {
  
  username = '';
  profileImage: string | null = null; // Añadir la propiedad para la imagen de perfil
  avatarUrl = ""; // Añadir la propiedad para la URL del avatar

  constructor(private dbservice: DbserviceService, private router: Router, private avatarService: AvatarserviceService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username') || ''; // Recuperar el nombre de usuario
    this.loadProfileImage(); // Llamar a loadProfileImage para cargar la imagen de perfil específica del usuario
    this.avatarService.currentAvatar.subscribe(avatar => {
      if (this.username) {
        // Asegúrate de que el avatar corresponde al usuario actual
        this.avatarUrl = avatar;
      }
    });
  }

  logout() {
    sessionStorage.removeItem('username'); // Eliminar el nombre de usuario de sessionStorage
    this.router.navigateByUrl('/login'); // Redirigir al usuario a la página de inicio de sesión
  }

  loadProfileImage() {
    // Asume que guardas la imagen de perfil con una clave específica del usuario, por ejemplo, 'savedImage_username'
    const savedImageKey = `savedImage_${this.username}`;
    const savedImage = sessionStorage.getItem(savedImageKey);
    if (savedImage) {
      this.profileImage = savedImage;
    } else {
      console.log('No existe imagen guardada para el usuario actual');
      // Manejar el caso de no encontrar una imagen guardada para el usuario actual
      // Podrías establecer una imagen de perfil predeterminada aquí
      this.profileImage = 'path_to_default_profile_image';
    }
  }

  removeUserAvatar() {
    if (this.username) {
      this.avatarService.removeAvatar(this.username);
      // Opcional: Actualizar la UI o realizar otras acciones después de eliminar el avatar
    }
  }
  
}