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
exports.condominiumReducers = void 0;
var condominium_state_1 = require("../States/condominium.state");
var Actions = require("./../Actions/condominium.actions");
function condominiumReducers(state, action) {
    if (state === void 0) { state = condominium_state_1.initialConState; }
    switch (action.type) {
        case Actions.GET_CONDOMINIUM_SUCCESS:
            console.log('GET_CONDOMINIUM_SUCCESS');
            return __assign(__assign({}, state), { actualCon: action.payload });
        default:
            return state;
    }
}
exports.condominiumReducers = condominiumReducers;
//# sourceMappingURL=condominium.reducer.js.map