import { AppState } from "../States/app.state";
import { createSelector } from "@ngrx/store";
import { AnnouncementState } from "../States/announcement.state";

const selectAnnouncement = (state: AppState) => state.announcement;

export const selectAnnouncements = createSelector(
  selectAnnouncement,
  (state: AnnouncementState) => state.announcements
);
