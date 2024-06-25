import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-admin-modificar',
  templateUrl: './admin-modificar.page.html',
  styleUrls: ['./admin-modificar.page.scss'],
})

export class AdminModificarPage implements OnInit {

  id!: number;
  username = "";
  password = "";
  nombre = "";
  apellido = "";
  nacimiento = "";


  //Ojo habiaa agregado ! en lugar de ? en el constructor y no me dejaba pasar los datos
  //Verifica que existen los datos antes de asignarlos y si existen los asigna a cada variable de arriba
  constructor(private router: Router, private activedroute: ActivatedRoute, private dbservice: DbserviceService) { 
  this.activedroute.queryParams.subscribe(param => {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.id = this.router.getCurrentNavigation()!.extras.state!['idEnviado'];
      this.username = this.router.getCurrentNavigation()?.extras?.state?.['usernameEnviado'];
      this.password = this.router.getCurrentNavigation()?.extras?.state?.['passwordEnviado'];
      this.nombre = this.router.getCurrentNavigation()?.extras?.state?.['nombreEnviado'];
      this.apellido = this.router.getCurrentNavigation()?.extras?.state?.['apellidoEnviado'];
      this.nacimiento = this.router.getCurrentNavigation()?.extras?.state?.['nacimientoEnviado'];
    }
  })
}

//Actualiza la informacion del usuario (redirige a la pagina de adminhome)
editar() {
  this.dbservice.updateUsuario(this.id, this.username, this.password, this.nombre, this.apellido, this.nacimiento);
  this.dbservice.presentToast("Usuario modificado");
  this.router.navigate(['/adminhome']);
}

  ngOnInit() {
  }

}