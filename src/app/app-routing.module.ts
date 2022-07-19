import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'prestamos',
    loadChildren: () => import('./prestamos/prestamos.module').then(m => m.PrestamosModule)
  },
  {
    path: 'trademarks',
    loadChildren: () => import('./trademarks/trademarks.module').then(m => m.TrademarksModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: '**',
    redirectTo:'dashboard'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
