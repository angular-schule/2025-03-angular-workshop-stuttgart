import { Component, inject, input, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { map, mergeMap, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book-details',
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  #route = inject(ActivatedRoute);
  #bs = inject(BookStoreService);

  readonly book = toSignal(
    this.#route.paramMap.pipe(
      map(params => params.get('isbn')!),
      switchMap(isbn => this.#bs.getSingle(isbn))
    )
  );

  constructor() {
    // PULL
    /*const isbn = this.#route.snapshot.paramMap.get('isbn')!; // Non-Null Assertion, gefährlich! // path: 'books/:isbn'
    this.#bs.getSingle(isbn).subscribe(book => {
      this.book.set(book);
    })*/


    // PUSH






    /* AUFGABE:
    - HTTP-Request mit der ISBN machen
    - Buch im Signal speichern
    - Buch im Template anzeigen (ganz simpel, z.B. Titel und Beschreibung)
    - @let name = expression;
    */
  }
}
