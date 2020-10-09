"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.announcementReducers = void 0;
var announcement_state_1 = require("../States/announcement.state");
var Actions = require("./../Actions/announcement.actions");
function announcementReducers(state, action) {
    if (state === void 0) { state = announcement_state_1.initialAnnouncementState; }
    switch (action.type) {
        case Actions.GET_ANNOUNCEMENTS_SUCCESS:
            console.log('GET_ANNOUNCEMENTS_SUCCESS');
            return __assign(__assign({}, state), { announcements: action.payload });
        case Actions.ANNOUNCEMENT_ADDED_SUCCESS:
            console.log('ANNOUNCEMENT_ADDED_SUCCESS');
            return __assign(__assign({}, state), { announcements: state.announcements.concat(action.payload) });
        case Actions.ANNOUNCEMENTS_ADDED_SUCCESS:
            console.log('ANNOUNCEMENTS_ADDED_SUCCESS');
            return __assign(__assign({}, state), { announcements: state.announcements.concat(action.payload) });
        case Actions.ANNOUNCEMENT_DELETED_SUCCESS:
            console.log('ANNOUNCEMENT_DELETED_SUCCESS');
            return __assign(__assign({}, state), { announcements: state.announcements.filter(function (a) { return a.id != action.payload; }) });
        case Actions.CLEAR_ANNOUNCEMENTS:
            console.log('CLEAR_ANNOUNCEMENTS');
            return __assign(__assign({}, state), { announcements: [] });
        default:
            return state;
    }
}
exports.announcementReducers = announcementReducers;
//# sourceMappingURL=announcement.reducer.js.map