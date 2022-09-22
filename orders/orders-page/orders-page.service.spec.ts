import { TestBed } from '@angular/core/testing';

import { OrdersPageService } from './orders-page.service';

describe('OrdersPageService', () => {
  let service: OrdersPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
