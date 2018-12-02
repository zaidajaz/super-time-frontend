import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StockItemCreationFields } from '../../stock.models/stock.create-fields';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { StockActionsService } from '../../services/stock-actions.service';
import { ApiUrls } from 'src/global-constants/api-urls';
import { ToasterService } from 'angular2-toaster';
import { ApplicationState } from 'src/store/ApplicationState';
import * as ApplicationActions from '../../../../store/actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {
  stockItemCreationFields: StockItemCreationFields;
  stockItemCreationForm;
  public httpResMessage:string;
  constructor(
    private http: HttpClient,
    private stockActionsService: StockActionsService,
    private toastService: ToasterService,
    private store: Store<ApplicationState>
  ) {    }

  ngOnInit() {
    this.stockItemCreationFields = {
      itemName: new FormControl('', Validators.required),
      costPrice: new FormControl('', Validators.required)
    }
    this.stockItemCreationForm = new FormGroup({username: this.stockItemCreationFields.itemName, password: this.stockItemCreationFields.costPrice})
  }
  clearForm(){
    this.stockItemCreationForm.reset();
  }
  createStockItem(){
    if(this.stockItemCreationForm.valid){
      let req = {
        "list": 
        [
          this.stockItemCreationFields.itemName.value,
          this.stockItemCreationFields.costPrice.value,
          "admin",
          "admin"
        ]
      };
      let url = ApiUrls.apiBaseUrl + '/stock/create'
      this.http.post(url, req).
      subscribe((res:any)=>{
        if(res.valid){
          this.httpResMessage = "Stock Item Created";
          this.toastService.pop('success', 'SUCCESS', this.httpResMessage);
          this.clearForm();
          this.loadProductData(null);
        }
        else{
          this.httpResMessage = res.messages[0];
          this.toastService.pop('error', 'ERROR', this.httpResMessage );
        }
      });
    }
  }
  public loadProductData(filter) {
    this.stockActionsService.loadProductData(filter)
    .subscribe(
      (res:any)=>{
        if(res && res.valid){
          this.store.dispatch({
            type: ApplicationActions.ADD_NEW_STOCK_SEARCH_RES,
            payload: res.responseObj
          });
        }
        else {
          let messages = res.messages;
          messages.forEach(message => {
            this.toastService.pop('error', 'ERROR', message);
          });
        }
      }
  );
  }
}
