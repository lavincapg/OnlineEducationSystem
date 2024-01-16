import { TestBed } from '@angular/core/testing';

import { EnrollmentUserService } from './enrollmentUser.service';

describe('EnrollmentService', () => {
  let service: EnrollmentUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollmentUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
