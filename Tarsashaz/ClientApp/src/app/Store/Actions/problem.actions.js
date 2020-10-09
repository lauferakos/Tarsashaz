"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProblemsSuccess = exports.GetProblems = exports.ProblemAddedSuccess = exports.ProblemAdded = exports.GET_PROBLEMS_SUCCESS = exports.GET_PROBLEMS = exports.PROBLEM_ADDED_SUCCESS = exports.PROBLEM_ADDED = void 0;
exports.PROBLEM_ADDED = '[PROBLEM] Problem added';
exports.PROBLEM_ADDED_SUCCESS = '[PROBLEM] Problem added success';
exports.GET_PROBLEMS = '[PROBLEM] Get problems';
exports.GET_PROBLEMS_SUCCESS = '[PROBLEM] Get problems success';
var ProblemAdded = /** @class */ (function () {
    function ProblemAdded(payload) {
        this.payload = payload;
        this.type = exports.PROBLEM_ADDED;
    }
    return ProblemAdded;
}());
exports.ProblemAdded = ProblemAdded;
var ProblemAddedSuccess = /** @class */ (function () {
    function ProblemAddedSuccess(payload) {
        this.payload = payload;
        this.type = exports.PROBLEM_ADDED_SUCCESS;
    }
    return ProblemAddedSuccess;
}());
exports.ProblemAddedSuccess = ProblemAddedSuccess;
var GetProblems = /** @class */ (function () {
    function GetProblems(payload) {
        this.payload = payload;
        this.type = exports.GET_PROBLEMS;
    }
    return GetProblems;
}());
exports.GetProblems = GetProblems;
var GetProblemsSuccess = /** @class */ (function () {
    function GetProblemsSuccess(payload) {
        this.payload = payload;
        this.type = exports.GET_PROBLEMS_SUCCESS;
    }
    return GetProblemsSuccess;
}());
exports.GetProblemsSuccess = GetProblemsSuccess;
//# sourceMappingURL=problem.actions.js.map