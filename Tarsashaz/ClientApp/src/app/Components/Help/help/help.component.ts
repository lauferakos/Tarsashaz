import { Component, OnInit } from '@angular/core';
import { HelpService } from '../../../Services/help.service';
import { Help } from '../../../Models/help.model';

@Component({
    selector: 'app-help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.css']
})
/** Help component*/
export class HelpComponent implements OnInit{
  helps: Help[];
  /** Help ctor */
  constructor(private helpService: HelpService) {
  }

  ngOnInit() {
    this.helps = this.helpService.getQuestionsAndAnswers();
  }
}
