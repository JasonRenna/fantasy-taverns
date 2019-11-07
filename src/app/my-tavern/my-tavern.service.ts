import { Injectable } from "@angular/core"
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface MyRooms {
    TavernName: string;
    Id: number;
    Name: string;
    Status: string;
    Rate: number;
}

export interface room {
    Id: number;
    Name: string;
    Status: string;
    Rate: number;
}

@Injectable({
    providedIn: 'root',
})
export class MyTavernService {
    constructor(private http: HttpClient){}
    getAll(): Observable<MyRooms[]>{
        return this.http.get<MyRooms[]>('http://localhost:3000/my-tavern');
    }
    addRoom(room: room): Observable<room> {
        return this.http.post<room>('http://localhost:3000/my-tavern/add?RoomName={RoomName}&DailyRate={DailyRate}', room);
    }
    updateRoom(room: room): Observable<room> {
        return this.http.post<room>('http://localhost:3000/my-tavern/update?ID={ID}&RoomName={RoomName}&DailyRate={DailyRate}', room);
    }
    bookRoom(value: room): Observable<room> {
        return this.http.get<room>('http://localhost:3000/my-tavern/roomStay?ID={ID}&RoomName={RoomName}&DailyRate={DailyRate}');
    }
}