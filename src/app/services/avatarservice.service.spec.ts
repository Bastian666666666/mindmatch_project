import { TestBed } from '@angular/core/testing';

import { AvatarserviceService } from './avatarservice.service';

describe('AvatarserviceService', () => {
  let service: AvatarserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvatarserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
