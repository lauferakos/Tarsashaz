import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import { selectActualFlat } from '../../../Store/Selectors/flat.selectors';
import { selectActualUser } from '../../../Store/Selectors/user.selectors';

@Component({
    selector: 'app-flat-details',
    templateUrl: './flat-details.component.html',
    styleUrls: ['./flat-details.component.css']
})
/** FlatDetails component*/
export class FlatDetailsComponent implements OnInit{

  actualFlat$ = this.store.pipe(select(selectActualFlat));
    /** FlatDetails ctor */
  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {

  }
}
