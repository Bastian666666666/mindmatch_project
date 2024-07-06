import { browser, by, element } from 'protractor'; 
describe('Login test', () => {

  beforeEach(async () => {
    await browser.get('/login');
  });

  it('Comprueba la existencia del botón de registro', async () => {
    const botonRegistro = await element(by.css('ion-button[routerLink="/register"]')).getText();
    expect(botonRegistro).toEqual('¿No tienes cuenta? Regístrate aquí');
  });

});