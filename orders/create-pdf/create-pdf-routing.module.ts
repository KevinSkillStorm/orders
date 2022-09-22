import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePdfPageComponent } from './create-pdf-page/create-pdf-page.component';

const routes: Routes = [
  { path: 'orders/create-pdf-page/:id', component: CreatePdfPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePdfRoutingModule { }
