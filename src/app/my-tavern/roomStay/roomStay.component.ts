import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyTavernService, room } from '../my-tavern.service';
import { Router, Params } from '@angular/router';

@Component({
    selector: 'app-tavern-stay',
    templateUrl: './roomStay.component.html',
})
export class roomStayComponent implements OnInit {
    
    constructor(private TavernService: MyTavernService, private router: Router) {}

    ngOnInit() {}

    bookRoom(TavernForm: NgForm): void {
        console.log('component');
        if (TavernForm.valid) {
            console.log('comp form valid');
            this.TavernService.bookRoom(TavernForm.value).subscribe((_room) => {
                console.log('comp TServe');
            });
        }
    }
}