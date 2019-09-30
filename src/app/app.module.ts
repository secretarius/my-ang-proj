import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { BackgroundDirective } from './directives/background.directive';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
