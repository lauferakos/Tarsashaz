import { Injectable } from '@angular/core';
import { Announcement } from '../Models/announcement.model';
import { Range } from '../Enums/Range';
import { Priority } from '../Enums/Priority';
import { Observable, of as observableOf } from 'rxjs';
import { AppState } from '../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectAnnouncements } from '../Store/Selectors/announcement.selectors';

@Injectable()
export class AnnouncementService {
  announcements: Announcement[];
  constructor(private store: Store<AppState>) {

  }

  getAnnouncements(): Observable<Announcement[]>{
    this.store.pipe(select(selectAnnouncements)).subscribe(res => this.announcements = res);
    console.log(this.announcements);
    if (this.announcements.length > 0)
      return observableOf(this.announcements);
    else
    return observableOf([
      {
        senderId: 1,
        senderName: "Laufer Ákos",
        range: Range.resident,
        date: new Date(),
        priority: Priority.low,
        text: "Tisztelt Lakók! \
               A jövő héten felújítási munkálatok zajlanak a földszinten. Az okozott kellemetlenségekért elnézésüket kérjük"
      },
      {
        senderId: 1,
        senderName: "Laufer Ákos",
        range: Range.resident,
        date: new Date(),
        priority: Priority.medium,
        text: "Tisztelt Lakók! \
               A héten lomtalanítás lesz, aki igényli,használhatja a közös tárolót, pakolás céljából. "
      },
      {
        senderId: 1,
        senderName: "Laufer Ákos",
        range: Range.resident,
        date: new Date(),
        priority: Priority.high,
        text: "Tisztelt Lakók! \
               A jövő hét kedden lakógyűlés lesz, a földszinti irodában. Mindenki jelenlétére számítunk!"
      },

    ]);
  }

  addAnnouncement(a: Announcement): Observable<Announcement> {
    return observableOf(a);
  }
}
