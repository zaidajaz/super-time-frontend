import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { StockInEntryFields } from '../../stock.models/stock.inEntry-fields';

@Component({
  selector: 'app-stock-in-entry',
  templateUrl: './stock-in-entry.component.html',
  styleUrls: ['./stock-in-entry.component.css']
})
export class StockInEntryComponent implements OnInit {
  stockinEntryFields: StockInEntryFields;
  stockInEntryForm;
  public httpResMessage:string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.stockinEntryFields = {
      itemName: new FormControl('', Validators.required),
      action: new FormControl('', Validators.required),
      value: new FormControl('', Validators.required),
      reason: new FormControl('', Validators.required)
    }
    this.stockInEntryForm = new FormGroup
    ({
      itemName: this.stockinEntryFields.itemName, 
      action: this.stockinEntryFields.action,
      value: this.stockinEntryFields.value,
      reason: this.stockinEntryFields.reason
    })
  }
  createStockItem(){
    // if(this.stockItemCreationForm.valid){
    //   let req = {
    //     "list": 
    //     [
    //       this.stockItemCreationFields.itemName.value,
    //       this.stockItemCreationFields.costPrice.value,
    //       "admin",
    //       "admin"
    //     ]
    //   };
    //   this.http.post("http://localhost:3000/api/stock/create", req).
    //   subscribe((res:any)=>{
    //     if(res.valid){
    //       this.httpResMessage = "Success!";
    //     }
    //     else{
    //       this.httpResMessage = res.messages[0];
    //     }
    //   });
    // }
  }
}
