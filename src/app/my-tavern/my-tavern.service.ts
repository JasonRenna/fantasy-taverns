import { Injectable } from "@angular/core"
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface MyRooms {
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
}