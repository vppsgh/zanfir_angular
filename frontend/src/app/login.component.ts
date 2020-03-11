import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'login',
    template: `
    <mat-card>
        <form>
            <mat-form-field>
                <input matInput [(ngModel)]="this.loginData.email" name="email1" placeholder="Email" type="email">
            </mat-form-field>
            <br>
            <mat-form-field>
                <input matInput [(ngModel)]="this.loginData.password" name="password1" placeholder="Password" type="password">
            </mat-form-field>
            <br>
            <button mat-raised-button color="primary" (click)="login()">Login</button>
        </form>    
    </mat-card>
    `,
    styles: [`
    .error {
        background-color: #fff0f0
    }
  `]
})
export class LoginComponent {
    form;

    constructor( private auth: AuthService) {}

    loginData = {
        email: '',
        password: ''
    }

    login() {
        console.log(this.loginData);
        this.auth.login(this.loginData);
    }
}
