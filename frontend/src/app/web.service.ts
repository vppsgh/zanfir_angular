
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
// import 'rxjs/add/operator/toPromise';


@Injectable()
export class WebService {
    BASE_URL = 'http://localhost:63145/api';

    messages = [];

    constructor(private http: HttpClient, private sb : MatSnackBar) {
        this.getMessages();
    }

    getMessages() {
            this.http.get<any>(this.BASE_URL + '/messages')
            .subscribe(
                (data) => {
                this.messages = data;
                console.log(JSON.stringify(data));
                },
                (error) => { 
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
                this.messages.push(data);
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