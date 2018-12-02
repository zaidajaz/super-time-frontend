import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/store/ApplicationState';
import * as ApplicationActions from '../../../store/actions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiUrls } from '../../../global-constants/api-urls';
import { StockQuantityModifyReq } from '../stock.models/stock-quantity-modify-req';

@Injectable({
  providedIn: 'root'
})
export class StockActionsService {

  constructor(
    private store: Store<ApplicationState>,
    private http: HttpClient
    ) { }

  public loadProductData(filter): any{
    let url = filter?ApiUrls.apiBaseUrl + '/stock/search?filter='+filter:ApiUrls.apiBaseUrl+'/stock/search';
    return this.http.get(url);
  }

  public modifyStockQty(requestData: StockQuantityModifyReq): any {
    return this.http.post(ApiUrls.apiBaseUrl + '/stock/modifystockquantity', requestData);
  }
}