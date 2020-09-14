import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import { selectFlats, selectActualFlat } from '../../../Store/Selectors/flat.selectors';
import { Flat } from '../../../Models/flat.model';
import * as FlatActions from '../../../Store/Actions/flat.actions';

@Component({
    selector: 'app-flat-list',
    templateUrl: './flat-list.component.html',
    styleUrls: ['./flat-list.component.css']
})
/** FlatList component*/
export class FlatListComponent {
  displayedColumns: string[] = ['postCode', 'city', 'street', 'number', 'floor', 'door','actions'];
  flats$ = this.store.pipe(select(selectFlats));
  actualFlat$ = this.store.pipe(select(selectActualFlat));
  isAddPanelVisible: boolean = false;

    /** FlatList ctor */
  constructor(private store: Store<AppState>) {

  }

  showAddPanel() {
    this.isAddPanelVisible = true;
  }

  cancelAddPanel() {
    this.isAddPanelVisible = false;
  }

  selectFlat(i:number) {
    console.log(i);
    let actualIdx;
    this.actualFlat$.subscribe(f => actualIdx = f.id)
    if (i != actualIdx)
      this.store.dispatch(new FlatActions.ActualFlatChanged(i));
  }
}
