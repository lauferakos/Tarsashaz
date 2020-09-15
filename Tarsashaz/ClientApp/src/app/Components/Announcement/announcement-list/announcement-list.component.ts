import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../../../Services/announcement.service';
import { Announcement } from '../../../Models/announcement.model';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectActualUser } from '../../../Store/Selectors/user.selectors';
import { selectAnnouncements } from '../../../Store/Selectors/announcement.selectors';
import * as AnnouncementActions from '../../../Store/Actions/announcement.actions';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css']
})
/** AnnouncementList component*/
export class AnnouncementListComponent implements OnInit {
  actualUser$ = this.store.pipe(select(selectActualUser));
  announcements$ = this.store.pipe(select(selectAnnouncements));
/** AnnouncementList ctor */

  announcements: Announcement[] = [];
  constructor(private announcementService: AnnouncementService, private store: Store<AppState>) {

  }

  ngOnInit() {
    console.log('Dispatched GetAnnouncements')
    this.store.dispatch(new AnnouncementActions.GetAnnouncements());
  }

  deleteAnnouncement() {
    console.log('Hír törölve');
  }
}
