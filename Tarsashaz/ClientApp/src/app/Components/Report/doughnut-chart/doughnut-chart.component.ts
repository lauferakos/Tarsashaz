import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { CondominiumService } from '../../../Services/condominium.service';
import { Condominium } from '../../../Models/condominium.model';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectConBills } from '../../../Store/Selectors/condominium.selectors';

@Component({
    selector: 'app-doughnut-chart',
    templateUrl: './doughnut-chart.component.html',
    styleUrls: ['./doughnut-chart.component.css']
})
/** DoughnutChart component*/
export class DoughnutChartComponent implements OnInit{
  condominium: Condominium;
  public doughnutChartData: SingleDataSet = [];
  public doughnutChartLabels: Label[] = [];
  public doughnutChartType: ChartType = 'doughnut';
  /** DoughnutChart ctor */
  constructor(private connService: CondominiumService, private store: Store<AppState>) {

  }
  ngOnInit() {
    let bills$ = this.store.pipe(select(selectConBills));
    bills$.subscribe(bills => {
      bills = bills.filter(b => b.billDate.payoffStart.getFullYear() == new Date().getFullYear() &&
        b.billDate.payoffStart.getMonth() == new Date().getMonth()
      );
      for (let bill of bills) {
        this.doughnutChartLabels.push(bill.type);
        this.doughnutChartData.push(bill.amount);
      }
    })
 
  }


}
