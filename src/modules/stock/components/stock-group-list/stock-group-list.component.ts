import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-stock-group-list',
  templateUrl: './stock-group-list.component.html',
  styleUrls: ['./stock-group-list.component.css']
})
export class StockGroupListComponent implements OnInit {
  displayedColumns: string[] = ['select', 'name'];
  data: any;
  dataSource;
  selection = new SelectionModel<any>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getStockGroupData();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  getStockGroupData(){
    this.http.get('http://localhost:3000/api/stock/stockgroup').subscribe(
      (res:any)=>{
        if(res.valid){
          this.data = res.responseObj;
          this.dataSource = new MatTableDataSource<any>(this.data);
          this.dataSource.paginator = this.paginator;
        }
      }
    );
  }
}
