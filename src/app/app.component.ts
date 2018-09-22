import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-project';
  dataSource = {
    data: [{value: 8}, {value: 9}, {value: 7}]
  }
}
