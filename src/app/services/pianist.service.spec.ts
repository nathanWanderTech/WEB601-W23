import { TestBed } from '@angular/core/testing';

import { PianistService } from './pianist.service';

describe('PianistService', () => {
  let service: PianistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PianistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
