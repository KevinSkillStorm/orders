import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPlacedViewComponent } from './orders-placed-view.component';

describe('OrdersPlacedViewComponent', () => {
  let component: OrdersPlacedViewComponent;
  let fixture: ComponentFixture<OrdersPlacedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdersPlacedViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersPlacedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
