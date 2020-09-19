import { Component, OnInit } from '@angular/core';
import { FlatBalance } from '../../../Models/flatbalance.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import { selectActualFlatBalance } from '../../../Store/Selectors/flat.selectors';
import { BillType } from '../../../Enums/BillType';

@Component({
    selector: 'app-flat-balance',
    templateUrl: './flat-balance.component.html',
    styleUrls: ['./flat-balance.component.css']
})
/** FlatBalance component*/
export class FlatBalanceComponent implements OnInit{
/** FlatBalance ctor */
  balances$ = this.store.pipe(select(selectActualFlatBalance));
  waterBalance: FlatBalance;
  heathingBalance: FlatBalance;
  electricBalance: FlatBalance;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.balances$.subscribe(balances => {
      this.electricBalance = balances.filter(b => b.type == BillType.Electric)[0];
      this.waterBalance = balances.filter(b => b.type == BillType.Water)[0];
      this.heathingBalance = balances.filter(b => b.type == BillType.Heating)[0];
    });
  }
}
