import { Component, OnInit } from '@angular/core';
import { Loans } from 'src/app/model/loans.model';
import { User } from 'src/app/model/user.model';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'bank-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css'],
})
export class LoansComponent implements OnInit {
  user = new User();
  loans = new Array();
  currOutstandingBalance: number = 0;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user') || '');
    if (this.user) {
      this.dashboardService.getLoans(this.user.id).subscribe((data: any) => {
        this.loans = data.body;
        this.loans.forEach(
          function (this: LoansComponent, loan: Loans) {
            this.currOutstandingBalance =
              this.currOutstandingBalance + loan.outstandingAmount;
          }.bind(this)
        );
      });
    }
  }
}
