import { Component, OnInit, ViewChild } from '@angular/core';

import { OperationsService } from '../shared/services/operations.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('resultModal') resultModal;

  title = 'atm-simulator';
  
  currency = '$';
  amount: string;
  numbers: number[];
  
  result: any[];

  constructor(private _operationsService: OperationsService) {

  }

  ngOnInit() {
    this.amount = '0';
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];      
  }

  setAmount(amount) {
    if(this.amount === '0') {
      this.amount = '';
    }
    this.amount += amount;
  }

  clearAmount() {
    if(!(this.amount === '')) {
      this.amount = this.amount.slice(0, -1);
    }
    
    if(this.amount === '') {
      this.amount = '0';
    }
  }

  withdraw() {
    const amount = {
      amount: Number(this.amount)
    };

    this._operationsService.withdraw(amount)
    .subscribe(res => {
      this.result = res;
      this.openModal();
    })
  }

  openModal() {
    $("#resultModal").modal('show');
  }

}
