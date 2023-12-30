import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increment()">Increment</button>
    <p>Count: {{count}}</p>
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit{

  @Input() count: number = 1;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();

  increment(){
    this.count++;
    this.countChange.emit(this.count);
  }

  ngOnInit() {
  }
}
