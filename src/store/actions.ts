import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { StockListSearchResults } from 'src/modules/stock/stock.models/stock-list-search-results';
import { CustomerSearchResults } from 'src/modules/customers/models/customer-search-results';


export const ADD_NEW_STOCK_SEARCH_RES = 'ADD NEW STOCK SEARCH RES';
export const LOAD_CUSTOMERS = 'LOAD CUSTOMERS';

export class AddNewStockSearchRes implements Action{
    readonly type = ADD_NEW_STOCK_SEARCH_RES;
    constructor(public payload: StockListSearchResults[]) {

    }
}

export class LoadCustomers implements Action {
    readonly type = LOAD_CUSTOMERS;
    constructor(public payload: CustomerSearchResults[]) { }
}

export type Actions = AddNewStockSearchRes | LoadCustomers;
