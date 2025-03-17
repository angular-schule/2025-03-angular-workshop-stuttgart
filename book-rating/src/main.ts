import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


///////////////

export class Customer {

  // Property
  #age: number = 18;

  constructor() {
    this.#age = 20;
  }

  // Methode
  #makeFoo(arg: number): string {
    return 'dfgdf';
  }
}


const myCustomer = new Customer();
// myCustomer.makeFoo()




const foo = arg => arg + 1;


const result = foo(5);

setTimeout(() => {

}, 2000);
