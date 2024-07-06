import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

//Implemento el db service y el router, el primero para logear y el segundo (aun no usado)
import { DbserviceService } from 'src/app/services/dbservice.service';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //Variables para comprobar el inicio de sesion
  usernameLog: string = "";
  passwordLog: string = "";


  constructor(private dbservice: DbserviceService, private router: Router) { }

  ngOnInit() {
  }

  //TODO Segundo intento de login: oficial
  async login() {
    const usuario = await this.dbservice.validarUsuario(this.usernameLog, this.passwordLog);
    if (usuario) {
      let navigationExtras: NavigationExtras = {
        state: {
          usernameEnviado: this.usernameLog,
          passwordEnviado: this.passwordLog
        }
      };
      // Limpia los campos antes de navegar
      this.usernameLog = '';
      this.passwordLog = '';
      this.router.navigate(['/home'], navigationExtras);
    } else {
      // Mostrar un mensaje de error
      this.presentAlert('Error al iniciar sesión');
      // Limpia los campos después de mostrar el mensaje de error
      this.usernameLog = '';
      this.passwordLog = '';
    }
  }
  
  presentAlert(arg0: string) {
    throw new Error('Method not implemented.');
  }

}
