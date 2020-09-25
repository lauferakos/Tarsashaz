"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAnnouncementsSuccess = exports.GetAnnouncements = exports.AnnouncementDeletedSuccess = exports.AnnouncementDeleted = exports.AnnouncementsAddedSuccess = exports.AnnouncementAddedSuccess = exports.AnnouncementAdded = exports.GET_ANNOUNCEMENTS_SUCCESS = exports.GET_ANNOUNCEMENTS = exports.ANNOUNCEMENT_DELETED_SUCCESS = exports.ANNOUNCEMENT_DELETED = exports.ANNOUNCEMENTS_ADDED_SUCCESS = exports.ANNOUNCEMENT_ADDED_SUCCESS = exports.ANNOUNCEMENT_ADDED = void 0;
exports.ANNOUNCEMENT_ADDED = '[ANNOUNCEMENT] Announcement added';
exports.ANNOUNCEMENT_ADDED_SUCCESS = '[ANNOUNCEMENT] Announcement added success';
exports.ANNOUNCEMENTS_ADDED_SUCCESS = '[ANNOUNCEMENT] Announcements added success';
exports.ANNOUNCEMENT_DELETED = '[ANNOUNCEMENT] Announcement deleted';
exports.ANNOUNCEMENT_DELETED_SUCCESS = '[ANNOUNCEMENT] Announcement deleted success';
exports.GET_ANNOUNCEMENTS = '[ANNOUNCEMENT] Get announcements';
exports.GET_ANNOUNCEMENTS_SUCCESS = '[ANNOUNCEMENT] Get announcements success';
var AnnouncementAdded = /** @class */ (function () {
    function AnnouncementAdded(payload) {
        this.payload = payload;
        this.type = exports.ANNOUNCEMENT_ADDED;
    }
    return AnnouncementAdded;
}());
exports.AnnouncementAdded = AnnouncementAdded;
var AnnouncementAddedSuccess = /** @class */ (function () {
    function AnnouncementAddedSuccess(payload) {
        this.payload = payload;
        this.type = exports.ANNOUNCEMENT_ADDED_SUCCESS;
    }
    return AnnouncementAddedSuccess;
}());
exports.AnnouncementAddedSuccess = AnnouncementAddedSuccess;
var AnnouncementsAddedSuccess = /** @class */ (function () {
    function AnnouncementsAddedSuccess(payload) {
        this.payload = payload;
        this.type = exports.ANNOUNCEMENTS_ADDED_SUCCESS;
    }
    return AnnouncementsAddedSuccess;
}());
exports.AnnouncementsAddedSuccess = AnnouncementsAddedSuccess;
var AnnouncementDeleted = /** @class */ (function () {
    function AnnouncementDeleted(payload) {
        this.payload = payload;
        this.type = exports.ANNOUNCEMENT_DELETED;
    }
    return AnnouncementDeleted;
}());
exports.AnnouncementDeleted = AnnouncementDeleted;
var AnnouncementDeletedSuccess = /** @class */ (function () {
    function AnnouncementDeletedSuccess(payload) {
        this.payload = payload;
        this.type = exports.ANNOUNCEMENT_DELETED_SUCCESS;
    }
    return AnnouncementDeletedSuccess;
}());
exports.AnnouncementDeletedSuccess = AnnouncementDeletedSuccess;
var GetAnnouncements = /** @class */ (function () {
    function GetAnnouncements() {
        this.type = exports.GET_ANNOUNCEMENTS;
    }
    return GetAnnouncements;
}());
exports.GetAnnouncements = GetAnnouncements;
var GetAnnouncementsSuccess = /** @class */ (function () {
    function GetAnnouncementsSuccess(payload) {
        this.payload = payload;
        this.type = exports.GET_ANNOUNCEMENTS_SUCCESS;
    }
    return GetAnnouncementsSuccess;
}());
exports.GetAnnouncementsSuccess = GetAnnouncementsSuccess;
//# sourceMappingURL=announcement.actions.js.map