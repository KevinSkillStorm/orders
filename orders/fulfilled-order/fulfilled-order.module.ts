import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FulfilledOrderRoutingModule } from './fulfilled-order-routing.module';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FulfilledOrderComponent } from './fulfilled-order/fulfilled-order.component';

@NgModule({
  declarations: [FulfilledOrderComponent],
  imports: [
    CommonModule,
    FulfilledOrderRoutingModule,
    TableModule,
    ButtonModule,
  ],
})
export class FulfilledOrderModule {}
