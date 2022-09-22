import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { OrdersPageRoutingModule } from './orders-page-routing.module';
import { OrdersPlacedViewComponent } from './orders-placed-view/orders-placed-view.component';

@NgModule({
  declarations: [OrdersPlacedViewComponent],
  imports: [CommonModule, OrdersPageRoutingModule, TableModule, ButtonModule],
})
export class OrdersPageModule {}
