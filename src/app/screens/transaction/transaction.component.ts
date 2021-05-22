import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
// import { MatCheckbox } from '@angular/material/checkbox';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    // this.openDialog();
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: "Test Title"
      }
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}
