import { Injectable } from '@angular/core';
import { Announcement } from '../Models/announcement.model';
import { Range } from '../Enums/Range';
import { Priority } from '../Enums/Priority';
import { Observable, of as observableOf } from 'rxjs';
import { AppState } from '../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { Condominium } from '../Models/condominium.model';
import * as CondominiumActions from '../Store/Actions/condominium.actions';
import { selectAnnouncements } from '../Store/Selectors/announcement.selectors';

@Injectable()
export class AnnouncementService {
  announcements: Announcement[];
  constructor(private store: Store<AppState>) {

  }

  getAnnouncements(): Observable<Announcement[]>{
    this.store.pipe(select(selectAnnouncements)).subscribe(res => this.announcements = res);
    if (this.announcements.length > 0)
      return observableOf(this.announcements);
    else
    return observableOf([
      {
        id:1,
        senderId: 1,
        senderName: "Laufer Ákos",
        range: Range.resident,
        date: new Date(),
        priority: Priority.low,
        text: "Tisztelt Lakók! \
               A társasházhoz jelenleg nem érhető el hirdetmény!"
      }
    ]);
  }

  addAnnouncement(a: Announcement): Observable<Announcement> {
    return observableOf(a);
  }

  deleteAnnouncement(id: number): Observable<number> {
    return observableOf(id);
  }
}
