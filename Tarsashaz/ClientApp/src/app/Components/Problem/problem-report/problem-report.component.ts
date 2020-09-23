import { Component, OnInit } from '@angular/core';
import { Problem } from '../../../Models/problem.model';
import { ProblemType } from '../../../Enums/ProblemType';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-problem-report',
    templateUrl: './problem-report.component.html',
    styleUrls: ['./problem-report.component.css']
})
/** ProblemReport component*/
export class ProblemReportComponent implements OnInit {

  isPicsVisible = false;
  isSuccess = false;
  problemForm: FormGroup;
    /** ProblemReport ctor */
    constructor() {

  }
  ngOnInit() {
    this.problemForm = new FormGroup({
      'type': new FormControl(ProblemType.társasház, Validators.required),
      'text': new FormControl(null, Validators.required),
      'pictures': new FormControl([]),
    });
  }
  newProblem() {

    this.problemForm.reset({ type: ProblemType.társasház, text:'',pictures:[] })
    this.isSuccess = false;
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
          this.problemForm.value.pictures.push({ url: event.target.result, file: file })
        }
      };
    }
    
  }
  deletePic(url: string) {
    this.problemForm.value.pictures = this.problemForm.value.pictures.filter(p => p.url != url);
  }
  onSubmit() {
    if (this.problemForm.valid) {
      console.log('Uploading');
      console.log(this.problemForm.value);
      this.isSuccess = true;
    }
  }
}
