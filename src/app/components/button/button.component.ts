import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input()
  text: string;
  @Input()
  color: string;
  @Output()
  buttonClicked = new EventEmitter();

  // basically custom event
  onClick() {
    this.buttonClicked.emit();
  }
}
