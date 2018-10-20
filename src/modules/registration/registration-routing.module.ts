import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationHostComponent } from './registration-host/registration-host.component';

const routes: Routes = [
  {
    path: '', 
    component: RegistrationHostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
