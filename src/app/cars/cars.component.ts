import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  // addCarStatus = ' ';
  carName = ' ';
  addCarStatus = false;
  // inputText =  ' ';
  // inputText =  'Default text';

  // canAddCar = false;

  constructor(){
    // setTimeout(() => {
    //   this.canAddCar = true;
    // }, 4000);
  }

  addCar() {
    this.addCarStatus = true;
    // this.addCarStatus = 'Машина добавлена!'
  }

  // onKeyUp(event: Event) {
  //   this.inputText = (<HTMLInputElement>event.target).value;
  // }

  // onKeyUp(value) {
  //   this.inputText = value;
  // }

  // onKeyUp(event) {
  //   this.inputText = event.target.value;
  // }

}
