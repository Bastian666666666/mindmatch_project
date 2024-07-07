import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutorialPage } from './tutorial.page';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationController, IonicModule } from '@ionic/angular';
import { of } from 'rxjs';

describe('TutorialPage', () => {
  let component: TutorialPage;
  let fixture: ComponentFixture<TutorialPage>;

  // Mock ActivatedRoute
  const activatedRouteStub = {
    snapshot: {
      paramMap: {
        get: () => 'default', 
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorialPage],
      imports: [RouterTestingModule, IonicModule.forRoot()],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        AnimationController,
        
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});