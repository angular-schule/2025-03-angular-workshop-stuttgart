import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { BookCreateComponent } from "./book-create/book-create.component";
import { BookSearchComponent } from "./book-search/book-search.component";

export const booksRoutes: Routes = [
  { path: 'books', component: DashboardComponent, title: 'Dashboard' },
  { path: 'books/create', component: BookCreateComponent, title: 'Create' },
  { path: 'books/search', component: BookSearchComponent, title: 'Search' },
  { path: 'books/:isbn', component: BookDetailsComponent, title: 'Details' },
];
