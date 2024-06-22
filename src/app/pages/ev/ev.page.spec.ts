import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EvPage } from './ev.page';

describe('EvPage', () => {
  let component: EvPage;
  let fixture: ComponentFixture<EvPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
