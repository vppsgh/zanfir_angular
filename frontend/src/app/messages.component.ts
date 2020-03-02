import { Component } from '@angular/core'
import { WebService } from './web.service'

@Component({
    selector: 'messages',
    template: `
        <div *ngFor="let message of webService.messages">
            <mat-card class="card">
                <mat-card-title>{{message.owner}}</mat-card-title>
                <mat-card-content>
                    {{message.text}}
                </mat-card-content>
            </mat-card>
        </div>
    `
})

export class MessagesComponent {
    constructor( public webService : WebService ) {}


    // messages : any[];
    // ngOnInit() {
    //     var response = this.webService.getMessages().subscribe( (data) => 
    //         {
    //             this.messages = data;
    //             console.log(JSON.stringify(data));
    //         });
    // }

    // messages = [{text : "some text", owner : "vova"}, {text : "another text", owner : "vovan"}];
}
