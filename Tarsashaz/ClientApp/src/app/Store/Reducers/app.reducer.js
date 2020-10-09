"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appReducers = void 0;
var user_reducer_1 = require("./user.reducer");
var flat_reducer_1 = require("./flat.reducer");
var announcement_reducer_1 = require("./announcement.reducer");
var condominium_reducer_1 = require("./condominium.reducer");
var problem_reducer_1 = require("./problem.reducer");
exports.appReducers = {
    user: user_reducer_1.userReducers,
    flat: flat_reducer_1.flatReducers,
    announcement: announcement_reducer_1.announcementReducers,
    condominium: condominium_reducer_1.condominiumReducers,
    problem: problem_reducer_1.problemReducers
};
//# sourceMappingURL=app.reducer.js.map