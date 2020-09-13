import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import { selectFlats } from '../../../Store/Selectors/flat.selectors';

@Component({
    selector: 'app-flat-list',
    templateUrl: './flat-list.component.html',
    styleUrls: ['./flat-list.component.css']
})
/** FlatList component*/
export class FlatListComponent {
  displayedColumns: string[] = ['postCode', 'city', 'street', 'number','floor','door'];
  flats$ = this.store.pipe(select(selectFlats));
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
}
