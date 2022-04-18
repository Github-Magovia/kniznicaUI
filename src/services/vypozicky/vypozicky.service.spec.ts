import { TestBed } from '@angular/core/testing';

import { VypozickyService } from './vypozicky.service';

describe('VypozickyService', () => {
  let service: VypozickyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VypozickyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
