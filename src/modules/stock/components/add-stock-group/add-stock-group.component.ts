import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-stock-group',
  templateUrl: './add-stock-group.component.html',
  styleUrls: ['./add-stock-group.component.css']
})
export class AddStockGroupComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

}