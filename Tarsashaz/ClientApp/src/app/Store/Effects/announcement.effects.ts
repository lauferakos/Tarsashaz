import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AppState } from "../States/app.state";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { AnnouncementService } from "../../Services/announcement.service";
import { Router } from "@angular/router";
import { AnnouncementAdded, ANNOUNCEMENT_ADDED, GetAnnouncements, GET_ANNOUNCEMENTS, GetAnnouncementsSuccess, AnnouncementAddedSuccess, AnnouncementDeleted, ANNOUNCEMENT_DELETED, AnnouncementDeletedSuccess } from "../Actions/announcement.actions";
import { switchMap } from "rxjs/operators";
import { Announcement } from "../../Models/announcement.model";
import { of } from 'rxjs';
import { selectActualUser } from "../Selectors/user.selectors";

@Injectable()
export class AnnouncementEffects {

  @Effect()
  getAnnouncements$ = this.actions$.pipe(
    ofType<GetAnnouncements>(GET_ANNOUNCEMENTS),
    switchMap((a: GetAnnouncements) => this.annService.getAnnouncements()),
    switchMap((res: Announcement[]) => {
      if (res.length != 0) {
        return of(new GetAnnouncementsSuccess(res));
      }
    })
  );

  @Effect()
  announcementAdded$ = this.actions$.pipe(
    ofType<AnnouncementAdded>(ANNOUNCEMENT_ADDED),
    switchMap((a: AnnouncementAdded) => this.annService.addAnnouncement(a.payload)),
    switchMap((res: Announcement) => {
      this.Store.pipe(select(selectActualUser)).subscribe(u => {
        if(u)
          res.sender = u
      });
        return of(new AnnouncementAddedSuccess(res));
    })
  );

  @Effect()
  announcementDeleted$ = this.actions$.pipe(
    ofType<AnnouncementDeleted>(ANNOUNCEMENT_DELETED),
    switchMap((a: AnnouncementDeleted) => this.annService.deleteAnnouncement(a.payload)),
    switchMap((a: Announcement) => {
      return of(new AnnouncementDeletedSuccess(a.id))
    })
  );

  constructor(private Store: Store<AppState>, private actions$: Actions, private annService: AnnouncementService, private router: Router) {
    }
}
