import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { FormsModule } from '@angular/forms';

// Paso 1: Crear stubs para los servicios
const dbServiceStub = {
  addUsuario: () => Promise.resolve(true) // Simula una respuesta exitosa
};

const sqliteStub = {}; // Puedes expandir este stub según sea necesario

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [FormsModule], // Asegúrate de importar FormsModule si estás usando NgForm
      providers: [
        { provide: DbserviceService, useValue: dbServiceStub },
        { provide: SQLite, useValue: sqliteStub }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});