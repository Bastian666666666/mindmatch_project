import { Component, OnInit } from '@angular/core';

import { DbserviceService } from 'src/app/services/dbservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-ev',
  templateUrl: './ev.page.html',
  styleUrls: ['./ev.page.scss'],
})
export class EvPage implements OnInit {

  username: string = "";

  //**VARIABLES VAN ARRIBA DEL CONSTRUCTOR

  //EDAD
  edad: number | null = null; //Le asigne null para que no aparezca un cero al inicio para ello tuve que permitir que sea null en el tipo de dato

  //A
  opcionA: boolean = false;
  //B
  opcionB: boolean = false;
  //C
  opcion1: boolean = false;
  opcion2: boolean = false;
  opcion3: boolean = false;
  opcion4: boolean = false;
  opcion5: boolean = false;
  opcion6: boolean = false;
  //D
  opcionD: boolean = false;
  //E
  opcionE: boolean = false;
  //F
  opcionF: boolean = false;


  constructor(private dbservice: DbserviceService, private router: Router, private toastController: ToastController) { }

  ngOnInit() {
    this.username = localStorage.getItem('username') || ''; // Recuperar el nombre de usuario
  }

  logout() {
    sessionStorage.removeItem('username'); // Eliminar el nombre de usuario de sessionStorage
    this.router.navigateByUrl('/login'); // Redirigir al usuario a la página de inicio de sesión
  }

  //**METODOS O FUNCIONES VAN ABAJO DEL CONSTRUCTOR

  //Funcion para evaluar los resultados de lo que seleccione el usuario
  async verResultados() {
    // Verificar si la edad es null o undefined
    if (this.edad == null) {
      const toast = await this.toastController.create({
        message: 'El campo edad no puede estar vacío',
        duration: 2000
      });
      toast.present();
      return;
    }
  
    // Dos arreglos que contienen las opciones de los criterios
    const opciones = [this.opcion1, this.opcion2, this.opcion3, this.opcion4, this.opcion5, this.opcion6];
    const opcionesABDEF = [this.opcionA, this.opcionB, this.opcionD, this.opcionE, this.opcionF];
    
    // Contador de opciones seleccionadas
    let contador = opciones.filter(opcion => opcion ?? false).length;
    let contadorABDEF = opcionesABDEF.filter(opcion => opcion ?? false).length;
    
    // Mensaje que se mostrará en la página de resultados
    let mensaje = "";
    let limite = ((this.edad ?? 0) >= 6 && (this.edad ?? 0) <= 12) ? 1 : 3; 
  
    if ((this.edad ?? 0) < 6) {
      mensaje = "invalido300.02";
    } else if (contadorABDEF == 5 && contador >= limite) {
      mensaje = "positivo300.02";
    } else {
      mensaje = "negativo300.02";
    }
  
    // Obtener el nombre de usuario desde SessionStorage
    const usuario = sessionStorage.getItem('username');
  
    // Navegar a la página de resultados con el mensaje y el usuario obtenido de SessionStorage
    this.router.navigate(['/resultado', { mensaje: mensaje, usuario: usuario }]);
  }

  irAHome() {
    this.router.navigate(['/home']);
  }
  

}


