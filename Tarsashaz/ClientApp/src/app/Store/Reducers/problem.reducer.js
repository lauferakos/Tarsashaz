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
exports.problemReducers = void 0;
var problem_state_1 = require("../States/problem.state");
var Actions = require("./../Actions/problem.actions");
function problemReducers(state, action) {
    if (state === void 0) { state = problem_state_1.initialProblemState; }
    switch (action.type) {
        case Actions.GET_PROBLEMS_SUCCESS:
            console.log('GET_PROBLEMS_SUCCESS');
            return __assign(__assign({}, state), { problems: action.payload });
        case Actions.PROBLEM_ADDED_SUCCESS:
            console.log('PROBLEM_ADDED_SUCCESS');
            return __assign(__assign({}, state), { problems: state.problems.concat(action.payload) });
    }
}
exports.problemReducers = problemReducers;
//# sourceMappingURL=problem.reducer.js.map