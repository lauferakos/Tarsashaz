import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import { selectActualFlatDatas, selectActualFlat } from '../../../Store/Selectors/flat.selectors';
import { selectConAddress } from '../../../Store/Selectors/condominium.selectors';
import { selectActualUser } from '../../../Store/Selectors/user.selectors';

@Component({
    selector: 'app-data-list',
    templateUrl: './data-list.component.html',
    styleUrls: ['./data-list.component.css']
})
/** DataList component*/
export class DataListComponent {
  flatDatas$ = this.store.pipe(select(selectActualFlatDatas));
  actualFlat$ = this.store.pipe(select(selectActualFlat));
  conAddress$ = this.store.pipe(select(selectConAddress));
  actualUser$ = this.store.pipe(select(selectActualUser));
    /** DataList ctor */
  constructor(private store: Store<AppState>) {
    
    }
}
