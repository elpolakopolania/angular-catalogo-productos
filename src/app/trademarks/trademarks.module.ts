import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrademarksRoutingModule } from './trademarks-routing.module';
import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/form/form.component';
import { ModalComponent } from './generals/modal/modal.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    TrademarksRoutingModule,
    MaterialModule
  ]
})
export class TrademarksModule { }
