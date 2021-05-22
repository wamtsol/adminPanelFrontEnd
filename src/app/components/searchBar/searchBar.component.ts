import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchBar',
  templateUrl: './searchBar.component.html',
  styleUrls: ['./searchBar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() onAddAction = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddButtonClick(){
    this.onAddAction.emit();
  }

}
