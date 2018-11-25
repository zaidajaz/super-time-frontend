import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { MaterialImports } from '../shared/material-imports';
import { CustomerHostComponent } from './components/customer-host/customer-host.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MaterialImports,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [CustomerHostComponent, CustomerListComponent, CustomerCreateComponent]
})
export class CustomersModule { }
