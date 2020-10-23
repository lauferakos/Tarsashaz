import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectConId, selectConFlats } from '../../../Store/Selectors/condominium.selectors';
import { FlatService } from '../../../Services/flat.service';
import { Flat } from '../../../Models/flat.model';

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
}
