import { Component, OnInit } from '@angular/core';
import { Problem } from '../../../Models/problem.model';
import { ProblemType } from '../../../Enums/ProblemType';

@Component({
    selector: 'app-problem-report',
    templateUrl: './problem-report.component.html',
    styleUrls: ['./problem-report.component.css']
})
/** ProblemReport component*/
export class ProblemReportComponent implements OnInit {

  isPicsVisible = false;
  isSuccess = false;

  problem: Problem = {
    type: ProblemType.oldal,
    text: '',
    pictures:[]
  }
    /** ProblemReport ctor */
    constructor() {

  }
  ngOnInit() {
    
  }
  newProblem() {
    this.isSuccess = false;
    this.problem = {
      type: ProblemType.oldal,
      text: '',
      pictures: []
    };
  }
  
  onFileChanged(event) {
    if (event.target.files) {
      this.isPicsVisible = true;
      for (let i = 0; i < event.target.files.length; i++) {
        var reader = new FileReader();
        let file = event.target.files[i];
        console.log(file);
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event: any) => {
          this.problem.pictures.push({ url: event.target.result, file:file })
        }
      };
    }
    
  }
  deletePic(url: string) {
    this.problem.pictures = this.problem.pictures.filter(p => p.url != url);
  }
  onSubmit() {
    console.log('Uploading');
    console.log(this.problem);
    this.isSuccess = true;
  }
}
