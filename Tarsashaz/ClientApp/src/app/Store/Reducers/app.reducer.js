"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appReducers = void 0;
var user_reducer_1 = require("./user.reducer");
var flat_reducer_1 = require("./flat.reducer");
var announcement_reducer_1 = require("./announcement.reducer");
exports.appReducers = {
    user: user_reducer_1.userReducers,
    flat: flat_reducer_1.flatReducers,
    announcement: announcement_reducer_1.announcementReducers
};
//# sourceMappingURL=app.reducer.js.map