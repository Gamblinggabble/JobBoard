import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyPostingDetailsComponent } from './apply-posting-details.component';

describe('ApplyPostingDetailsComponent', () => {
  let component: ApplyPostingDetailsComponent;
  let fixture: ComponentFixture<ApplyPostingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyPostingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyPostingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
