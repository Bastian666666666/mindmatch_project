import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule

import { ApiconsumoComponent } from './apiconsumo.component';

describe('ApiconsumoComponent', () => {
  let component: ApiconsumoComponent;
  let fixture: ComponentFixture<ApiconsumoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiconsumoComponent ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule // Añade HttpClientTestingModule aquí
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiconsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});