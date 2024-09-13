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


  digitButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '+/-', '0', '.'];
  operatorButtons = ['+', '-', '*', '/'];

  controlButtons = ['CE', 'C', '='];
  

  onDigitClick(value: string) {
    this.display += value;
  }

  onClick(value: string) {
    switch (value) {
      case 'CE':
        this.display = '';
        this.previousResult = 0;
        break;
      case 'C':
        this.display = '';
        break;
      case '=':
        console.log(value);
        this.operator = '';
        break;
      case '+':
        console.log(value);
        break;
      case '-':
        console.log(value);
        break;
      case '*':
        console.log(value);
        break;
      case '/':
        console.log(value);
        break;
      default:
        this.onDigitClick(value);
      
    }
  }
  calculate() {
    if (this.operator === '+') {
      this.previousResult += parseFloat(this.display);
    } else if (this.operator === '-') {
      this.previousResult -= parseFloat(this.display);
    } else if (this.operator === '*') {
      this.previousResult *= parseFloat(this.display);
    } else if (this.operator === '/') {
      this.previousResult /= parseFloat(this.display);
    }
    this.display = this.previousResult.toString();
  }
}

