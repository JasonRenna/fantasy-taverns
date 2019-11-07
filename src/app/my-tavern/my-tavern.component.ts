import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyTavernService, MyRooms } from './my-tavern.service';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
    templateUrl: './my-tavern.component.html'
})

export class TavernsComponent implements OnInit, OnDestroy {

    rooms: MyRooms[];
    searchText = '';
    searchUpdated = new Subject<string>();
    subscription = new Subscription();
    
    constructor(private MyTavernService: MyTavernService){
        this.subscription = this.searchUpdated
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
            )
            .subscribe((newValue) => {
                this.searchTavern(newValue);
            });
    }
    ngOnInit(): void {
        this.MyTavernService.getAll().subscribe((rooms) => {console.log(rooms); this.rooms = rooms;});
        this.searchTavern('');
    }
    searchTavern(newValue: string): any {
        this.MyTavernService.getAll().subscribe((rooms) => {
            this.rooms = rooms;
        });    }
        search($event): void {
            this.searchUpdated.next($event.target.value);
        }
    
        ngOnDestroy(): void {
            this.subscription.unsubscribe();
        }
}