import { Component, OnInit, ElementRef, ViewChildren, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import type { QueryList } from '@angular/core';
import { AnimationController, IonCard, Animation } from '@ionic/angular'; // Importa Animation aquí
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit, AfterViewInit {
  username: string = "";
  mensaje: string = ''; // El mensaje de resultado que contrasta con el mensaje de la página anterior

  @ViewChildren(IonCard, { read: ElementRef }) cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;
  private animation!: Animation; 

  constructor(private dbservice: DbserviceService, private router: Router, private route: ActivatedRoute, private animationCtrl: AnimationController) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username') || ''; // Recuperar el nombre de usuario
    this.route.params.subscribe(params => {
      this.mensaje = params['mensaje'];
    });
  }

  //Para la animacion de la tarjeta
  ngAfterViewInit() {
    if (this.cardElements && this.cardElements.length > 0) {
      // Asegurarse de que esto selecciona <ion-card>
      const card = this.cardElements.find(element => element.nativeElement.tagName === 'ION-CARD');
      if (card) {
        const cardAnimation = this.animationCtrl
          .create()
          .addElement(card.nativeElement)
          .duration(2000)
          // Configuración de la animación...
          .beforeStyles({
            filter: 'invert(75%)',
          })
          .beforeClearStyles(['box-shadow'])
          .afterStyles({
            'box-shadow': 'rgba(255, 0, 50, 0.4) 0px 4px 16px 6px',
          })
          .afterClearStyles(['filter'])
          .keyframes([
            { offset: 0, transform: 'scale(1)' },
            { offset: 0.5, transform: 'scale(1.5)' },
            { offset: 1, transform: 'scale(1)' },
          ])
          .play(); // Ejecuta la animación
      }
    }
  }

  //Para la animacion de la tarjeta
  play() {
    if (this.animation) {
      this.animation.play();
    }
  }

  //Para la animacion de la tarjeta
  pause() {
    if (this.animation) {
      this.animation.pause();
    }
  }
  
  //Para la animacion de la tarjeta
  stop() {
    if (this.animation) {
      this.animation.stop();
    }
  }

  
  //Para la animacion de la tarjeta
  logout() {
    sessionStorage.removeItem('username'); // Eliminar el nombre de usuario de sessionStorage
    this.router.navigateByUrl('/login'); // Redirigir al usuario a la página de inicio de sesión
  }


  //PARA VOLVER A LA PAGINA ANTERIOR
  goBack() {
    this.router.navigate(['/ev']); // Asume que '/ev' es la ruta a la página 'ev'
  }
  
  //PARA VOLVER A HOME
  goHome() {
    this.router.navigate(['/home']); // Asume que '/home' es la ruta a la página 'home'
  }


}