import { Action } from '@ngrx/store';
import { Problem } from '../../Models/problem.model';

export const PROBLEM_ADDED = '[PROBLEM] Problem added';
export const PROBLEM_ADDED_SUCCESS = '[PROBLEM] Problem added success';

export const GET_PROBLEMS = '[PROBLEM] Get problems';
export const GET_PROBLEMS_SUCCESS = '[PROBLEM] Get problems success';

export class ProblemAdded implements Action {
  public readonly type = PROBLEM_ADDED;
  constructor(public payload: Problem) { }
}

export class ProblemAddedSuccess implements Action {
  public readonly type = PROBLEM_ADDED_SUCCESS;
  constructor(public payload: Problem) { }
}


export class GetProblems implements Action {
  public readonly type = GET_PROBLEMS;
  constructor(public payload: number) { }
}

export class GetProblemsSuccess implements Action {
  public readonly type = GET_PROBLEMS_SUCCESS;
  constructor(public payload: Problem[]) { }
}


export type ProblemActions = ProblemAdded | ProblemAddedSuccess | GetProblems | GetProblemsSuccess;
