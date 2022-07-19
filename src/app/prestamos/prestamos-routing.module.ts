import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:'solicitud', component: SolicitudComponent},
      {path:'listado', component: ListadoComponent},
      {path:'**', redirectTo: 'listado'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PrestamosRoutingModule { }
