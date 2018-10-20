import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockHostComponent } from './components/stock-host/stock-host.component';
import { MaterialImports } from '../shared/material-imports';
import { StockGroupComponent } from './components/stock-group/stock-group.component';
import { StockGroupListComponent } from './components/stock-group-list/stock-group-list.component';

import { HttpClientModule, HttpClient } from '@angular/common/http'

@NgModule({
  imports: [
    CommonModule,
    StockRoutingModule,
    MaterialImports,
    HttpClientModule
  ],
  declarations: [StockHostComponent, StockGroupComponent, StockGroupListComponent],
  providers: [
    HttpClient
  ]
})
export class StockModule { }
