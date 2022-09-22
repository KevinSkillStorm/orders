import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePdfRoutingModule } from './create-pdf-routing.module';

import { CreatePdfPageComponent } from './create-pdf-page/create-pdf-page.component';

@NgModule({
  declarations: [CreatePdfPageComponent],
  imports: [CommonModule, CreatePdfRoutingModule],
})
export class CreatePdfModule {}
