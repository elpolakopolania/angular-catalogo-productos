import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrademarksRoutingModule } from './trademarks-routing.module';
import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/form/form.component';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    TrademarksRoutingModule
  ]
})
export class TrademarksModule { }
