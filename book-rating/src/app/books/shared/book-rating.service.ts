import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  rateUp(book: Book): Book {
    return {
      // Spread Operator
      ...book,
      rating: book.rating + 1
    };
  }

  rateDown(book: Book): Book {
    return {
      ...book,
      rating: book.rating - 1
    };
  }
}
