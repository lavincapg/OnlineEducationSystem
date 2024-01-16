import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackInfoUserComponent } from './feedback-infoUser.component';

describe('FeedbackInfoComponent', () => {
  let component: FeedbackInfoUserComponent;
  let fixture: ComponentFixture<FeedbackInfoUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackInfoUserComponent]
    });
    fixture = TestBed.createComponent(FeedbackInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
