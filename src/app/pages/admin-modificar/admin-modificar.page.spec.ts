import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminModificarPage } from './admin-modificar.page';

describe('AdminModificarPage', () => {
  let component: AdminModificarPage;
  let fixture: ComponentFixture<AdminModificarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
