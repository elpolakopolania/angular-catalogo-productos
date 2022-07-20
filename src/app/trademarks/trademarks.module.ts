import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrademarksRoutingModule } from './trademarks-routing.module';
import { ListComponent } from './pages/list/list.component';
import { ModalComponent } from './generals/modal/modal.component';
import { MaterialModule } from '../material/material.module';
import { CreateComponent } from './pages/create/create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateComponent } from './pages/update/update.component';


@NgModule({
  declarations: [
    ListComponent,
    ModalComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    TrademarksRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TrademarksModule { }
