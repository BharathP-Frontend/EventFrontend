import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { Events } from '../../services/events';
import { EventsResponse } from '../../models/model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, map, switchMap } from 'rxjs';
import { Getbookings } from '../../services/getbookings';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-eventpage',
  imports: [CommonModule],
  templateUrl: './eventpage.html',
  styleUrl: './eventpage.scss',
})
export class Eventpage implements OnInit {
  // @ViewChild('bookingmodal') bookingmodal!: ElementRef<HTMLDivElement>;

  // event!: EventsResponse;
  eventId$: Observable<number> = new Observable<number>();
  myevent$: Observable<EventsResponse> = new Observable<EventsResponse>();
  myTwoEvents$: Observable<EventsResponse[]> = new Observable<EventsResponse[]>();

  //Modal
  isOpen: boolean = false;
  selectedEvent!: EventsResponse;

  constructor(
    private eventservice: Events,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private bookingsservice: Getbookings,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    // this.getEvent();
    // this.getNextTwo();
    this.eventId$ = this.route.paramMap.pipe(
      map((params) => {
        return Number(params.get('id'));
      })
    );
    this.myevent$ = this.eventId$.pipe(
      switchMap((id) => {
        return this.eventservice.getSingleEvent(id);
      })
    );

    this.myTwoEvents$ = this.eventId$.pipe(
      switchMap((id) => {
        return this.eventservice.getAllEvents().pipe(
          map((events) => {
            const index = events.findIndex((event) => event.eventId == id);
            return index !== -1 ? events.slice(index + 1, index + 3) : [];
          })
        );
      })
    );
  }

  //Modal

  // ngAfterViewInit() {
  //   this.bookingmodal.nativeElement.style.display = 'none';
  // }

  openPopup(event: EventsResponse) {
    // this.bookingmodal.nativeElement.style.display = 'block';
    this.isOpen = true;
    this.selectedEvent = event;
  }

  closePopup() {
    // this.bookingmodal.nativeElement.style.display = 'none';
    this.isOpen = false;
  }

  postData(eventData: EventsResponse) {
    // debugger;
    this.isOpen = false;
    // this.closePopup();
    this.bookingsservice.postEvent(eventData).subscribe((data) => {
      console.log(data);
    });
  }

  // getEvent() {
  //   this.route.params.subscribe((params) => {
  //     // debugger;
  //     console.log(params['id']);
  //     this.eventservice.getSingleEvent(params['id']).subscribe({
  //       next: (res: EventsResponse) => {
  //         this.event = res;
  //         this.cdr.detectChanges();
  //         // debugger;
  //       },
  //       error: (err) => console.log(err),
  //     });
  //   });
  // }

  // getEvent() {
  //   this.route.params.subscribe((params) => {
  //     // debugger;
  //     console.log(params['id']);

  //     this.myevent$ = this.eventservice.getSingleEvent(params['id']);
  //   });
  // }

  // getNextTwo() {}
}
