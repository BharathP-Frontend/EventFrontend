import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponseModel, LoginModel, SignupModel } from '../../models/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Users {
  private apiUrl = 'http://localhost:5000/api/auth/';
  constructor(private http: HttpClient) {}

  postSignupData(data: SignupModel): Observable<SignupModel> {
    return this.http.post<SignupModel>(this.apiUrl + 'signup', data);
  }

  postLoginData(data: LoginModel): Observable<AuthResponseModel> {
    return this.http.post<AuthResponseModel>(this.apiUrl + 'login', data);
  }
}
