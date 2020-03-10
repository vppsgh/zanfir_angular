import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'nav',
    template: `
        <mat-toolbar color="primary">
            <button mat-button routerLink="/" >Message board</button>
            <button mat-button routerLink="/messages" >Messages</button>
            <span style="flex: 1 1 auto"></span>
            <button mat-button routerLink="/register" >Register</button>
            <button *ngIf="isAuthenticated" mat-button routerLink="/register" >Welcome {{usrName}}</button>
        </mat-toolbar>
    `
})
export class NavComponent {

    constructor( private auth: AuthService) {}

    get usrName() {return this.auth.name;}
    get isAuthenticated() {return this.auth.isAuthenticated;}
}
