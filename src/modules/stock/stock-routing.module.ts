import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockHostComponent } from './components/stock-host/stock-host.component';

const routes: Routes = [
  {
    path: '', 
    component: StockHostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
