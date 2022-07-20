import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { FormComponent } from './pages/form/form.component';
import { ListComponent } from './pages/list/list.component';
import { GeneralsComponent } from './generals/generals.component';


@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    GeneralsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
