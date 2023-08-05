import { Component, OnInit } from '@angular/core';
import { Cards } from 'src/app/model/cards.model';
import { User } from 'src/app/model/user.model';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'bank-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  user = new User();
  cards = new Array();
  currOutstandingAmt: number = 0;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user') || '');
    if (this.user) {
      this.dashboardService.getCards(this.user.id).subscribe((data) => {
        this.cards = <any>data.body;
        this.cards.forEach(
          function (this: CardsComponent, card: Cards) {
            this.currOutstandingAmt =
              this.currOutstandingAmt + card.availableAmount;
          }.bind(this)
        );
      });
    }
  }
}
