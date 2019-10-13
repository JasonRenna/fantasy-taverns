import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.less']
})
export class SignUpComponent {
    userName = '';
    password = '';

    constructor(private router: Router, private authService: AuthService) {}

    signup(): void {
        console.log(this.userName, this.password)
    }
}
