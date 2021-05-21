import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['serial', 'check', 'id', 'account', 'date', 'type', 'invoice', 'checkno', 'details', 'totalamount', 'status', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  serial: number;
  check: string;
  id: number;
  account: string;
  date: string;
  type: string;
  invoice: string;
  checkno: string;
  details: string;
  totalamount: string;
  status: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { serial: 1, check: '<mat-checkbox></mat-checkbox>', id: 1.0079, account: 'ali', date: '12/12/2021', type: 'type', invoice: '12', checkno: '12', details: 'dsfsdfdf', totalamount: '1', status: '12', action: 'eeee' },
  { serial: 2, check: '<mat-checkbox></mat-checkbox>', id: 1.0079, account: 'ali', date: '12/12/2021', type: 'type', invoice: '12', checkno: '12', details: 'dsfsdfdf', totalamount: '2', status: '12', action: 'eeee' },
  { serial: 3, check: '<mat-checkbox></mat-checkbox>', id: 1.0079, account: 'ali', date: '12/12/2021', type: 'type', invoice: '12', checkno: '12', details: 'dsfsdfdf', totalamount: '3', status: '12', action: 'eeee' },
  { serial: 4, check: '<mat-checkbox></mat-checkbox>', id: 1.0079, account: 'ali', date: '12/12/2021', type: 'type', invoice: '12', checkno: '12', details: 'dsfsdfdf', totalamount: '4', status: '12', action: 'eeee' },
  { serial: 5, check: '<mat-checkbox></mat-checkbox>', id: 1.0079, account: 'ali', date: '12/12/2021', type: 'type', invoice: '12', checkno: '12', details: 'dsfsdfdf', totalamount: '5', status: '12', action: 'eeee' },
  { serial: 6, check: '<mat-checkbox></mat-checkbox>', id: 1.0079, account: 'ali', date: '12/12/2021', type: 'type', invoice: '12', checkno: '12', details: 'dsfsdfdf', totalamount: '6', status: '12', action: 'eeee' },
  { serial: 7, check: '<mat-checkbox></mat-checkbox>', id: 1.0079, account: 'ali', date: '12/12/2021', type: 'type', invoice: '12', checkno: '12', details: 'dsfsdfdf', totalamount: '7', status: '12', action: 'eeee' },
  { serial: 8, check: '<mat-checkbox></mat-checkbox>', id: 1.0079, account: 'ali', date: '12/12/2021', type: 'type', invoice: '12', checkno: '12', details: 'dsfsdfdf', totalamount: '8', status: '12', action: 'eeee' },
  { serial: 9, check: '<mat-checkbox></mat-checkbox>', id: 1.0079, account: 'ali', date: '12/12/2021', type: 'type', invoice: '12', checkno: '12', details: 'dsfsdfdf', totalamount: '9', status: '12', action: 'eeee' },
  { serial: 10, check: '<mat-checkbox></mat-checkbox>', id: 1.0079, account: 'ali', date: '12/12/2021', type: 'type', invoice: '12', checkno: '12', details: 'dsfsdfdf', totalamount: '10', status: '12', action: 'eeee' },
  { serial: 11, check: '<mat-checkbox></mat-checkbox>', id: 1.0079, account: 'ali', date: '12/12/2021', type: 'type', invoice: '12', checkno: '12', details: 'dsfsdfdf', totalamount: '11', status: '12', action: 'eeee' },
  { serial: 12, check: '<mat-checkbox></mat-checkbox>', id: 1.0079, account: 'ali', date: '12/12/2021', type: 'type', invoice: '12', checkno: '12', details: 'dsfsdfdf', totalamount: '12', status: '12', action: 'eeee' },
  { serial: 13, check: '<mat-checkbox></mat-checkbox>', id: 1.0079, account: 'ali', date: '12/12/2021', type: 'type', invoice: '12', checkno: '12', details: 'dsfsdfdf', totalamount: '13', status: '12', action: 'eeee' },
  { serial: 14, check: '<mat-checkbox></mat-checkbox>', id: 1.0079, account: 'ali', date: '12/12/2021', type: 'type', invoice: '12', checkno: '12', details: 'dsfsdfdf', totalamount: '14', status: '12', action: 'eeee' },
  { serial: 15, check: '<mat-checkbox></mat-checkbox>', id: 1.0079, account: 'ali', date: '12/12/2021', type: 'type', invoice: '12', checkno: '12', details: 'dsfsdfdf', totalamount: '15', status: '12', action: 'eeee' },
  { serial: 16, check: '<mat-checkbox></mat-checkbox>', id: 1.0079, account: 'ali', date: '12/12/2021', type: 'type', invoice: '12', checkno: '12', details: 'dsfsdfdf', totalamount: '16', status: '12', action: 'eeee' },
  { serial: 17, check: '<mat-checkbox></mat-checkbox>', id: 1.0079, account: 'ali', date: '12/12/2021', type: 'type', invoice: '12', checkno: '12', details: 'dsfsdfdf', totalamount: '17', status: '12', action: 'eeee' },
  { serial: 18, check: '<mat-checkbox></mat-checkbox>', id: 1.0079, account: 'ali', date: '12/12/2021', type: 'type', invoice: '12', checkno: '12', details: 'dsfsdfdf', totalamount: '18', status: '12', action: 'eeee' },
  { serial: 19, check: '<mat-checkbox></mat-checkbox>', id: 1.0079, account: 'ali', date: '12/12/2021', type: 'type', invoice: '12', checkno: '12', details: 'dsfsdfdf', totalamount: '19', status: '12', action: 'eeee' },
  { serial: 20, check: '<mat-checkbox></mat-checkbox>', id: 1.0079, account: 'ali', date: '12/12/2021', type: 'type', invoice: '12', checkno: '12', details: 'dsfsdfdf', totalamount: '20', status: '12', action: 'eeee' },
];
