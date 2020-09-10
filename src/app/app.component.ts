import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'addressbook';

  selectedUser;

  onNotify(value) {
    console.log(value);
    this.selectedUser =(value)
  }
}
