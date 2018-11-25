import { FormControl } from "@angular/forms";

export interface CustomerCreationFields {
    cust_phone: FormControl;
    cust_name: FormControl;
    cust_addr: FormControl;
    cust_email: FormControl;
    cust_dob: FormControl;

}
