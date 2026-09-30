import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
})
export class Button {
  label = input('Button');
  clicked = output<void>();

  onClick(): void {
    this.clicked.emit();
  }
}