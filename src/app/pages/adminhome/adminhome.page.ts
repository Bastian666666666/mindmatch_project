import { Component, OnInit } from '@angular/core';

//5. Importar el servicio y el router
import { NavigationExtras, Router } from '@angular/router';
import { DbserviceService } from '../../services/dbservice.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.page.html',
  styleUrls: ['./adminhome.page.scss'],
})
export class AdminhomePage implements OnInit {

  //5.1 Crear un arreglo de usuarios
  usuarios: any = [
    {
      username: "el nombre de usuario",
      password: "el password",
      nombre: "el nombre",
      apellido: "el apellido",
      nacimiento: "la fecha de nacimiento"
    }
  ];

  //5.2 Inyectar el router y el servicio
  constructor(private router: Router, private servicioBD: DbserviceService) { }

  ngOnInit() {
    //this.servicioBD.presentAlert("1");
    this.servicioBD.dbState().subscribe((res) => {
      //this.servicioBD.presentAlert("2");
      if (res) {
        //this.servicioBD.presentAlert("3");
        this.servicioBD.fetchUsuarios().subscribe(item => {
          this.usuarios = item;
        });
      }
      //this.servicioBD.presentAlert("4");
    });
  }

  getItem($event: any) {
    const valor = $event.target.value;
    console.log('valor del control: ' + valor);
  }

  agregar() {
    // Implementar lógica para agregar un nuevo usuario
  }

  editar(item: any) {
    this.servicioBD.presentToast("Hola");
    let navigationExtras: NavigationExtras = {
      state: {
        idEnviado: item.id,
        usernameEnviado: item.username,
        passwordEnviado: item.password,
        nombreEnviado: item.nombre,
        apellidoEnviado: item.apellido,
        nacimientoEnviado: item.nacimiento
      }
    };
    this.servicioBD.presentToast("Aqui");
    this.router.navigate(['/admin-modificar'], navigationExtras);
  }

  eliminar(item: any) {
    this.servicioBD.deleteUsuario(item.id);
    this.servicioBD.presentToast("Usuario eliminado");
  }

}

