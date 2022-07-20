import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './pages/list/list.component';
import { ModalComponent } from './generals/modal/modal.component';
import { CreateComponent } from './pages/create/create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateComponent } from './pages/update/update.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    UpdateComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
