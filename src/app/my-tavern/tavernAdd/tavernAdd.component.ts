import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyTavernService, room } from '../my-tavern.service';
import { Router, Params } from '@angular/router';

@Component({
    selector: 'app-tavern-add',
    templateUrl: './tavernAdd.component.html',
})
export class TavernAddComponent implements OnInit {
    
    constructor(private TavernService: MyTavernService, private router: Router) {}

    ngOnInit() {}

    addRoom(TavernForm: NgForm): void {
        console.log('component');
        if (TavernForm.valid) {
            console.log('comp form valid');
            this.TavernService.addRoom(TavernForm.value).subscribe((_room) => {
                console.log('comp TServe');
                this.router.navigateByUrl('/my-tavern');
            });
        }
    }
}