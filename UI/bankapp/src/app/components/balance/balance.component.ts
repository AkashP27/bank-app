import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'bank-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent implements OnInit {
  user = new User();
  transactions = new Array();

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user') || '');
    if (this.user) {
      this.dashboardService
        .getAccountTransactions(this.user.id)
        .subscribe((data: any) => {
          this.transactions = data.body;
        });
    }
  }
}
