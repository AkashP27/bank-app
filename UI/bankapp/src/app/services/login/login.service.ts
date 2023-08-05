import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;
  constructor(private http: HttpClient) {}

  login(user: any) {
    console.log(user);
    window.sessionStorage.setItem('user', JSON.stringify(user));
    this.isLoggedIn = true;

    return this.http.get('http://localhost:8080/user', {
      observe: 'response',
      withCredentials: true,
    });
  }
}
