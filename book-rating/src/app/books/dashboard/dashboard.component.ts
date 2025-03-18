import { Component, inject, signal } from '@angular/core';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';
import { DatePipe } from '@angular/common';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'app-dashboard',
  imports: [BookComponent, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  readonly books = signal<Book[]>([]);

  readonly myDate = signal(Date.now());

  #rs = inject(BookRatingService);
  #bs = inject(BookStoreService);

  constructor() {
    this.#bs.getAll().subscribe(receivedbooks => {
      this.books.set(receivedbooks);
    });


    setInterval(() => {
      this.myDate.set(Date.now())
    }, 1000);


  }

  doRateUp(book: Book) {
    const ratedBook = this.#rs.rateUp(book);
    this.#updateList(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.#rs.rateDown(book);
    this.#updateList(ratedBook);
  }

  #updateList(ratedBook: Book) {
    this.books.update(currentList => {
      return currentList.map(b => {
        if (b.isbn === ratedBook.isbn) {
          return ratedBook;
        } else {
          return b;
        }
      });

      /*const copiedList = [...currentList];
      const index = findIndex(ratedBook.isbn, copiedList);
      copiedList[index] = ratedBook; // Mutable Operation
      return copiedList;*/

      // [1,2,3,4].map(e => e * 10) // [10, 20, 30, 40] // Projektion
      // [1,2,3,4,5,6,7,8,9,10].filter(e => e > 5) // [6,7,8,9,10] // Prädikat
    });
  }
}
