import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminAgregarPage } from './admin-agregar.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('AdminAgregarPage', () => {
  let component: AdminAgregarPage;
  let fixture: ComponentFixture<AdminAgregarPage>;

  // Crea un stub para SQLite
  const sqliteStub = {
    // Aquí puedes añadir métodos simulados si es necesario
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAgregarPage],
      // Añade SQLite al array de providers usando el stub creado
      providers: [
        { provide: SQLite, useValue: sqliteStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});