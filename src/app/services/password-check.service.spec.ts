/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PasswordCheckService } from './password-check.service';

describe('Service: PasswordCheck', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordCheckService]
    });
  });

  it('should ...', inject([PasswordCheckService], (service: PasswordCheckService) => {
    expect(service).toBeTruthy();
  }));
});
