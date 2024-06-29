import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AvatarserviceService {
  private avatarSource = new BehaviorSubject<string>('');
  currentAvatar = this.avatarSource.asObservable();

  constructor() { }

  loadAvatar(username: string) {
    const savedImage = localStorage.getItem(`avatar_${username}`);
    if (savedImage) {
      this.avatarSource.next(savedImage);
    } else {
      this.avatarSource.next(''); // Cargar una imagen predeterminada o dejarla en blanco
    }
  }

  updateAvatar(username: string, imageUrl: string) {
    this.avatarSource.next(imageUrl);
    localStorage.setItem(`avatar_${username}`, imageUrl); // Guardar con clave única por usuario
  }

  // Opcional: Método para eliminar el avatar de un usuario
  removeAvatar(username: string) {
    localStorage.removeItem(`avatar_${username}`);
    this.avatarSource.next(''); // Opcional: Restablecer a imagen predeterminada o dejar en blanco
  }
}