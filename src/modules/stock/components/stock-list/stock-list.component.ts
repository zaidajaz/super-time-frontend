import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockActionsService } from '../../services/stock-actions.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/store/ApplicationState';
import { MatFormField } from '@angular/material';
import * as ApplicationActions from '../../../../store/actions';
import { StockQuantityModifyReq } from '../../stock.models/stock-quantity-modify-req';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  public dataSource;
  public selected;
  public changeValue;
  public changeId;
  public showReason;
  public reasonValue;
  public filter;
  public currentPage = 1;

  constructor(private http: HttpClient, 
    private service: StockActionsService,
    private store: Store<ApplicationState>,
    private toastService: ToasterService
    ) { }

  ngOnInit() {
    this.store.select('reducer').
    subscribe(data => {this.dataSource = data;});
    this.loadProductData(null);
  }
  public loadProductData(filter) {
    this.service.loadProductData(filter)
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
  public changeStockValue(index){
    if(this.changeValue) { 
      this.showReason = this.selected;
      this.selected = null;
      let focusFieldId = "reason_change_field_" + index; 
      setTimeout(()=>document.getElementById(focusFieldId).focus(), 0);
    }
  }
  public reasonChanged(){
    if(this.reasonValue) {
      let modifyReq: StockQuantityModifyReq = {
        action: this.changeValue>=0?'i':'d',
        reason: this.reasonValue + ' [' + this.changeValue +']',
        qty: Math.abs(this.changeValue),
        modified_by: "admin",
        inv_id: this.changeId
      }
      this.modifyStockQty(modifyReq);
      this.selected = this.showReason = this.changeValue = this.reasonValue = null;
    }
  }
  public modifyStockQty(modifyReq){
    this.service.modifyStockQty(modifyReq)
    .subscribe(
      (res:any)=>{
        if(res.valid) {
          this.loadProductData(null);
          let messages = res.messages;
          messages.forEach(message => this.toastService.pop('success','SUCCESS',message));
        }
        else {
          let messages = res.messages;
          messages.forEach(message => this.toastService.pop('error','ERROR',message));
        }
      }
    );
  }
  public editClicked(index, id){
    this.changeValue=null;
    this.selected=index;
    this.changeId=id;
    let focusFieldId = "qty_change_field_" + index; 
    setTimeout(()=>document.getElementById(focusFieldId).focus(), 0);
  }
  public searchWithFilter(){
    this.loadProductData(this.filter);
  }
}