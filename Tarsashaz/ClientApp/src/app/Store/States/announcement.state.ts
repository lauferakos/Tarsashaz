import { Announcement } from "../../Models/announcement.model";

export interface AnnouncementState {
  announcements: Announcement[];
}

export const initialAnnouncementState: AnnouncementState = {
  announcements: [],
}
