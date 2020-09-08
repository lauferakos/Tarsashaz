"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoggedOutSuccess = exports.UserLoggedOut = exports.UserLoggedInSuccess = exports.UserLoggedIn = exports.UserFirstLogin = exports.USER_LOGGED_OUT_SUCCESS = exports.USER_LOGGED_OUT = exports.USER_LOGGED_IN_SUCCESS = exports.USER_LOGGED_IN = exports.USER_FIRST_LOGIN = void 0;
exports.USER_FIRST_LOGIN = '[USER] First Login';
exports.USER_LOGGED_IN = '[USER] Logged in';
exports.USER_LOGGED_IN_SUCCESS = '[USER] Logged in Success';
exports.USER_LOGGED_OUT = '[USER] Logged out';
exports.USER_LOGGED_OUT_SUCCESS = '[USER] Logged out Success';
var UserFirstLogin = /** @class */ (function () {
    function UserFirstLogin() {
        this.type = exports.USER_FIRST_LOGIN;
    }
    return UserFirstLogin;
}());
exports.UserFirstLogin = UserFirstLogin;
var UserLoggedIn = /** @class */ (function () {
    function UserLoggedIn(payload) {
        this.payload = payload;
        this.type = exports.USER_LOGGED_IN;
    }
    return UserLoggedIn;
}());
exports.UserLoggedIn = UserLoggedIn;
var UserLoggedInSuccess = /** @class */ (function () {
    function UserLoggedInSuccess(payload) {
        this.payload = payload;
        this.type = exports.USER_LOGGED_IN_SUCCESS;
    }
    return UserLoggedInSuccess;
}());
exports.UserLoggedInSuccess = UserLoggedInSuccess;
var UserLoggedOut = /** @class */ (function () {
    function UserLoggedOut() {
        this.type = exports.USER_LOGGED_OUT;
    }
    return UserLoggedOut;
}());
exports.UserLoggedOut = UserLoggedOut;
var UserLoggedOutSuccess = /** @class */ (function () {
    function UserLoggedOutSuccess() {
        this.type = exports.USER_LOGGED_OUT_SUCCESS;
    }
    return UserLoggedOutSuccess;
}());
exports.UserLoggedOutSuccess = UserLoggedOutSuccess;
//# sourceMappingURL=user.actions.js.map