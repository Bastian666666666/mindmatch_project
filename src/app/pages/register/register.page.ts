import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
    // inicialización.
  }

  onSubmit(form: NgForm) {
    const { username, password, nombre, apellido, nacimiento } = form.value;
    this.dbService.addUsuario(username, password, nombre, apellido, nacimiento).then(() => {
      console.log('Usuario registrado con éxito');
      // Aquí arriba puedo agregar algo como mensaje de exito.
    }).catch(error => {
      console.error('Error al registrar el usuario:', error);
      // para manejar el error, por ejemplo, mostrando un mensaje al usuario.
    });
  }

}