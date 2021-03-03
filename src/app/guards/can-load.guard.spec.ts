import { TestBed } from '@angular/core/testing';

import { CanLoadGuard } from './can-load.guard';

describe('CanLoadGuard', () => {
  let guard: CanLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanLoadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
