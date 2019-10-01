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
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Bently'];
  // items = [{id: 3, name: 'item 1'}, {id: 6, name: 'item 2'}, {id: 9  , name: 'item 3'}];
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
    this.cars.push(this.carName);
    this.carName = ' ';
    
    // this.addCarStatus = 'Машина добавлена!'
  }

  setBigCarText(car: string) {

  return car.length > 4 ? true : false;
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
