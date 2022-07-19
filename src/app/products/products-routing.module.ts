import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../trademarks/pages/form/form.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:'form', component: FormComponent},
      {path:'list', component: ListComponent},
      {path:'**', redirectTo: 'list'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
