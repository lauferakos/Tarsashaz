"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectActualUser = void 0;
var store_1 = require("@ngrx/store");
var selectUser = function (state) { return state.user; };
exports.selectActualUser = store_1.createSelector(selectUser, function (state) {
    if (state && state.actualUser)
        return state.actualUser;
});
//# sourceMappingURL=user.selectors.js.map