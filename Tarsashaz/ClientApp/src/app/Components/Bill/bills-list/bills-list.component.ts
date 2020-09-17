import { Component } from '@angular/core';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectActualFlat } from '../../../Store/Selectors/flat.selectors';
import { Router } from '@angular/router';

@Component({
    selector: 'app-bills-list',
    templateUrl: './bills-list.component.html',
    styleUrls: ['./bills-list.component.css']
})
/** BillsList component*/
export class BillsListComponent {
  actualFlat$ = this.store.pipe(select(selectActualFlat));
  /** BillsList ctor */
  constructor(private store: Store<AppState>,private router:Router) {

  }

  billDetails() {
    this.router.navigate(['/bill/details']);
  }
}
