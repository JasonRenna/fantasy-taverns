import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TavernService {

  constructor(private http: HttpClient) { }

  getTaverns(): Observable<any> {
    return this.http.post('http://localhost:3000/tavernList', '');
  }
  
}