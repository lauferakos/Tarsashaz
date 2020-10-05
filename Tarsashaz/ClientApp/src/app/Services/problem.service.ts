import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Problem } from '../Models/problem.model';
import { Observable } from 'rxjs';

@Injectable()
export class ProblemService {
  baseUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseurl: string) {
    this.baseUrl = baseurl;
  }

  reportProblem(p: Problem, conId: number): Observable<Problem> {
    p.id = 0;
    let url = this.baseUrl + "problem/"+conId;
    return this.http.post<Problem>(url, p);
  }
}
