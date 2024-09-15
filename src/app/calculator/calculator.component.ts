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
  display: string = '';
  previousResult: number = 0;
  operator: string = '';
  readonly precision: number = 10;


  digitButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '+/-', '0', '.'];
  operatorButtons = ['+', '-', '*', '/'];

  controlButtons = ['C', 'CE', '='];
  
  getDisplay(): string {
    return this.display === '' ? this.previousResult.toString() : this.display;
  }

  setNegative() {
    if (this.display === '0') {
      return;
    }
    if (this.display.charAt(0) === '-') {
      this.display = this.display.substring(1);
    } else {
      this.display === '' ? this.previousResult *= -1 : this.display = '-' + this.display;
    }
  }

  addDecimal() {
    if (this.display.indexOf('.') !== -1) {
      return;
    }
    if (this.display === '') {
      this.display += '0';
    }
    this.display += '.';
  }

  addDigit(value: string) {
    if (this.display === '' || this.display === '0') {
      this.display = value;
    } else {
      this.display += value;
    }
  }

  onDigitClick(value: string) {
    this.DebugLog("Before " + value);
    switch (value) {
      case '.':
        this.addDecimal();
        break;
      case '+/-':
        this.setNegative();
        break;
      default:
        this.addDigit(value);
        break;
    }
    this.DebugLog("After " + value);
  }


  onControlClick(value: string) {
    this.DebugLog("Before " + value);
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
        break;
    }
    this.DebugLog("After " + value);
  }

  onOperatorClick(value: string) {
    this.DebugLog("Before " + value);
    if (this.display !== '') {
      this.calculate();
      if (this.operator === '') {
        this.previousResult = parseFloat(this.display);
      }
    }
    this.operator = value;
    this.display = ''; 
    this.DebugLog("After " + value);
  }

  roundTo(value: number, decimals: number): number {
    return Number(Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals));
  }

  calculate() {
    const currentNumber = parseFloat(this.display);
    if (this.operator === '+') {
      this.previousResult = this.roundTo(this.previousResult + currentNumber, this.precision);
    } else if (this.operator === '-') {
      this.previousResult = this.roundTo(this.previousResult - currentNumber, this.precision);
    } else if (this.operator === '*') {
      this.previousResult = this.roundTo(this.previousResult * currentNumber, this.precision);
    } else if (this.operator === '/') {
      this.previousResult = this.roundTo(this.previousResult / currentNumber, this.precision);
    }
  }

  DebugLog(value: string) {
    console.log(value,"Prev:", this.previousResult, "Operator: ", this.operator, "Display: ", this.display);
  }
}

