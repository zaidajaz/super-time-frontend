import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockHostComponent } from './components/stock-host/stock-host.component';
import { MaterialImports } from '../shared/material-imports';
import { StockGroupComponent } from './components/stock-group/stock-group.component';
import { StockGroupListComponent } from './components/stock-group-list/stock-group-list.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AddStockGroupComponent } from './components/add-stock-group/add-stock-group.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockCreateComponent } from './components/stock-create/stock-create.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockInEntryComponent } from './components/stock-in-entry/stock-in-entry.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    StockRoutingModule,
    MaterialImports,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  declarations: [StockHostComponent, StockGroupComponent, StockGroupListComponent, AddStockGroupComponent, StockListComponent, StockCreateComponent, StockInEntryComponent],
  providers: [
    HttpClient
  ]
})
export class StockModule { }
