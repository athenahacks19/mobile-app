import { TestBed } from '@angular/core/testing';

import { DirectLineService } from './direct-line.service';

describe('DirectLineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectLineService = TestBed.get(DirectLineService);
    expect(service).toBeTruthy();
  });
});
