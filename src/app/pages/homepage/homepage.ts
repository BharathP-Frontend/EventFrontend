import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Events } from '../../services/events';
import { OnInit } from '@angular/core';
import { EventsResponse } from '../../models/model';
import { CommonModule, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage implements OnInit {
  eventsData: EventsResponse[] = [];

  constructor(private eventsService: Events, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getEvents();
    console.log('LALA');
  }

  getEvents() {
    // this.eventsService.getAllEvents().subscribe((res: EventsResponse[]) => {
    //   this.eventsData = res;
    // });
    this.eventsService.getAllEvents().subscribe({
      next: (data: EventsResponse[]) => {
        // debugger;
        this.eventsData = data;
        this.cdr.detectChanges();
        console.log(this.eventsData);
      },
      error: (err) => console.log(err),
    });
  }
}
