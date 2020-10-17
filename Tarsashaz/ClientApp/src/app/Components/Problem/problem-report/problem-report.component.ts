import { Component, OnInit } from '@angular/core';
import { Problem } from '../../../Models/problem.model';
import { ProblemType } from '../../../Enums/ProblemType';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProblemService } from '../../../Services/problem.service';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectConId } from '../../../Store/Selectors/condominium.selectors';
import * as ProblemActions from '../../../Store/Actions/problem.actions';

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
  constructor(private problemService: ProblemService,private store:Store<AppState>) {

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
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event: any) => {
          this.problemForm.value.pictures.push({ url: "uploads/" + file.name, file: file, name: file.name,type: file.type})
        }
      };
    }
    
  }
  deletePic(url: string) {
    this.problemForm.value.pictures = this.problemForm.value.pictures.filter(p => p.url != url);
  }
  onSubmit() {
    if (this.problemForm.valid) {
      this.isSuccess = true;
      
      if (this.problemForm.value.pictures.length > 0) {
        console.log('Upload image');
        this.problemService.uploadPicture(this.problemForm.value.pictures);
      }
      this.store.dispatch(new ProblemActions.ProblemAdded(this.problemForm.value));
    }
  }
}
