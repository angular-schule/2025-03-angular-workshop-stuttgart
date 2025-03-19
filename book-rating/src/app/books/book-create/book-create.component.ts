import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-create',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.scss'
})
export class BookCreateComponent {
  #bs = inject(BookStoreService);
  #router = inject(Router);

  bookForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
        Validators.minLength(10),
        Validators.maxLength(13)
      ]
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(80)
      ]
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: []
    }),
    rating: new FormControl(1, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(1),
        Validators.max(5)
      ]
    }),
    price: new FormControl(0, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(0)
      ]
    }),
    authors: new FormArray([
      new FormControl('', { nonNullable: true }),
      new FormControl('', { nonNullable: true }),
      new FormControl('', { nonNullable: true }),
    ])
  });

  addAuthorField() {
    this.bookForm.controls.authors.push(
      new FormControl('', { nonNullable: true })
    );
  }

  isInvalid(input: FormControl): boolean {
    return input.invalid && input.touched;
  }

  hasError(input: FormControl, errorCode: string): boolean {
    return input.hasError(errorCode) && input.touched;
  }

  submitForm() {
    const newBook: Book = {
      ...this.bookForm.getRawValue()
    };

    this.#bs.create(newBook).subscribe(receivedBook => {
      this.#router.navigate(['/books', receivedBook.isbn]);
    });


    /*
    - HTTP bs.create()
    - DANACH bei Erfolg: zur Detailseite navigieren
    */
  }
}

/*
TODO:
- Fehlermeldungen anzeigen
  - "Die ISBN ist ungültig."
  - "Die ISBN ist zu kurz."
- SubmitButton deaktivieren
- Formular abschicken


*/
