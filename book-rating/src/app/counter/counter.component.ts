import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  readonly counter = signal(0);
  readonly counter100 = computed(() => this.counter() * 100)

  constructor() {
    effect(() => {
      console.log('Counter:', this.counter());
    });
  }

  increment() {
    this.counter.update(current => current + 1);
  }

  decrement() {
    this.counter.update(current => current - 1);
  }

  reset() {
    this.counter.set(0);
  }

}
