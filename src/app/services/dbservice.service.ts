import { Injectable } from '@angular/core';

//paso 4: importamos los requisitos para el uso de SQLite y creamos las tablas
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuarios } from './usuarios';
@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  //4. Esto dice que la base de datos es pública y que es de tipo SQLiteObject
  public database!: SQLiteObject;
  
  //4. Esto es una  tabla de usuarios que se va a crear en la base de datos
  tablaUsuarios: string = "CREATE TABLE IF NOT EXISTS usuario(id INTEGER PRIMARY KEY autoincrement, username VARCHAR(10) NOT NULL UNIQUE, password VARCHAR(30) NOT NULL, nombre VARCHAR(50) NOT NULL, apellido VARCHAR(50) NOT NULL, nacimiento VARCHAR(4));";
  
  //4. Esto es un registro de usuario que se va a insertar en la tabla de usuarios para testear la aplicación
  registro: string = "INSERT or IGNORE INTO usuario(id, username, password, nombre, apellido, nacimiento) VALUES (1, 'RoyB', 'contra1234', 'Roy', 'Batty', '1991');";
  
  //4. Esto es una lista de usuarios que se va a mostrar en la aplicación para manipular los usuarios registrados, el ejemplo daba un error en la lista de usuarios, por lo que se cambió a un array de usuarios
  listaUsuarios = new BehaviorSubject<Usuarios[]>([]);

  //4. Esto es un booleano que dice si la base de datos está lista para ser usada
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  //4. Esto es un constructor que toma como parámetros SQLite, Platform y ToastController y crea la base de datos
  constructor(private sqlite: SQLite, private platform: Platform, public toastController: ToastController) {
    this.crearBD();
  }


  //4. Esto es una función que agregará un usuario a la base de datos tomando como parámetros el username, la contraseña, el nombre, el apellido y la fecha de nacimiento y los insertará en usuario
  
  addUsuario(username: string, password: string, nombre: string, apellido: string, nacimiento: string) {
    // Validaciones
    const usernameRegex = /^[a-zA-Z0-9]{1,15}$/;
    const passwordRegex = /^[a-zA-Z0-9]{5,30}$/; // Modificado para requerir al menos 5 caracteres
    const nameRegex = /^[a-zA-Z]{1,30}$/;
    const yearRegex = /^\d{4}$/;
  
    if (!usernameRegex.test(username)) {
      this.presentToast('Username debe tener máximo 15 caracteres y solo puede contener números y letras.');
      return Promise.reject('Validación de username fallida.');
    }
  
    if (!password || !passwordRegex.test(password)) {
      this.presentToast('Password debe tener entre 5 y 30 caracteres, sin espacios en blanco y solo números y letras.'); // Mensaje modificado
      return Promise.reject('Validación de password fallida.');
    }
  
    if (!nombre || !nameRegex.test(nombre)) {
      this.presentToast('Nombre no puede ser nulo, debe tener un máximo de 30 caracteres y solo letras.');
      return Promise.reject('Validación de nombre fallida.');
    }
  
    if (!apellido || !nameRegex.test(apellido)) {
      this.presentToast('Apellido no puede ser nulo, debe tener un máximo de 30 caracteres y solo letras.');
      return Promise.reject('Validación de apellido fallida.');
    }
  
    if (!yearRegex.test(nacimiento)) {
      this.presentToast('Nacimiento debe ser un año válido de 4 dígitos.');
      return Promise.reject('Validación de nacimiento fallida.');
    }
  
    // Si pasa todas las validaciones, procede con la inserción
    return this.database.executeSql('SELECT * FROM usuario WHERE username = ?', [username])
      .then(res => {
        if (res.rows.length > 0) {
          this.presentToast('El nombre de usuario ya existe. Por favor, elija otro.');
          return Promise.reject('El nombre de usuario ya existe.');
        } else {
          let data = [username, password, nombre, apellido, nacimiento];
          return this.database.executeSql('INSERT INTO usuario(username, password, nombre, apellido, nacimiento) VALUES(?, ?, ?, ?, ?)', data)
            .then(() => {
              this.buscarUsuarios();
              this.presentToast('Registro exitoso.');
            })
            .catch(error => {
              this.presentToast('Error al agregar usuario: ' + error.message);
              return Promise.reject(error);
            });
        }
      })
      .catch(error => {
        this.presentToast('Error al verificar el nombre de usuario: ' + error.message);
        return Promise.reject(error);
      });
  }



  
  //4. Esto es una función que actualizará un usuario en la base de datos tomando como parámetros el username, la contraseña, el nombre, el apellido y la fecha de nacimiento y los actualizará en usuario
  updateUsuario(id: number, username: string,password: string,nombre: string,apellido: string,nacimiento: string){
    let data = [username, password, nombre,apellido,nacimiento, id];
    return this.database.executeSql('UPDATE usuario SET username = ?, password = ?, nombre = ?, apellido = ?, nacimiento = ?, avatar = ? WHERE id = ?', data)
    .then(data2 =>{
      this.buscarUsuarios();
    });
    
  }

    //4. Esto es una función que eliminará un usuario de la base de datos tomando como parámetro el id y lo eliminará de usuario
    deleteUsuario(id: number){
      return this.database.executeSql('DELETE FROM usuario WHERE id = ?', [id])
      .then(a =>{
        this.buscarUsuarios();
      })
    }

    //4. Proporciona el estado de la base de datos permite a los suscriptores saber si la base de datos está lista para ser usada
    dbState() {
      return this.isDbReady.asObservable();
    }

    //4. Esto creará la base de datos llamada usuarios3.db en la ubicación predeterminada
    crearBD() {
      this.platform.ready().then(() => {
        this.sqlite.create({
          name: 'usuarios3.db',
          location: 'default'
  
        }).then((db: SQLiteObject) => {
          this.database = db;
          this.presentToast("BD Creada");
          //llamamos a la creación de tablas
          this.crearTablas();
        }).catch(e => this.presentToast(e));
      })
    }
    
    //4. Crear tablas en la base de datos llamada tablaUsuarios y registro
    async crearTablas() {
      try {
        await this.database.executeSql(this.tablaUsuarios, []);
        await this.database.executeSql(this.registro, []);
        this.presentToast("Tabla Creada");
        this.buscarUsuarios();
        this.isDbReady.next(true);
      } catch (e) {
        this.presentToast("error al crear tabla " + e);
      }
    }

    //4. Se crea el método buscarUsuarios que busca todos los usuarios en la base de datos y los muestra en la lista de usuarios
    buscarUsuarios() {
      //this.presentAlert("a");
      return this.database.executeSql('SELECT * FROM usuario', []).then(res => {
        let items: Usuarios[] = [];
        //this.presentAlert("b");
        if (res.rows.length > 0) {
          //this.presentAlert("c");
          for (var i = 0; i < res.rows.length; i++) {
  
  //this.presentAlert("d");
            items.push({
              id: res.rows.item(i).id,
              username: res.rows.item(i).username,
              password: res.rows.item(i).password,
              nombre: res.rows.item(i).nombre,
              apellido: res.rows.item(i).apellido,
              nacimiento: res.rows.item(i).nacimiento,
            });
          }
        }
        //this.presentAlert("d");
        this.listaUsuarios.next(items);
      });
    }


    //4. devuelve el observable de la lista de usuarios para que los componentes puedan suscribirse a ella, sin esto no se podrá acceder a la lista de usuarios
    fetchUsuarios(): Observable<Usuarios[]> {
      return this.listaUsuarios.asObservable();
    }
  
    async presentToast(mensaje: string) {
      const toast = await this.toastController.create({
        message: mensaje,
        duration: 3000
      });
      toast.present();
    }

  //TODO Segundo metodo de Login, probando

  validarUsuario(username: string, password: string) {
    return this.database.executeSql('SELECT * FROM usuario WHERE username = ? AND password = ?', [username, password])
      .then(res => {
        if (res.rows.length > 0) {
  
          const usuario = res.rows.item(0);
          this.presentToast(`Bienvenido: ${usuario.username}`); // Usar presentToast en lugar de alert
          sessionStorage.setItem('username', usuario.username); // Cambiado a sessionStorage
  
          return res.rows.item(0); // Devuelve el usuario encontrado
        } else {
          return null; // Devuelve null si no se encontró ningún usuario
        }
      })
      .catch(error => this.presentToast('Error al verificar el usuario: ' + error.message));
  };

}