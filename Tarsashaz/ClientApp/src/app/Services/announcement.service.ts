import { Injectable, Inject } from '@angular/core';
import { Announcement } from '../Models/announcement.model';
import { Range } from '../Enums/Range';
import { Priority } from '../Enums/Priority';
import { Observable, of as observableOf } from 'rxjs';
import { AppState } from '../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { Condominium } from '../Models/condominium.model';
import * as CondominiumActions from '../Store/Actions/condominium.actions';
import { selectAnnouncements } from '../Store/Selectors/announcement.selectors';
import { selectActualUser } from '../Store/Selectors/user.selectors';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AnnouncementService {
  announcements: Announcement[];
  baseUrl: string;
  constructor(private store: Store<AppState>, private http: HttpClient, @Inject('BASE_URL') baseurl: string) {
    this.baseUrl = baseurl;
  }

  getAnnouncements(): Observable<Announcement[]>{
    this.store.pipe(select(selectAnnouncements)).subscribe(res => this.announcements = res);
    
    if (this.announcements.length > 0)
      return observableOf(this.announcements);
    else
      this.store.pipe(select(selectActualUser)).subscribe(u => {
        return observableOf([
          {
            id: 1,
            senderId: u.id,
            sender: u,
            range: Range.resident,
            date: new Date(),
            priority: Priority.low,
            text: "Tisztelt Lakók! \
               A társasházhoz jelenleg nem érhető el hirdetmény!"
          }
        ]);
      })
    
  }

  addAnnouncement(a: Announcement): Observable<Announcement> {
    let url = this.baseUrl + "announcement";
    return this.http.post<Announcement>(url, a);
  }

  deleteAnnouncement(id: number): Observable<Announcement> {
    let url = this.baseUrl + "announcement/" + id;
    return this.http.delete<Announcement>(url);
  }
}
