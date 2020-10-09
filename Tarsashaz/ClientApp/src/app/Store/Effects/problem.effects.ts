import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AppState } from "../States/app.state";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { ProblemService } from "../../Services/problem.service";
import { GetProblems, GET_PROBLEMS, GetProblemsSuccess, ProblemAdded, PROBLEM_ADDED, ProblemAddedSuccess } from "../Actions/problem.actions";
import { switchMap } from "rxjs/operators";
import { Problem } from "../../Models/problem.model";
import { of } from "rxjs";
import { selectConId } from "../Selectors/condominium.selectors";

@Injectable()
export class ProblemEffects {

  @Effect()
  getProblems$ = this.actions$.pipe(
    ofType<GetProblems>(GET_PROBLEMS),
    switchMap((p: GetProblems) => this.problemService.getProblems(p.payload)),
    switchMap((problems: Problem[]) => {
      return of(new GetProblemsSuccess(problems));
    })
  );

  @Effect()
  problemAdded$ = this.actions$.pipe(
    ofType<ProblemAdded>(PROBLEM_ADDED),
    switchMap((p: ProblemAdded) => 
      this.problemService.reportProblem(p.payload)
    ),
    switchMap((p: Problem) => {
      if (p != null) {
        return of(new ProblemAddedSuccess(p));
      }
    }
    ));


  constructor(private store: Store<AppState>, private actions$: Actions, private problemService: ProblemService) { }
}
