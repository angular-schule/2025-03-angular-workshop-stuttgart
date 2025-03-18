import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  rateUp(book: Book): Book {
    // Early Exit
    if (book.rating >= 5) {
      return book;
    }

    return {
      // Spread Operator
      ...book,
      rating: book.rating + 1
    };
  }

  rateDown(book: Book): Book {
    return {
      ...book,
      rating: Math.max(1, book.rating - 1)
      // rating: book.rating <= 1 ? book.rating : book.rating - 1
    };
  }
}
