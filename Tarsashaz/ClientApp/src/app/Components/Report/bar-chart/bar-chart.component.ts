import { Component, OnInit } from '@angular/core';
import { CondominiumService } from '../../../Services/condominium.service';
import { Condominium } from '../../../Models/condominium.model';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { BillType } from '../../../Enums/BillType';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectConBills } from '../../../Store/Selectors/condominium.selectors';
import { Bill } from '../../../Models/bill.model';


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

  sortBills(b1: Bill, b2: Bill): number {
    if (b1.billDate.startDate < b2.billDate.startDate)
      return -1;
    else if (b1.billDate.startDate > b2.billDate.startDate)
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
    let bills$ = this.store.pipe(select(selectConBills));
    bills$.subscribe(bills => {
      for (let bill of bills) {
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
        this.barChartLabels.push(new Date(bill.billDate.startDate).toLocaleDateString());
        this.waterPrices.push(bill.amount);
      }
      for (let bill of this.electricBills) {
        this.electricPrices.push(bill.amount);
      }
      for (let bill of this.heatingBills) {
        this.heatingPrices.push(bill.amount);
      }


      this.barChartData.push({ data: this.waterPrices, label: 'Víz számlák' });
      this.barChartData.push({ data: this.heatingPrices, label: 'Fűtés számlák' });
      this.barChartData.push({ data: this.electricPrices, label: 'Áram számlák' }) 
    });
 
    }
 }

