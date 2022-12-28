import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostingListItemComponent } from './job-posting-list-item.component';

describe('JobPostingListItemComponent', () => {
  let component: JobPostingListItemComponent;
  let fixture: ComponentFixture<JobPostingListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPostingListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPostingListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
