import { initialAnnouncementState, AnnouncementState } from "../States/announcement.state";
import * as Actions from './../Actions/announcement.actions'

export function announcementReducers(state = initialAnnouncementState, action: Actions.AnnouncementActions): AnnouncementState{
  switch (action.type) {
    case Actions.GET_ANNOUNCEMENTS_SUCCESS:
      console.log('GET_ANNOUNCEMENTS_SUCCESS');
      return {
        ...state,
        announcements: action.payload
      }
    case Actions.ANNOUNCEMENT_ADDED_SUCCESS:
      console.log('ANNOUNCEMENT_ADDED_SUCCESS');
      return {
        ...state,
        announcements: state.announcements.concat(action.payload)
      }
    default:
      return state;
  }
}