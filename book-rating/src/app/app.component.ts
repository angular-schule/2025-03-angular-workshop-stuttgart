import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { BehaviorSubject, connectable, filter, from, interval, map, mergeAll, mergeMap, Observable, of, share, Subject, timer } from 'rxjs';
import { BookStoreService } from './books/shared/book-store.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Book Rating';
  foo = 5;
  #bs = inject(BookStoreService);

  constructor() {
    // of('Stuttgart', 'München', 'Leipzig')
    // from([1,2,3,4,5])
    // interval(1000)        // ---0---1---2---3---4---5 ...
    // timer(3000)           // ---------0|
    // timer(1000, 1000)     // ---0---1---2---3---4---5 ...
    // timer(3000, 1000)     // ---------0---1---2---3---4---5 ...
    // timer(0, 1000)        // 0---1---2---3---4---5 ...

    // 9783864906466
    /*interval(2000).pipe(
      mergeMap(() => this.#bs.getSingle('9783864906466'))
    ).subscribe(e => {
      console.log(e)
    });*/




    /*const intervalX$ = timer(0, 5000).pipe(
      map(e => e * 3),
      // filter(e => e % 2 === 0)
      // share()
    )*/

    /*const interval$ = new BehaviorSubject<number>(-1);
    intervalX$.subscribe(interval$);*/


    /*const interval$ = connectable(intervalX$);
    interval$.connect();*/


    /*interval$.subscribe({
      next: e => console.log('A', e),
      complete: () => console.log('COMPLETE')
    })*/

    /*setTimeout(() => {
      interval$.subscribe({
        next: e => console.log('B', e),
        complete: () => console.log('COMPLETE')
      })
    }, 2500)

    setTimeout(() => {
      interval$.subscribe({
        next: e => console.log('C', e),
        complete: () => console.log('COMPLETE')
      })
    }, 7500)*/


    //////////////////////////////

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
    // myObs$.subscribe(e => console.log(e))

    /*myObs$.subscribe({
      next: e => console.log(e)
    })*/

    /*producer({
      next: (e: number) => console.log('X', e),
      error: () => {},
      complete: () => {}
    });*/
  }

}
