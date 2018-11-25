import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialImports } from '../shared/material-imports';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/store/reducers';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImports, 
    HttpClientModule,
    StoreModule.forRoot({reducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    NgxPaginationModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
