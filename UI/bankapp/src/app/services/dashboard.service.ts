import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getNotices() {
    return this.http.get('http://localhost:8080/notices', {
      observe: 'response',
    });
  }

  saveContact(contact: any) {
    return this.http.post('http://localhost:8080/contact', contact, {
      observe: 'response',
    });
  }

  getAccount(id: number) {
    return this.http.get('http://localhost:8080/myAccount?id=' + id, {
      observe: 'response',
      withCredentials: true,
    });
  }

  getAccountTransactions(id: number) {
    return this.http.get('http://localhost:8080/myBalance?id=' + id, {
      observe: 'response',
      withCredentials: true,
    });
  }

  getCards(id: number) {
    return this.http.get('http://localhost:8080/myCards?id=' + id, {
      observe: 'response',
      withCredentials: true,
    });
  }

  getLoans(id: number) {
    return this.http.get('http://localhost:8080/myLoans?id=' + id, {
      observe: 'response',
      withCredentials: true,
    });
  }
}
