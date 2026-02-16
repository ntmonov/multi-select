import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiSelectComponent } from '../multi-select/multi-select.component';

@Component({
  selector: 'app-root',
  imports: [MultiSelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'multi-select';
  options = [
    {
      label: 'Bulgaria',
      value: 'BG',
      enabled: true
    },
    {
      label: 'Germany',
      value: 'GE',
      enabled: true
    },
    {
      label: 'France',
      value: 'FR',
      enabled: true
    },
    {
      label: 'Belgium',
      value: 'BE',
      enabled: true
    },
    {
      label: 'Italy',
      value: 'IT',
      enabled: true
    }
  ]
}
