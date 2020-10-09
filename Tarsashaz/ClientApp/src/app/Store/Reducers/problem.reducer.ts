import { initialProblemState, ProblemState } from "../States/problem.state";
import * as Actions from './../Actions/problem.actions';


export function problemReducers(state = initialProblemState, action: Actions.ProblemActions): ProblemState {
  switch (action.type) {
    case Actions.GET_PROBLEMS_SUCCESS:
      console.log('GET_PROBLEMS_SUCCESS')
      return {
        ...state,
        problems: action.payload
      }

    case Actions.PROBLEM_ADDED_SUCCESS:
      console.log('PROBLEM_ADDED_SUCCESS')
      return {
        ...state,
        problems: state.problems.concat(action.payload)
      }
  }
}
