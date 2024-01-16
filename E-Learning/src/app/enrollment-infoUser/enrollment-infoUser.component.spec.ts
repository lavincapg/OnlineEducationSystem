import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentInfoUserComponent } from './enrollment-infoUser.component';

describe('EnrollmentInfoComponent', () => {
  let component: EnrollmentInfoUserComponent;
  let fixture: ComponentFixture<EnrollmentInfoUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollmentInfoUserComponent]
    });
    fixture = TestBed.createComponent(EnrollmentInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
