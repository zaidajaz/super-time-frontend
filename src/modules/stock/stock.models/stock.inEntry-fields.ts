import { FormControl } from "@angular/forms";

export interface StockInEntryFields {
    itemName: FormControl;
    action: FormControl;
    value: FormControl;
    reason: FormControl;
}
