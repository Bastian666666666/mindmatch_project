import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminModificarPage } from './admin-modificar.page';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('AdminModificarPage', () => {
  let component: AdminModificarPage;
  let fixture: ComponentFixture<AdminModificarPage>;

  // Crea un stub para DbserviceService
  let dbserviceStub: Partial<DbserviceService>;
  dbserviceStub = {
    // Métodos y propiedades simuladas de DbserviceService
  };

  // Crea un stub para SQLite
  const sqliteStub = {
    // Métodos y propiedades simuladas de SQLite
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModificarPage ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: DbserviceService, useValue: dbserviceStub },
        { provide: SQLite, useValue: sqliteStub }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});