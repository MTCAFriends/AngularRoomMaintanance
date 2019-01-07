import { TestBed } from '@angular/core/testing';

import { RegistersUsersService } from './registers-users.service';

describe('RegistersUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistersUsersService = TestBed.get(RegistersUsersService);
    expect(service).toBeTruthy();
  });
});
