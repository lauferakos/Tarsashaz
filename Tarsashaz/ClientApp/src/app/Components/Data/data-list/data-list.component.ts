import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import { selectActualFlatDatas } from '../../../Store/Selectors/flat.selectors';

@Component({
    selector: 'app-data-list',
    templateUrl: './data-list.component.html',
    styleUrls: ['./data-list.component.css']
})
/** DataList component*/
export class DataListComponent {
  flatDatas$ = this.store.pipe(select(selectActualFlatDatas));
    /** DataList ctor */
  constructor(private store: Store<AppState>) {
    
    }
}
