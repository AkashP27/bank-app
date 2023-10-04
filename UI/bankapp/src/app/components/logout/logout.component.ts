import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bank-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    window.sessionStorage.setItem('user', '');
    window.sessionStorage.setItem('XSRF-TOKEN', '');
    window.sessionStorage.setItem('token', '');
    this.router.navigate(['/home']);
  }
}
