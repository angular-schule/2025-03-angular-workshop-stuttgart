import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {


  #apiUrl = 'https://api.angular.schule';
  #http = inject(HttpClient);

  getAll(): Observable<Book[]> {
    return this.#http.get<Book[]>(`${this.#apiUrl}/books`); // this.#apiUrl + '/books'
  }

  getSingle(isbn: string): Observable<Book> {
    return this.#http.get<Book>(`${this.#apiUrl}/books/${isbn}`)
  }

  create(book: Book): Observable<Book> {
    return this.#http.post<Book>(`${this.#apiUrl}/books`, book);
  }

  search(term: string): Observable<Book[]> {
    return this.#http.get<Book[]>(`${this.#apiUrl}/books/search/${term}`);
  }

  deleteBook(isbn: string): Observable<unknown> {
    return this.#http.delete<unknown>(`${this.#apiUrl}/books/${isbn}`);
  }
}
