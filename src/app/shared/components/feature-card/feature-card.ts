import { Component, input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  imports: [],
  templateUrl: './feature-card.html',
})
export class FeatureCard {
  title = input.required<string>();
  description = input.required<string>();
}