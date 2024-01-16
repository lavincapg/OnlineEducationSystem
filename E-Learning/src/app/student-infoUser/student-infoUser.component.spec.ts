import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInfoUserComponent } from './student-infoUser.component';

describe('StudentInfoComponent', () => {
  let component: StudentInfoUserComponent;
  let fixture: ComponentFixture<StudentInfoUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentInfoUserComponent]
    });
    fixture = TestBed.createComponent(StudentInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

