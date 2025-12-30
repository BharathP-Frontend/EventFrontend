export interface EventsResponse {
  _id: string;
  eventId: number;
  eventName: string;
  organizationName: string;
  startDate: string;
  startTime: string;
  endDate: string;
  price: number;
  location: string;
  image: string;
}

export interface SignupModel {
  name: string;
  email: string;
  password: string;
}

export interface LoginModel {
  email: string;
  password: string;
}

export interface AuthResponseModel {
  msg: string;
  token: string;
  user: User;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface MyBookingsResponse {
  _id: string;
  userId: string;
  eventId: EventsResponse;
  createdAt: string;
}
