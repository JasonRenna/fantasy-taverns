import { Component, OnInit } from '@angular/core';
import { MyTavernService, MyRooms } from './my-tavern.service';

@Component({
    templateUrl: './my-tavern.component.html'
})

export class TavernsComponent implements OnInit {
    rooms: MyRooms[];

    constructor(private MyTavernService: MyTavernService){
        
    }
    ngOnInit(): void {
        console.log(JSON.stringify(this.rooms));
        this.MyTavernService.getAll().subscribe((rooms) => {console.log(rooms); this.rooms = rooms;});
    }
}