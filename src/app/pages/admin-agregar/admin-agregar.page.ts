import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-admin-agregar',
  templateUrl: './admin-agregar.page.html',
  styleUrls: ['./admin-agregar.page.scss'],
})

export class AdminAgregarPage implements OnInit {

  username = "";
  password = "";
  nombre = "";
  apellido = "";
  nacimiento = "";

  constructor(private dbservice: DbserviceService, private router: Router) { }

  guardar() {
    this.dbservice.addUsuario(this.username,this.password,this.nombre,this.apellido,this.nacimiento);
    this.dbservice.presentToast("Usuario Agregado");
    this.router.navigate(['/adminhome']);
  }

  ngOnInit() {
  }

}
