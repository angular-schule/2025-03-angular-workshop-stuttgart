import { Component, signal } from '@angular/core';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-dashboard',
  imports: [BookComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  readonly books = signal<Book[]>([]);

  constructor() {
    this.books.set([
      {
        isbn: '456',
        title: 'Angular',
        description: 'Grundlagen und mehr',
        price: 42.9,
        rating: 5,
        authors: ['FM', 'DK', 'JH']
      },
      {
        isbn: '123',
        title: 'Vue.js',
        description: 'Das grüne Framework',
        price: 32.9,
        rating: 3,
        authors: ['FD']
      },
    ]);
  }
}
