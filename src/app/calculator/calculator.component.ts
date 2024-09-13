import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})

export class CalculatorComponent {
  display: string = '0';
  previousResult: number = 0;
  operator: string = '';


  digitButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '+/-', '0', '.'];
  operatorButtons = ['+', '-', '*', '/'];

  controlButtons = ['C', 'CE', '='];
  

  onDigitClick(value: string) {

    if (value === '.' && this.display.indexOf('.') !== -1) {
      return;
    }
    if (value === '+/-') {
      if (this.display.charAt(0) === '-') {
        this.display = this.display.substring(1);
      } else {
        this.display = '-' + this.display;
      }
      return;
    }
    if (this.display === '0' && value !== '.') {
      this.display = value;
    } else {
      this.display += value;
    }
  }

  getDisplay(): string {
    return this.display === '' ? this.previousResult.toString() : this.display;
  }

  onControlClick(value: string) {
    this.logAll();
    switch (value) {
      case 'C':
        this.display = '0';
        this.previousResult = 0;
        break;
      case 'CE':
        this.display = '0';
        break;
      case '=':
        this.calculate();
        this.operator = '';
        this.display = '';
        // this.previousResult = 0;
        break;
    }
  }

  onOperatorClick(value: string) {
    this.logAll();
    this.calculate();
    if (this.operator === '' && this.display !== '') {
      this.previousResult = parseFloat(this.display);
    }
    this.operator = value;
    this.display = '';
    this.logAll(); 
  }

  roundTo(value: number, decimals: number): number {
    return Number(Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals));
  }

  calculate() {
    const currentNumber = parseFloat(this.display);
    const precision = 10;  // Adjust precision as needed

    if (this.operator === '+') {
      this.previousResult = this.roundTo(this.previousResult + currentNumber, precision);
    } else if (this.operator === '-') {
      this.previousResult = this.roundTo(this.previousResult - currentNumber, precision);
    } else if (this.operator === '*') {
      this.previousResult = this.roundTo(this.previousResult * currentNumber, precision);
    } else if (this.operator === '/') {
      this.previousResult = this.roundTo(this.previousResult / currentNumber, precision);
    }
  }

  logAll() {
    console.log("Prev:", this.previousResult, "Operator: ", this.operator, "Display: ", this.display);
  }
}

