import { AppState } from "../States/app.state";
import { createSelector } from "@ngrx/store";
import { ProblemState } from "../States/problem.state";

const selectProblem = (state: AppState) => state.problem;

export const selectProblems = createSelector(
  selectProblem,
  (state: ProblemState) => state.problems
);
