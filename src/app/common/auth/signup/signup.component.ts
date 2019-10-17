import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { TavernService } from './taverns.service';

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.less']
})
export class SignUpComponent {
    userName = '';
    password = '';
    RoleID = null;
    TavernId = null;
    TavernName = '';
    taverns = [];

    constructor(private router: Router, private authService: AuthService, private tavernService: TavernService) 
    {
        this.tavernService.getTaverns().subscribe(
            (response) => {
              console.log(response);
              this.taverns = response;
            },
            (error) => {
              console.log(error);
            }
          )
    }

    signup(): void {
        const user = { UserName: this.userName, Password: this.password, RoleID: this.RoleID ,Tavern: { ID: this.TavernId, TavernName: this.TavernName}};
        console.log(JSON.stringify(user));
        this.authService.create(user).subscribe((answer)=>{
            this.router.navigateByUrl('/login')
        });
    }
}
