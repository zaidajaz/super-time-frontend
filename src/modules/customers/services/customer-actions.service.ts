import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/store/ApplicationState';
import { HttpClient } from '@angular/common/http';
import { ApiUrls } from 'src/global-constants/api-urls';
import * as ApplicationActions from '../../../store/actions';


@Injectable({
  providedIn: 'root'
})
export class CustomerActionsService {

  constructor(
    private store: Store<ApplicationState>,
    private http: HttpClient
  ) { }

  public loadCustomerData(filter) {
    let url = filter?ApiUrls.apiBaseUrl + '/customers/search?filter='+filter:ApiUrls.apiBaseUrl+'/customers/search';
    this.http.get(url).subscribe(
      (res:any)=>{
        if(res.valid){
          this.store.dispatch({
            type: ApplicationActions.LOAD_CUSTOMERS,
            payload: res.responseObj
          })
        }
      }
    );
  }
}
