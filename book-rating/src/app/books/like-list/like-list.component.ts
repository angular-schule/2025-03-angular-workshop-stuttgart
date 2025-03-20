import { Component, input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-like-list',
  imports: [],
  templateUrl: './like-list.component.html',
  styleUrl: './like-list.component.scss'
})
export class LikeListComponent {
  readonly books = input.required<Book[]>();
}
