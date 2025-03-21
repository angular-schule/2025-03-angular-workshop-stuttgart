import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { Book } from '../shared/book';
import { CurrencyPipe } from '@angular/common';
import { RatingComponent } from "../rating/rating.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  imports: [CurrencyPipe, RatingComponent, RouterLink],
  templateUrl: './book.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './book.component.scss'
})
export class BookComponent {
  // Input: hier fließen Daten von der Elternkomponente hinein
  // von oben nach unten
  readonly book = input.required<Book>();

  readonly authors = computed(() => this.book().authors.join(', '));

  // Output: hier fließen Daten zur Elternkomponente hinaus
  // von unten nach oben
  readonly rateUp = output<Book>();
  readonly rateDown = output<Book>();
  readonly deleteBook = output<Book>();
  readonly likeBook = output<Book>();

  doRateUp() {
    this.rateUp.emit(this.book());
  }

  doRateDown() {
    this.rateDown.emit(this.book());
  }

  doDelete() {
    this.deleteBook.emit(this.book())
  }

  doLike() {
    this.likeBook.emit(this.book())
  }
}
