import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DbserviceService } from '../../services/dbservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private dbService: DbserviceService) { }

  ngOnInit() {
    // Aquí puedes agregar cualquier inicialización que tu componente necesite.
  }

  onSubmit(form: NgForm) {
    const { username, password, nombre, apellido, nacimiento } = form.value;
    this.dbService.addUsuario(username, password, nombre, apellido, nacimiento).then(() => {
      console.log('Usuario registrado con éxito');
      // Aquí puedes agregar lógica adicional, como redirigir al usuario o mostrar un mensaje de éxito.
    }).catch(error => {
      console.error('Error al registrar el usuario:', error);
      // Manejar el error, por ejemplo, mostrando un mensaje al usuario.
    });
  }

}