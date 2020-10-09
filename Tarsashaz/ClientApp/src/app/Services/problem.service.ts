import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Problem } from '../Models/problem.model';
import { Observable } from 'rxjs';
import { AppState } from '../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectConId } from '../Store/Selectors/condominium.selectors';
import { ProblemType } from '../Enums/ProblemType';

@Injectable()
export class ProblemService {
  baseUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseurl: string, private store: Store<AppState>) {
    this.baseUrl = baseurl;
  }

  reportProblem(p: Problem): Observable<Problem> {
    //p.id = 0;
    let conId = 0;
    
    this.store.pipe(select(selectConId)).subscribe(id => conId = id);
    
    
    let url = this.baseUrl + "problem/"+conId;
    return this.http.post<Problem>(url, p);
  }

  getProblems(conId: number): Observable<Problem[]> {
    let url = this.baseUrl + "problem/" + conId;
    return this.http.get<Problem[]>(url);
  }
}
