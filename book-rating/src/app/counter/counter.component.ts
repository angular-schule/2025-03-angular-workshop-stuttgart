import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  readonly counter = signal(0);

  increment() {
    this.counter.update(current => current + 1);
  }

  decrement() {
    this.counter.update(current => current - 1);
  }

}
