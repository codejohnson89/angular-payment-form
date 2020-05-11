import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  dateStr: string;
  amount: number;
  miles: number;

  // use the Pipe called 'JSON' to view data on the screen instead of console.log()
  car = {
    make: 'nissan',
    model: 'altima',
    year: 2020
  }

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.dateStr = value;
  }

  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }

  onMilesChange(value: string) {
    this.miles =parseFloat(value);
  }
}
