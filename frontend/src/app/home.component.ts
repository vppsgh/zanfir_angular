import { Component } from '@angular/core';
import { NavComponent } from './nav.component';

@Component({
  selector: 'home',
  template: `
    <nav></nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class HomeComponent {

}