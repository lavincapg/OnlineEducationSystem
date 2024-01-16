import { TestBed } from '@angular/core/testing';

import { UserLogControllerService } from './user-log-controller.service';

describe('UserLogControllerService', () => {
  let service: UserLogControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLogControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
