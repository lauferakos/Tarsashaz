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
exports.userReducers = void 0;
var Actions = require("./../Actions/user.actions");
var user_state_1 = require("../States/user.state");
function userReducers(state, action) {
    if (state === void 0) { state = user_state_1.initialUserState; }
    switch (action.type) {
        case Actions.USER_LOGGED_IN_SUCCESS:
            console.log('USER_LOGGED_IN_SUCCESS');
            return __assign(__assign({}, state), { actualUser: action.payload, firstLogin: false });
        case Actions.USER_LOGGED_OUT_SUCCESS:
            console.log('USER_LOGGED_OUT_SUCCESS');
            return __assign(__assign({}, state), { actualUser: null, firstLogin: false });
        case Actions.USER_FIRST_LOGIN:
            return __assign(__assign({}, state), { firstLogin: true });
        default:
            return state;
    }
}
exports.userReducers = userReducers;
//# sourceMappingURL=user.reducer.js.map