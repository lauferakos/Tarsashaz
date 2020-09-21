"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitialState = exports.initialAppState = void 0;
var user_state_1 = require("./user.state");
var flat_state_1 = require("./flat.state");
var announcement_state_1 = require("./announcement.state");
var condominium_state_1 = require("./condominium.state");
exports.initialAppState = {
    user: user_state_1.initialUserState,
    flat: flat_state_1.initialFlatState,
    announcement: announcement_state_1.initialAnnouncementState,
    condominium: condominium_state_1.initialConState
};
function getInitialState() {
    return exports.initialAppState;
}
exports.getInitialState = getInitialState;
//# sourceMappingURL=app.state.js.map