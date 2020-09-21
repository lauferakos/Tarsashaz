import { Component, OnInit } from '@angular/core';
import { CondominiumService } from '../../../Services/condominium.service';
import { Condominium } from '../../../Models/condominium.model';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { BillType } from '../../../Enums/BillType';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectActualCon } from '../../../Store/Selectors/condominium.selectors';


@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.css']
})
/** BarChart component*/
export class BarChartComponent implements OnInit{
  /** BarChart ctor */
  condominium: Condominium;

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [{
        ticks: {
          suggestedMin: 0,
        }
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  

  public barChartData: ChartDataSets[] = [
  ];

  constructor(private connService: CondominiumService, private store: Store<AppState>) {

  }

  waterDatas: number[];
  heatingDatas: number[];
  electricDatas: number[];
  ngOnInit() {
    let condominium$ = this.store.pipe(select(selectActualCon));
    condominium$.subscribe(c => this.condominium = c);
    if (this.condominium) {


      for (let billdata of this.condominium.billDatas) {
        if (billdata.type == BillType.Electric) {
          this.electricDatas = billdata.amounts;
        } else
          if (billdata.type == BillType.Water) {
            this.waterDatas = billdata.amounts;
          } else
            if (billdata.type == BillType.Heating) {
              this.heatingDatas = billdata.amounts;
            }

      }
      for (let i = 0; i < this.condominium.billDatas[0].amounts.length; i++) {
        let startDate = this.condominium.billDatas[0].start;
        let actualDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
        this.barChartLabels.push(actualDate.toLocaleDateString());
      }

      this.barChartData.push({ data: this.waterDatas, label: 'Víz számlák' });
      this.barChartData.push({ data: this.heatingDatas, label: 'Fűtés számlák' });
      this.barChartData.push({ data: this.electricDatas, label: 'Áram számlák' })
    }
  }
}
