"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitialState = exports.initialAppState = void 0;
var user_state_1 = require("./user.state");
exports.initialAppState = {
    user: user_state_1.initialUserState
};
function getInitialState() {
    return exports.initialAppState;
}
exports.getInitialState = getInitialState;
//# sourceMappingURL=app.state.js.map