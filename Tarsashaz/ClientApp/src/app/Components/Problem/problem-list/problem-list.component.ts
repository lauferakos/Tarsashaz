import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { CondominiumService } from '../../../Services/condominium.service';
import { selectConId } from '../../../Store/Selectors/condominium.selectors';
import { Problem } from '../../../Models/problem.model';
import { ProblemService } from '../../../Services/problem.service';
import * as ProblemActions from '../../../Store/Actions/problem.actions';
import { selectProblems } from '../../../Store/Selectors/problem.selectors';
import { dispatch } from 'rxjs/internal/observable/range';
import { Actions, ofType } from '@ngrx/effects';
import { selectActualFlat } from '../../../Store/Selectors/flat.selectors';
import { selectActualUser } from '../../../Store/Selectors/user.selectors';

@Component({
    selector: 'app-problem-list',
    templateUrl: './problem-list.component.html',
    styleUrls: ['./problem-list.component.css']
})
/** ProblemList component*/
export class ProblemListComponent implements OnInit{
  /** ProblemList ctor */
  problems: Problem[];
  actualFlat$ = this.store.pipe(select(selectActualFlat));
  actualUser$ = this.store.pipe(select(selectActualUser));
  constructor(private store: Store<AppState>, private problemService: ProblemService, private _actions$: Actions,) {

  }

  async ngOnInit() {
    let condominiumId: number;
    this.store.pipe(select(selectConId)).subscribe(id => condominiumId = id);
    this.store.dispatch(new ProblemActions.GetProblems(condominiumId)); 
    this._actions$.pipe(ofType(ProblemActions.GET_PROBLEMS_SUCCESS)).subscribe((data: any) => {
      this.store.pipe(select(selectProblems)).subscribe(problems => this.problems = problems);
      console.log(this.problems);
    })
     
   // this.store.pipe(select(selectProblems)).subscribe(problems => this.problems = problems);
    }
}
