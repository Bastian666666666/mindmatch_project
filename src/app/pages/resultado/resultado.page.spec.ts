import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadoPage } from './resultado.page';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { AnimationController, IonCard } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { of } from 'rxjs';

describe('ResultadoPage', () => {
  let component: ResultadoPage;
  let fixture: ComponentFixture<ResultadoPage>;

  // Crea stubs para las dependencias
  let dbserviceStub: Partial<DbserviceService>;
  const sqliteStub = {};
  const animationCtrlStub = { create: () => ({ play: () => {} }) };
  const activatedRouteStub = {
    params: of({ mensaje: 'Mensaje de prueba' })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultadoPage],
      imports: [RouterTestingModule],
      providers: [
        { provide: DbserviceService, useValue: dbserviceStub },
        { provide: SQLite, useValue: sqliteStub },
        { provide: AnimationController, useValue: animationCtrlStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});