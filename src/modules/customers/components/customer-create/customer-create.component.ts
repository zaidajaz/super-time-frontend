import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerCreationFields } from '../../models/customer-creation-fields';
import { HttpClient } from '@angular/common/http';
import { CustomerActionsService } from '../../services/customer-actions.service';
import { ApiUrls } from 'src/global-constants/api-urls';


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  public customerCreationFields: CustomerCreationFields;
  public customerCreationForm: FormGroup;
  public httpResMessage;

  constructor(private customerActions: CustomerActionsService,
    private http: HttpClient) { }

  ngOnInit() {
    this.customerCreationFields = {
      cust_phone: new FormControl('',Validators.required),
      cust_name: new FormControl('',Validators.required),
      cust_addr: new FormControl('',Validators.required),
      cust_email: new FormControl('',Validators.email),
      cust_dob: new FormControl('')
    };
    this.customerCreationForm = new FormGroup(
      {
        cust_phone: this.customerCreationFields.cust_phone,
        cust_name: this.customerCreationFields.cust_name,
        cust_addr: this.customerCreationFields.cust_addr,
        cust_email: this.customerCreationFields.cust_email,
        cust_dob: this.customerCreationFields.cust_dob
      }
    );
  }
  clearForm(){
    this.customerCreationForm.reset();
  }
  createCustomer(){
    if(this.customerCreationForm.valid){
      let req = {
        "list": 
        [
          this.customerCreationFields.cust_phone.value,
          this.customerCreationFields.cust_name.value,
          this.customerCreationFields.cust_addr.value?
          this.customerCreationFields.cust_addr.value:null,
          this.customerCreationFields.cust_email.value?
          this.customerCreationFields.cust_email.value:null,
          this.customerCreationFields.cust_dob.value?
          this.customerCreationFields.cust_dob.value:null,
          "admin",
          "admin"
        ]
      };
      let url = ApiUrls.apiBaseUrl + '/customers/create'
      this.http.post(url, req).
      subscribe((res:any)=>{
        if(res.valid){
          this.httpResMessage = "Success!";
          this.clearForm();
          this.customerActions.loadCustomerData(null);
        }
        else{
          this.httpResMessage = res.messages[0];
        }
      });
    }
  }
}
