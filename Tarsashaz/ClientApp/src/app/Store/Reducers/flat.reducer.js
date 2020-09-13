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
exports.flatReducers = void 0;
var flat_state_1 = require("../States/flat.state");
var Actions = require("./../Actions/flat.actions");
function flatReducers(state, action) {
    if (state === void 0) { state = flat_state_1.initialFlatState; }
    switch (action.type) {
        case Actions.FLAT_ADDED_SUCCESS:
            console.log('FLAT_ADDED_SUCCESS');
            return __assign(__assign({}, state), { flats: state.flats.concat(action.payload), actualFlat: action.payload });
        case Actions.ACTUAL_FLAT_CHANGED_SUCCESS:
            console.log('ACTUAL_FLAT_CHANGED_SUCCESS');
            return __assign(__assign({}, state), { actualFlat: action.payload });
        default:
            return state;
    }
}
exports.flatReducers = flatReducers;
//# sourceMappingURL=flat.reducer.js.map