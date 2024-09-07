import { Component } from '@angular/core';
import { DisplayComponent } from '../display/display.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [DisplayComponent, ButtonComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  show: string = '';
  onButtonClick(value: string) {
    console.log('Button: ', value);
    this.show = value;
  }

}
