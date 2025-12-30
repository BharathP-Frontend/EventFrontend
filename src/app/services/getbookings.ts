import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventsResponse, MyBookingsResponse } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class Getbookings {
  private apiUrl: string = 'http://localhost:5000/api/bookings';

  constructor(private http: HttpClient) {}

  getAllBookings(): Observable<MyBookingsResponse[]> {
    return this.http.get<MyBookingsResponse[]>(this.apiUrl + '/my');
  }

  postEvent(event: EventsResponse): Observable<EventsResponse> {
    return this.http.post<EventsResponse>(`${this.apiUrl}/${event._id}`, {});
  }
}
