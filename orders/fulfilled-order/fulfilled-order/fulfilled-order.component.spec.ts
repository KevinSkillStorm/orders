import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulfilledOrderComponent } from './fulfilled-order.component';

describe('FulfilledOrderComponent', () => {
  let component: FulfilledOrderComponent;
  let fixture: ComponentFixture<FulfilledOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FulfilledOrderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FulfilledOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
