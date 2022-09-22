import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FulfilledOrderComponent } from './fulfilled-order/fulfilled-order.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FulfilledOrderRoutingModule {}
