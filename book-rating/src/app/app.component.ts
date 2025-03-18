import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Book Rating';
  foo = 5;

  constructor() {
    // Producer: generiert Werte
    function producer(sub: any) {
      const result = Math.random();
      sub.next(result);
      const result2 = Math.random();
      sub.next(result2);

      setTimeout(() => sub.next(5), 2000)
      setTimeout(() => sub.next(10), 3000)
      setTimeout(() => sub.complete(), 4000)
    }

    // Observer: empfängt die Werte aus dem Datenstrom
    const obs = {
      next: (e: number) => console.log(e),
      error: (err: any) => console.error(err),
      complete: () => console.log('FERTIG'),
    }

    // Observable: Schnittstelle zwischen Producer und Observer
    // $: Finnische Notation
    const myObs$ = new Observable<number>(sub => {
      const result = Math.random();
      sub.next(result);
      const result2 = Math.random();
      sub.next(result2);

      setTimeout(() => sub.next(5), 2000)
      setTimeout(() => sub.next(10), 3000)
      setTimeout(() => sub.complete(), 4000)
    });

    // producer(obs);
    // myObs$.subscribe(obs);
    myObs$.subscribe(e => console.log(e))

    myObs$.subscribe({
      next: e => console.log(e)
    })

    /*producer({
      next: (e: number) => console.log('X', e),
      error: () => {},
      complete: () => {}
    });*/
  }

}
