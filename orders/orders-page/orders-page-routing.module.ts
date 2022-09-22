import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersPlacedViewComponent } from './orders-placed-view/orders-placed-view.component';

const routes: Routes = [
  // { path: 'orders/orders-placed', component: OrdersPlacedViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersPageRoutingModule {}
