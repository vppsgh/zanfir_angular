
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
// import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs';


@Injectable()
export class WebService {
    BASE_URL = 'http://localhost:63145/api';

    private messageStore = [];

    private messageSubject = new Subject();

    messages = this.messageSubject.asObservable();

    constructor(private http: HttpClient, private sb : MatSnackBar) {
        // this.getMessages();
    }

    getMessages(user) {
            user = (user) ? '/' + user : '';
            this.http.get<any>(this.BASE_URL + '/messages' + user)
            .subscribe(
                response => {
                    console.log(response);
                    this.messageStore = response;
                    this.messageSubject.next(this.messageStore);
                }, error => { 
                    this.handleError("Unable to get messages");
                }
            )
        
    }

    postMessage(message) {

        const requestOptions: Object = {
            responseType: 'text'
        }
        this.http.post<any>(this.BASE_URL + '/messages', message)
            .subscribe(
                (data) => {
                this.messageStore.push(data);
                this.messageSubject.next(this.messageStore);
                console.log("aa1" + data + "aa2");
                },
                (error) => { 
                    this.handleError("Unable to post message");
                }
            )
    }

    private handleError(error) {
        console.error(error);
        this.sb.open("Unable to get message", 'close', {duration: 2000});
    }
}