import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { routeguardGuard } from './routeguard.guard';

describe('routeguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routeguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
