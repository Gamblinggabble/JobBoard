import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProfileMenuPageComponent } from './personal-profile-menu-page.component';

describe('PersonalProfileMenuPageComponent', () => {
  let component: PersonalProfileMenuPageComponent;
  let fixture: ComponentFixture<PersonalProfileMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalProfileMenuPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalProfileMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
