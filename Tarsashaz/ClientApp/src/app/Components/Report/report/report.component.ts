import { Component, OnInit } from '@angular/core';
import { CondominiumService } from '../../../Services/condominium.service';
import { Condominium } from '../../../Models/condominium.model';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
/** Report component*/
export class ReportComponent implements OnInit{
  /** Report ctor */
  condominium: Condominium;
  constructor(private connService: CondominiumService) {

  }
  ngOnInit() {
    this.condominium = this.connService.getCondominiumByUserId(1);

  }
}
