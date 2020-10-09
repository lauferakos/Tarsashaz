import { Action } from '@ngrx/store';
import { Announcement } from "../../Models/announcement.model";

export const ANNOUNCEMENT_ADDED = '[ANNOUNCEMENT] Announcement added';
export const ANNOUNCEMENT_ADDED_SUCCESS = '[ANNOUNCEMENT] Announcement added success';

export const ANNOUNCEMENTS_ADDED_SUCCESS = '[ANNOUNCEMENT] Announcements added success';

export const ANNOUNCEMENT_DELETED = '[ANNOUNCEMENT] Announcement deleted';
export const ANNOUNCEMENT_DELETED_SUCCESS = '[ANNOUNCEMENT] Announcement deleted success';

export const GET_ANNOUNCEMENTS = '[ANNOUNCEMENT] Get announcements';
export const GET_ANNOUNCEMENTS_SUCCESS = '[ANNOUNCEMENT] Get announcements success';

export const CLEAR_ANNOUNCEMENTS = '[ANNOUNCEMENT] Clear announcements';

export class ClearAnnouncements implements Action {
  public readonly type = CLEAR_ANNOUNCEMENTS;
  constructor() {}
}
export class AnnouncementAdded implements Action {
  public readonly type = ANNOUNCEMENT_ADDED;
  constructor(public payload: Announcement) { }
}

export class AnnouncementAddedSuccess implements Action {
  public readonly type = ANNOUNCEMENT_ADDED_SUCCESS;
  constructor(public payload: Announcement) { }
}

export class AnnouncementsAddedSuccess implements Action {
  public readonly type = ANNOUNCEMENTS_ADDED_SUCCESS;
  constructor(public payload: Announcement[]) { }
}

export class AnnouncementDeleted implements Action {
  public readonly type = ANNOUNCEMENT_DELETED;
  constructor(public payload: number) { }
}

export class AnnouncementDeletedSuccess implements Action {
  public readonly type = ANNOUNCEMENT_DELETED_SUCCESS;
  constructor(public payload: number) { }
}

export class GetAnnouncements implements Action {
  public readonly type = GET_ANNOUNCEMENTS;
}

export class GetAnnouncementsSuccess implements Action {
  public readonly type = GET_ANNOUNCEMENTS_SUCCESS;
  constructor(public payload: Announcement[]) { }
}

export type AnnouncementActions = AnnouncementAdded | AnnouncementAddedSuccess
  | AnnouncementDeleted | AnnouncementDeletedSuccess | GetAnnouncements | GetAnnouncementsSuccess | AnnouncementsAddedSuccess | ClearAnnouncements;
