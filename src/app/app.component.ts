import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-counter (countChange)="receiveData($event)"></app-counter>
    <p>counterState: {{counterState}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anotherOne';
  public counterState: number = 1;

  receiveData(count: number) {
    this.counterState = count;
  }
}
