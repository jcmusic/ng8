import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = false;
  clickCount: number = 0;
  log = [];

  toggleDisplay(){
    this.display = !this.display;
    this.clickCount++;
    this.log.push(this.clickCount);
  }
}
