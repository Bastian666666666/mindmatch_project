import { browser, by, element } from 'protractor';

describe('Login Functionality', () => {

  beforeEach(async () => {
    // Inicializar la pagina de login
    await browser.get('/login');
  });

  it('deberia mostrar el titulo de la pagina principal', async () =>{

    // titulo de la pagina
    const matLabel = await element.all(by.css('mat-label')).get(0).getText();
    console.log(matLabel);
    expect(matLabel).toEqual('Fernando el Travieso');

  });
});