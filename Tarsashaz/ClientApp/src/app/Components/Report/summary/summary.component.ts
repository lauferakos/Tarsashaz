import { Component, OnInit } from '@angular/core';
import { CondominiumService } from '../../../Services/condominium.service';
import { Condominium } from '../../../Models/condominium.model';
import { BillType } from '../../../Enums/BillType';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectConBills, selectConFlats } from '../../../Store/Selectors/condominium.selectors';
import * as AnnouncementActions from '../../../Store/Actions/announcement.actions';
import { Announcement } from '../../../Models/announcement.model';
import { Range } from '../../../Enums/Range';
import { Priority } from '../../../Enums/Priority';
import { Router } from '@angular/router';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
/** Summary component*/
export class SummaryComponent implements OnInit {
  waterAmount: number;
  heatingAmount: number;
  electricAmount: number;
  fullAmount: number;
  commonCharge: number;
  flatNumber: number;
  /** Summary ctor */
  constructor(private connService: CondominiumService, private store: Store<AppState>, private router: Router) {

  }
  sendSummary() {
    if (this.commonCharge) {
      let text = "Közös költség " + new Date().getMonth() + ".hónapra"
        + "Víz számla: " + this.waterAmount 
        + " Áram számla: " + this.electricAmount
        + " Fűtés számla " + this.heatingAmount 
        + " Összesen: " + this.fullAmount 
        + " Ebből a közös költség 1 lakásra: " + this.commonCharge;
      let announcement: Announcement = {
        id: 10,
        senderId: 1,
        senderName: 'Laufer Ákos',
        range: Range.resident,
        date: new Date(),
        priority: Priority.high,
        text: text
      }
      this.router.navigate(['/']);
      this.store.dispatch(new AnnouncementActions.AnnouncementAdded(announcement));
    } else {
      console.log('Hiba az összesítésben!');
    }
  }


  ngOnInit() {
    let bills$ = this.store.pipe(select(selectConBills));
    let flats$ = this.store.pipe(select(selectConFlats));
    bills$.subscribe(bills => {
      bills = bills.filter(b => b.billDate.payoffStart.getFullYear() == new Date().getFullYear() &&
        b.billDate.payoffStart.getMonth() == new Date().getMonth());
      for (let bill of bills) {
        switch (bill.type) {
          case BillType.Electric:
            this.electricAmount = bill.amount;
            break;
          case BillType.Water:
            this.waterAmount = bill.amount;
            break;
          case BillType.Heating:
            this.heatingAmount = bill.amount;
            break;
          default:
            break;
        }
      }
    });
    flats$.subscribe(flats => this.flatNumber = flats.length);
    if (this.electricAmount && this.heatingAmount && this.waterAmount) {
      this.fullAmount = this.electricAmount + this.heatingAmount + this.waterAmount;
    }
    if (this.flatNumber != 0) {
      this.commonCharge = this.fullAmount / this.flatNumber;
    }
    }
  }
