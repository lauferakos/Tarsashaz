"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectProblems = void 0;
var store_1 = require("@ngrx/store");
var selectProblem = function (state) { return state.problem; };
exports.selectProblems = store_1.createSelector(selectProblem, function (state) { return state.problems; });
//# sourceMappingURL=problem.selectors.js.map