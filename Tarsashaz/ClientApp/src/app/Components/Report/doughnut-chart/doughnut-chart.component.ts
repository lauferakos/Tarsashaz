import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { CondominiumService } from '../../../Services/condominium.service';
import { Condominium } from '../../../Models/condominium.model';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectActualCon } from '../../../Store/Selectors/condominium.selectors';

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
    let condominium$ = this.store.pipe(select(selectActualCon));
    condominium$.subscribe(c => this.condominium = c);
    if (this.condominium) {

      for (let bill of this.condominium.bills) {
        this.doughnutChartLabels.push(bill.type);
        this.doughnutChartData.push(bill.amount);
      }
    }
  }


}
