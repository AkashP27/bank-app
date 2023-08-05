import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { User } from 'src/app/model/user.model';
import { getCookie } from 'typescript-cookie';

@Component({
  selector: 'bank-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  userModel = new User();

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    this.loginService.login(this.loginForm.value).subscribe((data: any) => {
      this.userModel = data.body;
      let xsrf = getCookie('XSRF-TOKEN')!;
      window.sessionStorage.setItem('XSRF-TOKEN', xsrf);
      this.userModel.authStatus = 'AUTH';
      window.sessionStorage.setItem('user', JSON.stringify(this.userModel));
      this.router.navigate(['dashboard']);
    });
  }
}
