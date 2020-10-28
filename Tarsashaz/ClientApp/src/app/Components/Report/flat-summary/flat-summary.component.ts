import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectConId, selectConFlats } from '../../../Store/Selectors/condominium.selectors';
import { FlatService } from '../../../Services/flat.service';
import { Flat } from '../../../Models/flat.model';
import { FlatBalance } from '../../../Models/flatbalance.model';

@Component({
  selector: 'app-flat-summary',
  templateUrl: './flat-summary.component.html',
  styleUrls: ['./flat-summary.component.css']
})
/** FlatSummary component*/
export class FlatSummaryComponent implements OnInit {
  /** FlatSummary ctor */
  conId: number;
  flats: Flat[];
  flatBalanceFilter: Function = (flat: Flat) => true;
  constructor(private store: Store<AppState>, private flatService: FlatService) {
    this.store.pipe(select(selectConId)).subscribe(
      id => this.conId = id
    );
    this.store.pipe(select(selectConFlats)).subscribe(
      flats => {
        this.flats = flats
        console.log(flats);
      }
    );
  }

  ngOnInit() {
  }

  clearFilter() {
    this.flatBalanceFilter = (flat: Flat) => true;
  }
  notPaidBalanceFilter() {
    this.flatBalanceFilter = (flat: Flat) => {
      if (flat.balances[0]) {
        return flat.balances[0].electricalAmount > 0 ||
          flat.balances[0].waterAmount > 0 || flat.balances[0].heatingAmount > 0;
      }
      else return false;
    };
  }
}
