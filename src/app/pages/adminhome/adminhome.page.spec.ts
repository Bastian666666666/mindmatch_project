import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminhomePage } from './adminhome.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

// Paso 1: Crea un stub para SQLite
const sqliteStub = {
  // Añade aquí los métodos y propiedades que necesitas simular
};

describe('AdminhomePage', () => {
  let component: AdminhomePage;
  let fixture: ComponentFixture<AdminhomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminhomePage ],
      // Paso 2: Configura TestBed para usar el stub como proveedor de SQLite
      providers: [
        { provide: SQLite, useValue: sqliteStub }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});