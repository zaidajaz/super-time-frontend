import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockActionsService } from '../../services/stock-actions.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/store/ApplicationState';
import { MatFormField } from '@angular/material';
import { StockQuantityModifyReq } from '../../stock.models/stock-quantity-modify-req';

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
    private store: Store<ApplicationState>
    ) { }

  ngOnInit() {
    this.store.select('reducer').
    subscribe(data => {this.dataSource = data;console.log(data);});
    this.service.loadProductData(null);
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
        reason: this.reasonValue,
        qty: Math.abs(this.changeValue),
        modified_by: "admin",
        inv_id: this.changeId
      }
      this.service.modifyStockQty(modifyReq);
      this.selected = this.showReason = this.changeValue = this.reasonValue = null;
    }
  }
  public editClicked(index, id){
    this.changeValue=null;
    this.selected=index;
    this.changeId=id;
    let focusFieldId = "qty_change_field_" + index; 
    setTimeout(()=>document.getElementById(focusFieldId).focus(), 0);
  }
  public searchWithFilter(){
    this.service.loadProductData(this.filter);
  }
}