import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  readonly rating = input.required<number>();
  readonly ratingArray = computed(() =>
    new Array(this.rating()).fill(1)
    /*Array.from({ length: this.rating() }, (_, i) => i + 1)*/
  );
}
