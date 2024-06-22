import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { IonCard } from '@ionic/angular';
import type { Animation } from '@ionic/angular';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {
  usuarioRecibido: string = ""; // Declaración de la propiedad para poder llamar el dato del usuario
  scrollPosition = 0;

  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;
private animation!: Animation;

  constructor(private route: ActivatedRoute, private router: Router, private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'blue', 'var(--background)');
  }

  play() {
    this.animation.play();
  }

  pause() {
    this.animation.pause();
  }

  stop() {
    this.animation.stop();
  }

  irAHome() {
    let navigationExtras: NavigationExtras = {
      state: {
        usuarioEnvio: this.usuarioRecibido
      }
    }
    this.router.navigate(['/home'], navigationExtras);
  }
}