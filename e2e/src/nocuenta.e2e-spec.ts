//Exportaciones de la biblioeca protractor, browser controla el navegador, by localiza los elementos y element interactua con los elementos
import { browser, by, element } from 'protractor'; 

// Definir la suite o bloque de pruebas llamado Login test, dentro van las pruebas

describe('Login test', () => {

  // beforeEach es un funcion que se ejecuta antes de cada prueba it, configura el estado inicial antes de cada prueba  
  beforeEach(async () => {
    await browser.get('/login');
  });

  // Definir una prueba it para "Muestra de campo "¿No tienes cuenta? Regístrate aquí"
  it('Comprueba la existencia del botón de registro', async () => {
    const botonRegistro = await element(by.css('ion-button[routerLink="/register"]')).getText();
    expect(botonRegistro).toEqual('¿No tienes cuenta? Regístrate aquí');
  });

});