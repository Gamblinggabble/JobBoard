import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCompanyPageComponent } from './registration-company-page.component';

describe('RegistrationCompanyPageComponent', () => {
  let component: RegistrationCompanyPageComponent;
  let fixture: ComponentFixture<RegistrationCompanyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationCompanyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationCompanyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
