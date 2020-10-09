import { Problem } from "../../Models/problem.model";

export interface ProblemState {
  problems: Problem[];
}

export const initialProblemState: ProblemState = {
  problems: [],
}
