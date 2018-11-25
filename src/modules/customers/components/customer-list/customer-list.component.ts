import { Component, OnInit } from '@angular/core';
import { CustomerActionsService } from '../../services/customer-actions.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/store/ApplicationState';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public dataSource;
  public currentPage = 1;
  public filter;
  
  constructor(private service: CustomerActionsService,
    private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.store.select('reducer').subscribe(data=>this.dataSource=data);
    this.service.loadCustomerData(null);
  }

  public searchWithFilter() {
    this.service.loadCustomerData(this.filter);
  }

}
