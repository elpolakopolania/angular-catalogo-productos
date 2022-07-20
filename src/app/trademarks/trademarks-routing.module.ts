import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { ListComponent } from './pages/list/list.component';
import { UpdateComponent } from './pages/update/update.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:':id/edit', component: UpdateComponent},
      {path:'create', component: CreateComponent},
      {path:'', component: ListComponent},
      {path:'**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrademarksRoutingModule { }