import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: '../registration/registration.module#RegistrationModule'
  },
  {
    path: 'stock',
    loadChildren: '../stock/stock.module#StockModule'
  },
  {
    path: 'login',
    loadChildren: '../login/login.module#LoginModule'
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
