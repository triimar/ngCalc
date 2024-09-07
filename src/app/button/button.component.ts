import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Output() buttonClick = new EventEmitter<string>();
  label = 'O';
  onClick() {
    this.buttonClick.emit(this.label)
  };
}
