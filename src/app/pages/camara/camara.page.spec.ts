import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamaraPage } from './camara.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { DbserviceService } from 'src/app/services/dbservice.service';

// Crea un mock para SQLite
const sqliteMock = {
  // Simula las funciones y propiedades que tu servicio utiliza de SQLite
};

describe('CamaraPage', () => {
  let component: CamaraPage;
  let fixture: ComponentFixture<CamaraPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CamaraPage],
      providers: [
        DbserviceService,
        { provide: SQLite, useValue: sqliteMock }, // Provee el mock de SQLite
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CamaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});