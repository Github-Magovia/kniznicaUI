import { TestBed } from '@angular/core/testing';

import { KnihyService } from './knihy.service';

describe('KnihyService', () => {
  let service: KnihyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnihyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
