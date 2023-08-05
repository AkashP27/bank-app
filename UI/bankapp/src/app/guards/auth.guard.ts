import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { User } from '../model/user.model';
import { LoginService } from '../services/login/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const user = inject(LoginService);
  const router = inject(Router);

  console.log(user.isLoggedIn);

  // if (sessionStorage.getItem('user')) {
  //   user = JSON.parse(sessionStorage.getItem('userdetails')!);
  // }
  // if (!this.user) {
  //   this.router.navigate(['login']);
  // }
  // return this.user ? true : false;

  return user.isLoggedIn ? true : router.navigate(['login']);
};
