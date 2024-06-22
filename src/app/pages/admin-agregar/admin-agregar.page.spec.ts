import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminAgregarPage } from './admin-agregar.page';

describe('AdminAgregarPage', () => {
  let component: AdminAgregarPage;
  let fixture: ComponentFixture<AdminAgregarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
