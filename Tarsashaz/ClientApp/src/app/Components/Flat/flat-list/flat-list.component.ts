import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import { selectFlats, selectActualFlat } from '../../../Store/Selectors/flat.selectors';
import { Flat } from '../../../Models/flat.model';
import * as FlatActions from '../../../Store/Actions/flat.actions';
import * as UserActions from '../../../Store/Actions/user.actions';
import { selectActualUser } from '../../../Store/Selectors/user.selectors';

@Component({
    selector: 'app-flat-list',
    templateUrl: './flat-list.component.html',
    styleUrls: ['./flat-list.component.css']
})
/** FlatList component*/
export class FlatListComponent implements OnInit {
  flats$ = this.store.pipe(select(selectFlats));
  actualFlat$ = this.store.pipe(select(selectActualFlat));
 
  isAddPanelVisible: boolean = false;
  
    /** FlatList ctor */
  constructor(private store: Store<AppState>) {
  }
  ngOnInit(): void {

    }

  showAddPanel() {
    this.isAddPanelVisible = true;
  }

  cancelAddPanel() {
    this.isAddPanelVisible = false;
  }

  selectFlat(i: number) {
    let actualIdx;
    this.actualFlat$.subscribe(f => { if(f) actualIdx = f.id })
    if (i != actualIdx)
      this.store.dispatch(new FlatActions.ActualFlatChanged(i));
  }
}
