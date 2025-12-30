import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Observable, tap } from 'rxjs';
import { MyBookingsResponse } from '../../models/model';
import { Getbookings } from '../../services/getbookings';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-bookings',
  imports: [CommonModule],
  templateUrl: './my-bookings.html',
  styleUrl: './my-bookings.scss',
})
export class MyBookings implements OnInit {
  myBookings$: Observable<MyBookingsResponse[]> = new Observable<MyBookingsResponse[]>();

  constructor(private bookingService: Getbookings) {}

  ngOnInit(): void {
    this.getBookings();
    // debugger;
  }

  getBookings() {
    this.myBookings$ = this.bookingService.getAllBookings().pipe(
      tap((res) => {
        console.log(res);
        // debugger;
      })
    );
  }
}
