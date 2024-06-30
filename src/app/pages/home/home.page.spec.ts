import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { DbserviceService } from 'src/app/services/dbservice.service';
describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  // Crea un stub para SQLite
  let sqliteStub = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      // Provee el stub como un proveedor para SQLite y cualquier otro servicio que dependa de SQLite
      providers: [
        { provide: SQLite, useValue: sqliteStub },
        DbserviceService // Asegúrate de proveer también el servicio que depende de SQLite
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});