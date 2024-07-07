import { browser, by, element } from 'protractor'; //Exportaciones de la biblioeca protractor, browser controla el navegador, by localiza los elementos y element interactua con los elementos

// Definir la suite o bloque de pruebas llamado Login test, dentro van las pruebas
describe('Login test', () => {

  // beforeEach es un funcion que se ejecuta antes de cada prueba it, configura el estado inicial antes de cada prueba
beforeEach(async () => {
  await browser.get('/login');
});

// Definir una prueba it para "Muestra de campo nombre"
it('Muestra de campo nombre', async () => {
  //*BUSCAR USUARIO
  // Busca todos los elementos que tengan la clase css mat-label y obtiene el primer elemento, luego obtiene el texto del elemento y este se guarda en la variable "const matLabel"
  const matLabelUsuario = await element.all(by.css('mat-label')).get(0).getText();
  // Imprime en consola el valor de la variable matLabel
  console.log(matLabelUsuario);
  // Se espera que el valor de la variable matLabel sea igual a "Usuario: "
  expect(matLabelUsuario).toEqual('Usuario: ');
});

// Definir otra prueba it para "Muestra de campo contraseña"
it('Muestra de campo contraseña', async () => {
  //*BUSCAR CONTRASEÑA
  // Busca todos los elementos que tengan la clase css mat-label y obtiene el segundo elemento (cambiado de get(0) a get(1) para acceder al segundo elemento), luego obtiene el texto del elemento y este se guarda en la variable "const matLabelContrasena"
  const matLabelContrasena = await element.all(by.css('mat-label')).get(1).getText(); // Cambiado de get(0) a get(1) para acceder al segundo elemento
  // Imprime en consola el valor de la variable matLabelContrasena
  console.log(matLabelContrasena);  
  // Se espera que el valor de la variable matLabelContrasena sea igual a "Contraseña:"
  expect(matLabelContrasena).toEqual('Contraseña:');
});

});