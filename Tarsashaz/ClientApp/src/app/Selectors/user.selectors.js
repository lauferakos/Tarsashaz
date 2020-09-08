"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectFirstLogin = exports.selectActualUser = void 0;
var store_1 = require("@ngrx/store");
var selectUser = function (state) { return state.user; };
exports.selectActualUser = store_1.createSelector(selectUser, function (state) { return state.actualUser; });
exports.selectFirstLogin = store_1.createSelector(selectUser, function (state) { return state.firstLogin; });
//# sourceMappingURL=user.selectors.js.map