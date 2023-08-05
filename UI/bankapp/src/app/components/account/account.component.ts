import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/model/account.model';
import { User } from 'src/app/model/user.model';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'bank-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  user = new User();
  account = new Account();

  constructor(private dashboardService: DashboardService) {}
  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!);
    console.log(this.user);
    if (this.user) {
      this.dashboardService.getAccount(this.user.id).subscribe((data: any) => {
        this.account = data.body;
        console.log(data.body);
      });
    }
    console.log(this.account);
  }
}
