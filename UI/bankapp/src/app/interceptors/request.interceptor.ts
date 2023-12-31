import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  user = new User();

  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let httpHeaders = new HttpHeaders();
    if (sessionStorage.getItem('user')) {
      this.user = JSON.parse(sessionStorage.getItem('user')!);
    }

    if (this.user && this.user.password && this.user.email) {
      httpHeaders = httpHeaders.append(
        'Authorization',
        'Basic ' + window.btoa(this.user.email + ':' + this.user.password)
      );
    } else {
      let token = sessionStorage.getItem('token');
      if (token) {
        httpHeaders = httpHeaders.append('Authorization', `Bearer ${token}`);
      }
    }

    let xsrf = sessionStorage.getItem('XSRF-TOKEN');
    if (xsrf) {
      httpHeaders = httpHeaders.append('X-XSRF-TOKEN', xsrf);
    }

    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = request.clone({
      headers: httpHeaders,
    });

    return next.handle(xhr).pipe(
      tap((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          this.router.navigate(['dashboard']);
        }
      })
    );
  }
}
