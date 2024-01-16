import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerInfoUserComponent } from './trainer-infoUser.component';

describe('TrainerInfoComponent', () => {
  let component: TrainerInfoUserComponent;
  let fixture: ComponentFixture<TrainerInfoUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerInfoUserComponent]
    });
    fixture = TestBed.createComponent(TrainerInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
