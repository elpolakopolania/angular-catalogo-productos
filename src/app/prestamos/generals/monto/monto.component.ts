import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-monto',
  templateUrl: './monto.component.html',
  styleUrls: ['./monto.component.css'],
})
export class MontoComponent implements OnInit {
  @Output() eventData = new EventEmitter<any>();
  showFiller = false;
  value = 10000;
  max = 100000;
  min = 10000;
  minDate: Date;
  dateToPay: any;

  constructor() {
    this.minDate = new Date();
  }

  ngOnInit(): void {}

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  cambioValor(a: any){
    this.eventData.emit({value:this.value, dateToPay:this.dateToPay});
  }
}
