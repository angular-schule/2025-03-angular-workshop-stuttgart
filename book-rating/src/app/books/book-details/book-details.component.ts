import { Component, inject, input, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'app-book-details',
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  #route = inject(ActivatedRoute);
  #bs = inject(BookStoreService);

  readonly book = signal<Book | undefined>(undefined);

  constructor() {
    const isbn = this.#route.snapshot.paramMap.get('isbn')!; // Non-Null Assertion // path: 'books/:isbn'
    this.#bs.getSingle(isbn).subscribe(book => {
      this.book.set(book);
    })


    /* AUFGABE:
    - HTTP-Request mit der ISBN machen
    - Buch im Signal speichern
    - Buch im Template anzeigen (ganz simpel, z.B. Titel und Beschreibung)
    - @let name = expression;
    */
  }
}
