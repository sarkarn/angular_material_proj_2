import { TestBed } from '@angular/core/testing';

import { StrategyDetailService } from './strategy-detail.service';

describe('StrategyDetailService', () => {
  let service: StrategyDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrategyDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
