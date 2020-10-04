import { Component } from '@angular/core';
import { Announcement } from '../../../Models/announcement.model';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectActualUser } from '../../../Store/Selectors/user.selectors';
import { User } from '../../../Models/user.model';
import { Range } from '../../../Enums/Range'
import { Priority } from '../../../Enums/Priority';
import * as AnnouncementActions from '../../../Store/Actions/announcement.actions';
import { Router } from '@angular/router';
 
@Component({
    selector: 'app-new-announcement',
    templateUrl: './new-announcement.component.html',
    styleUrls: ['./new-announcement.component.css']
})
/** NewAnnouncement component*/
export class NewAnnouncementComponent {
  actualUser: User;
  /** NewAnnouncement ctor */
  announcement: Announcement = {
    id:0,
    senderId: this.actualUser ? this.actualUser.id : 0,
    sender: this.actualUser,
    date: new Date(),
    range:0,
    priority: 0,
    text:''
  }
  constructor(private store: Store<AppState>,private router:Router) {
    this.store.pipe(select(selectActualUser)).subscribe((user) => this.actualUser = user);
  }

  send() {
    if (this.actualUser) {
      if (this.announcement.senderId === 0)
        this.announcement.senderId = this.actualUser.id;
      this.store.dispatch(new AnnouncementActions.AnnouncementAdded(this.announcement));
      this.router.navigate(['/']);
    }
  }
}
