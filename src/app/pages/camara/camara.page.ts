import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  imageSource: any; // Variable para almacenar la imagen de camera
  
  username = ''; // Variable para almacenar el nombre de usuario

  constructor(private dbservice: DbserviceService, private router: Router) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username') || ''; // Recuperar el nombre de usuario
  }

  logout() {
    sessionStorage.removeItem('username'); // Eliminar el nombre de usuario de sessionStorage
    this.router.navigateByUrl('/login'); // Redirigir al usuario a la página de inicio de sesión
  }

  takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false, //cambie a false para que no se pueda editar la imagen
    resultType: CameraResultType.DataUrl //cambie a DataUrl para que se muestre la imagen
  });
  
  this.imageSource = image.dataUrl; //cambie a dataUrl para que se muestre la imagen, le digo que la imagen que se tomo se muestre en la variable imageSource
};

savePicture = () => {
  localStorage.setItem('savedImage', this.imageSource); // Cambiar a localStorage
  alert('Foto guardada correctamente'); // Mostrar confirmación al usuario
  this.router.navigateByUrl('/micuenta'); // Redirigir al usuario a la página "micuenta"
};


}
