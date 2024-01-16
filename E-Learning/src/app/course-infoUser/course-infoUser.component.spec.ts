import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInfoUserComponent } from './course-infoUser.component';

describe('CourseInfoUserComponent', () => {
  let component: CourseInfoUserComponent;
  let fixture: ComponentFixture<CourseInfoUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseInfoUserComponent]
    });
    fixture = TestBed.createComponent(CourseInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});