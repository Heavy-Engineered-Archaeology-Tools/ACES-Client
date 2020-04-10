import { TestBed } from '@angular/core/testing';

import { MainStorageService } from './main-storage.service';

describe('MainStorageService', () => {
  let service: MainStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
