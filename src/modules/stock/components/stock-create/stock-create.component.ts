import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StockItemCreationFields } from '../../stock.models/stock.create-fields';
import { HttpClient } from '@angular/common/http';
import { StockActionsService } from '../../services/stock-actions.service';
import { ApiUrls } from 'src/global-constants/api-urls';

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
    private stockActionsService: StockActionsService
  ) { }

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
          this.httpResMessage = "Success!";
          this.clearForm();
          this.stockActionsService.loadProductData(null);
        }
        else{
          this.httpResMessage = res.messages[0];
        }
      });
    }
  }
}
