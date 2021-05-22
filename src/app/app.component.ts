import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adminPanel';
  showFiller = false;
  typesOfShoes: string[] = ['Boots','Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
