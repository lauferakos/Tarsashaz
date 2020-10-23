import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { CondominiumService } from '../../../Services/condominium.service';
import { Condominium } from '../../../Models/condominium.model';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectConBills } from '../../../Store/Selectors/condominium.selectors';
import { BillType } from '../../../Enums/BillType';

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

  getBillType(type: BillType): string {
    if (type == BillType.Water)
      return "Víz";
    if (type == BillType.Electric)
      return "Áram";
    if (type == BillType.Heating)
      return "Fűtés";
    else return "";
  }
  ngOnInit() {
    let bills$ = this.store.pipe(select(selectConBills));
    bills$.subscribe(bills => {
      bills = bills.filter(b => new Date(b.billDate.deadline).getFullYear() == new Date().getFullYear() &&
        new Date(b.billDate.deadline).getMonth() == new Date().getMonth()+1
      );
      for (let bill of bills) {
        this.doughnutChartLabels.push(this.getBillType(bill.type));
        this.doughnutChartData.push(bill.amount);
      }
    })
 
  }


}
