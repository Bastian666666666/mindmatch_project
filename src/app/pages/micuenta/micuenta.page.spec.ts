import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MicuentaPage } from './micuenta.page';

// Importaciones necesarias
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('MicuentaPage', () => {
  let component: MicuentaPage;
  let fixture: ComponentFixture<MicuentaPage>;

  // Crea un stub para SQLite
  let sqliteStub: Partial<SQLite>;

  beforeEach(() => {
    // Inicializa el stub como un objeto vacío o con las propiedades/métodos simulados necesarios
    sqliteStub = {};

    TestBed.configureTestingModule({
      // Declara el componente que estás probando
      declarations: [MicuentaPage],
      // Provee el stub como un proveedor para SQLite
      providers: [
        { provide: SQLite, useValue: sqliteStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MicuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});