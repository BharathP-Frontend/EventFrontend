import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { MyBookings } from './pages/my-bookings/my-bookings';
import { Loginpage } from './pages/loginpage/loginpage';
import { Eventpage } from './pages/eventpage/eventpage';
import { Registerpage } from './pages/registerpage/registerpage';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: Homepage,
  },

  {
    path: 'event/:id',
    component: Eventpage,
  },
  {
    path: 'login',
    component: Loginpage,
  },
  {
    path: 'mybookings',
    component: MyBookings,
    canActivate: [authGuard],
  },
  {
    path: 'signup',
    component: Registerpage,
  },
];
