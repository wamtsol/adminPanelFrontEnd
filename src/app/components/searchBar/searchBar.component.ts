import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-searchBar',
  templateUrl: './searchBar.component.html',
  styleUrls: ['./searchBar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() onAddAction = new EventEmitter();
  @ViewChild("expansionPanel") expansionPanel: MatExpansionPanel;

  constructor() { }

  ngOnInit() {
  }

  onAddButtonClick() {
    this.onAddAction.emit();
  }

  showContent() {
    this.expansionPanel.toggle();
  }

}
