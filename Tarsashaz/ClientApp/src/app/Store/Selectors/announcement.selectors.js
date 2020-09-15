"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectAnnouncements = void 0;
var store_1 = require("@ngrx/store");
var selectAnnouncement = function (state) { return state.announcement; };
exports.selectAnnouncements = store_1.createSelector(selectAnnouncement, function (state) { return state.announcements; });
//# sourceMappingURL=announcement.selectors.js.map