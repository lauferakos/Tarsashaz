import { Component, OnInit } from '@angular/core';
import { CondominiumService } from '../../../Services/condominium.service';
import { Condominium } from '../../../Models/condominium.model';
import { Router } from '@angular/router';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectActualCon } from '../../../Store/Selectors/condominium.selectors';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
/** Report component*/
export class ReportComponent implements OnInit{
  /** Report ctor */
  condominium: Condominium;
  constructor(private connService: CondominiumService, private router: Router, private store: Store<AppState>) {

  }
  ngOnInit() {
    let condominium$ = this.store.pipe(select(selectActualCon));
    condominium$.subscribe(c => this.condominium = c);

  }

  billDetails(billId:number,connId:number) {
    this.router.navigate(['/bill/details',billId,connId]);
  }
}
