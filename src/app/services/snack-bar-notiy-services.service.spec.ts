import { TestBed } from '@angular/core/testing';

import { SnackBarNotiyServicesService } from './snack-bar-notiy-services.service';

describe('SnackBarNotiyServicesService', () => {
  let service: SnackBarNotiyServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackBarNotiyServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
