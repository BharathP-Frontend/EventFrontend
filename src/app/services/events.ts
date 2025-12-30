import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventsResponse } from '../models/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Events {
  apiUrl: string = 'http://localhost:5000/api/events';

  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<EventsResponse[]> {
    // debugger;
    return this.http.get<EventsResponse[]>(this.apiUrl);
  }

  getSingleEvent(id: number): Observable<EventsResponse> {
    return this.http.get<EventsResponse>(`${this.apiUrl}/event/${id}`);
    debugger;

    //.pipe(map(res)=> return res.data);  //likethis we need to use if we want to transform data
  }
}
