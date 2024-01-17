import { TestBed } from '@angular/core/testing';

import { BouquettypesService } from './bouquettypes.service';

describe('BouquettypesService', () => {
  let service: BouquettypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BouquettypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
