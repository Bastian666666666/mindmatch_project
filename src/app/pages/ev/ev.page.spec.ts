import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EvPage } from './ev.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('EvPage', () => {
  let component: EvPage;
  let fixture: ComponentFixture<EvPage>;

  // Crea un stub para SQLite
  const sqliteStub = {
    // Aquí puedes añadir métodos simulados si es necesario
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvPage],
      // Añade SQLite al array de providers usando el stub creado
      providers: [
        { provide: SQLite, useValue: sqliteStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});