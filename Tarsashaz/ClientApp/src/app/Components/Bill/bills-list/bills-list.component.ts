import { Component } from '@angular/core';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectActualFlat } from '../../../Store/Selectors/flat.selectors';
import { Router } from '@angular/router';
import { FlatService } from '../../../Services/flat.service';

@Component({
    selector: 'app-bills-list',
    templateUrl: './bills-list.component.html',
    styleUrls: ['./bills-list.component.css']
})
/** BillsList component*/
export class BillsListComponent {
  actualFlat$ = this.store.pipe(select(selectActualFlat));
  /** BillsList ctor */
  constructor(private store: Store<AppState>, private router: Router, private flatService: FlatService) {

  }

  billDetails(id: number) {
    this.router.navigate(['/bill/details',id]);
  }

  addBills() {
    this.flatService.addBills(5).subscribe(bills => console.log(bills));
  }
}
