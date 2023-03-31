import { TestBed } from '@angular/core/testing';

import { ErwService } from './erw.service';

describe('ErwService', () => {
  let service: ErwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
