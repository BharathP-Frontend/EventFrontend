import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedin$ = new BehaviorSubject<boolean>(this.hasToken());
  userDetails$ = new BehaviorSubject<string>(this.checkUserName());

  constructor(private router: Router) {}

  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  login(): void {
    // debugger;
    this.isLoggedin$.next(true);
    this.userDetails$.next(this.checkUserName());
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userDetails');
    this.isLoggedin$.next(false);
  }

  checkUserName() {
    const details = JSON.parse(localStorage.getItem('userDetails') || '{}');
    return details.Name;
  }
}
