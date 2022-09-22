import { TestBed } from '@angular/core/testing';

import { FulfilledOrderService } from './fulfilled-order.service';

describe('FulfilledOrderService', () => {
  let service: FulfilledOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FulfilledOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
