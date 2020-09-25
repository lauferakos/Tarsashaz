import { Component, OnInit } from '@angular/core';
import { CondominiumService } from '../../../Services/condominium.service';
import { Condominium } from '../../../Models/condominium.model';
import { Router } from '@angular/router';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectConBills, selectConId } from '../../../Store/Selectors/condominium.selectors';


@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
/** Report component*/
export class ReportComponent implements OnInit{
  /** Report ctor */
  bills$ = this.store.pipe(select(selectConBills));
  constructor(private connService: CondominiumService, private router: Router, private store: Store<AppState>) {

  }
  ngOnInit() {
    

  }

  billDetails(billId: number) {
    let connId;
    this.store.pipe(select(selectConId)).subscribe(id => connId = id);
    this.router.navigate(['/bill/details',billId,connId]);
  }
}
