import { Component } from '@angular/core';

@Component({
    selector: 'nav',
    template: `
        <mat-toolbar color="primary">
            "Message board"
            <button mat-button routerLink="/messages" >Messages</button>
        </mat-toolbar>
    `
})

export class NavComponent {
    constructor() {}
}
