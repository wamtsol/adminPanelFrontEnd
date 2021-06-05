import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'select', 'id', 'name','name', 'weight','weight', 'symbol', 'status', 'menu'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(MatDialog);
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  status: string;
  id:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', status:'status',id:1, },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', status:'status',id:1,  },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', status:'status',id:1,  },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', status:'status',id:1, },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', status:'status',id:1, },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', status:'status',id:1, },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', status:'status',id:1, },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', status:'status',id:1, },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',status:'status',id:1,  },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',status:'status',id:1,  },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',status:'status',id:1,  },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',status:'status',id:1,  },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',status:'status',id:1,  },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',status:'status',id:1,  },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',status:'status',id:1,  },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',status:'status',id:1,  },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',status:'status',id:1,  },
];