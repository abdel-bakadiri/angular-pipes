import { Component, OnInit } from '@angular/core';
import { JsonPipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.car);
  }
  receiverName: string = '';
  paymentDate: string = '';
  amount: number = 0;
  height: number = 0;
  milles: number = 0;
  car = {
    make: 'Fiat',
    model: 'Palio',
    year: '2002',
  };
  onInputName(name: string) {
    this.receiverName = name;
  }
  onInputDate(date: string) {
    this.paymentDate = date;
  }
  onInputAmount(amount: string) {
    this.amount = parseFloat(amount);
  }
  onInputHeight(height: string) {
    this.height = parseFloat(height);
  }
  onInputMilles(milles: string) {
    this.milles = parseFloat(milles);
  }
}
