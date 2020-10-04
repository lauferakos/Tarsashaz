import { Component, OnInit} from '@angular/core';
import { AppState } from '../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectActualUser } from '../Store/Selectors/user.selectors';
import { selectActualFlat } from '../Store/Selectors/flat.selectors';
import * as CondominiumActions from '../Store/Actions/condominium.actions';
import { selectConId } from '../Store/Selectors/condominium.selectors';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private store: Store<AppState>) { }


  ngOnInit() {
    this.store.pipe(select(selectActualFlat)).subscribe(flat => {
      if (flat) {
        this.store.pipe(select(selectConId)).subscribe(id => {
          if (!id) {
            this.store.dispatch(new CondominiumActions.GetCondominium(flat.id));
          }
        })
       
      }
    })
    
  }
}
