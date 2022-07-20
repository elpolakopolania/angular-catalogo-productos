import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrademarksRoutingModule } from './trademarks-routing.module';
import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/form/form.component';
import { ModalComponent } from './generals/modal/modal.component';
import { MaterialModule } from '../material/material.module';
import { CreateComponent } from './pages/create/create.component';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    ModalComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    TrademarksRoutingModule,
    MaterialModule
  ]
})
export class TrademarksModule { }
