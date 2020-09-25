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
    case Actions.ANNOUNCEMENTS_ADDED_SUCCESS:
      console.log('ANNOUNCEMENTS_ADDED_SUCCESS');
      return {
        ...state,
        announcements: state.announcements.concat(action.payload)
      }
    case Actions.ANNOUNCEMENT_DELETED_SUCCESS:
      console.log('ANNOUNCEMENT_DELETED_SUCCESS');
      return {
        ...state,
        announcements: state.announcements.filter(a => a.id != action.payload)
      }
    default:
      return state;
  }
}
