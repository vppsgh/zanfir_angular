import { Component } from '@angular/core';
import { NavComponent } from './nav.component';

@Component({
  selector: 'home',
  template: `
    <new-message></new-message>
    <messages></messages>
  `,
  styleUrls: ['./app.component.css']
})
export class HomeComponent {

}