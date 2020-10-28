import { Component, OnInit} from '@angular/core';
import { AppState } from '../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectActualUser } from '../Store/Selectors/user.selectors';
import { selectActualFlat } from '../Store/Selectors/flat.selectors';
import * as CondominiumActions from '../Store/Actions/condominium.actions';
import * as AnnouncementActions from '../Store/Actions/announcement.actions';
import * as FlatActions from '../Store/Actions/flat.actions';
import { selectConId } from '../Store/Selectors/condominium.selectors';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  actualUser$ = this.store.pipe(select(selectActualUser));
  userId: number;
  constructor(private store: Store<AppState>) {
    this.actualUser$.subscribe(u => {
      if (u) {
        this.userId = u.id
      }
    });
  }


  ngOnInit() {
    console.log('Home, ngOninit');
    console.log('Dispatch GetFlats');
    this.store.dispatch(new FlatActions.GetFlats(this.userId));

    this.store.dispatch(new AnnouncementActions.ClearAnnouncements());
    let flat;
    this.store.pipe(select(selectActualFlat)).subscribe(f => {
      flat = f;
    })

    if (flat && flat.id != null) {
      this.store.dispatch(new AnnouncementActions.GetAnnouncements(flat.id));
      this.store.dispatch(new CondominiumActions.GetCondominium(flat.id));
      }
    else {
      this.store.pipe(select(selectActualUser)).subscribe(u => {
        if (u) {
          this.store.dispatch(new CondominiumActions.GetCondominiumByCrId(u.id));
        }
      });
    }
  }
  
}
