import { LightningElement } from 'lwc';

export default class Death extends LightningElement {
    greeting = 'World';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}