import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { AppState } from '../../../Store/States/app.state';
import { Store } from '@ngrx/store';
import { selectActualFlatBills } from '../../../Store/Selectors/flat.selectors';
import { Bill } from '../../../Models/bill.model';
import { BillType } from '../../../Enums/BillType';

@Component({
    selector: 'app-bill-chart',
    templateUrl: './bill-chart.component.html',
    styleUrls: ['./bill-chart.component.css']
})
/** BillChart component*/
export class BillChartComponent implements OnInit{
  bills: Bill[];
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
  public waterLabels: Label[] = [];
  public heatingLabels: Label[] = [];
  public electricalLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;


  public waterData: ChartDataSets[] = [];
  public heatingData: ChartDataSets[] = [];
  public electricData: ChartDataSets[] = [];
  /** BillChart ctor */
  constructor(private store: Store<AppState>) {
    this.store.select(selectActualFlatBills).subscribe(bills => this.bills = bills);
  }

  sortBills(b1: Bill, b2: Bill): number {
    if (b1.billDate.deadline < b2.billDate.deadline)
      return -1;
    else if (b1.billDate.deadline > b2.billDate.deadline)
      return 1;
    else return 0;
  }

  waterBills: Bill[] = [];
  heatingBills: Bill[] = [];
  electricBills: Bill[] = [];
  waterPrices: number[] = [];
  heatingPrices: number[] = [];
  electricPrices: number[] = [];

  ngOnInit() {
    console.log(this.bills)
    for (let bill of this.bills) {
      if (bill.type == BillType.Electric)
        this.electricBills.push(bill);
      else if (bill.type == BillType.Water)
        this.waterBills.push(bill);
      else if (bill.type == BillType.Heating)
        this.heatingBills.push(bill);
    }
    

    this.waterBills = this.waterBills.sort(this.sortBills);
    this.heatingBills = this.heatingBills.sort(this.sortBills);
    this.electricBills = this.electricBills.sort(this.sortBills);

  

    for (let bill of this.waterBills) {
      this.waterLabels.push(new Date(bill.billDate.deadline).toLocaleDateString());
      this.waterPrices.push(bill.amount);
    }
    for (let bill of this.electricBills) {
      this.electricalLabels.push(new Date(bill.billDate.deadline).toLocaleDateString());
      this.electricPrices.push(bill.amount);
    }
    for (let bill of this.heatingBills) {
      this.heatingLabels.push(new Date(bill.billDate.deadline).toLocaleDateString());
      this.heatingPrices.push(bill.amount);
    }

    console.log(this.waterPrices);
    console.log(this.heatingPrices);
    console.log(this.electricPrices);
    this.waterData.push({ data: this.waterPrices, label: 'Víz számlák' });
    this.heatingData.push({ data: this.heatingPrices, label: 'Fűtés számlák' });
    this.electricData.push({ data: this.electricPrices, label: 'Áram számlák' })
  }
  
  
}
