import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PrestamosRoutingModule } from './prestamos-routing.module';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { CapitalComponent } from './generals/capital/capital.component';
import { MontoComponent } from './generals/monto/monto.component';

import {MatNativeDateModule} from '@angular/material/core';
import {MaterialModule} from '../material/material.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ModalComponent } from './generals/modal/modal.component';



@NgModule({
  declarations: [
    SolicitudComponent,
    ListadoComponent,
    CapitalComponent,
    MontoComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    PrestamosRoutingModule,
    MaterialModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    CapitalComponent,
    MontoComponent
  ]
})
export class PrestamosModule { }
