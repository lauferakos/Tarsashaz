import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { CondominiumService } from '../../../Services/condominium.service';
import { Condominium } from '../../../Models/condominium.model';

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
  constructor(private connService: CondominiumService) {

  }
  ngOnInit() {
    this.condominium = this.connService.getCondominiumByUserId(1);

    for (let bill of this.condominium.bills) {
      this.doughnutChartLabels.push(bill.type);
      this.doughnutChartData.push(bill.amount);
    }
  }


}
