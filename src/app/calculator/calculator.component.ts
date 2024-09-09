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
  digitButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
  operatorButtons = ['+', '-', '*', '/'];
  controlButtons = ['C', '='];
  

  onDigitClick(value: string) {
    console.log('Button: ', value);
    this.display += value;
  }

}
