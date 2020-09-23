import { Component, OnInit } from '@angular/core';
import { FlatData } from '../../../Models/flatdata.model';
import { FlatDataType } from '../../../Enums/FlatDataType';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import { selectActualFlat } from '../../../Store/Selectors/flat.selectors';
import { Flat } from '../../../Models/flat.model';
import * as FlatActions from '../../../Store/Actions/flat.actions';
import { concat } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
    selector: 'app-upload-data',
    templateUrl: './upload-data.component.html',
    styleUrls: ['./upload-data.component.css']
})
/** UploadData component*/
export class UploadDataComponent implements OnInit{
  actualFlat$ = this.store.pipe(select(selectActualFlat));
  actualFlat: Flat;
  panelOpenState = false;


  dataForm: FormGroup;
  /** UploadData ctor */
  constructor(private store: Store<AppState>, private router: Router) {

  }

  ngOnInit() {
    this.dataForm = new FormGroup({
      'id': new FormControl(1, Validators.required),
      'flatId': new FormControl(1, Validators.required),
      'type': new FormControl(FlatDataType.Water, Validators.required),
      'pics': new FormControl([]),
      'text': new FormControl(null),
      'value': new FormControl(null,[Validators.required, Validators.min(0)])
    });
    
    this.actualFlat$.subscribe(actual => {
      if (actual != null) {
        this.actualFlat = {
          id: actual.id,
          address: actual.address,
          ownerId: actual.ownerId,
          bills: actual.bills,
          flatDatas: actual.flatDatas,
          balances: actual.balances
        }
      }
    });
  }
  onFileChanged(event) {
    
    if (event.target.files) {
      for (let i = 0; i < event.target.files.length; i++) {
        var reader = new FileReader();
        let file = event.target.files[i];
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event: any) => {
          this.dataForm.value.pics.push({ url: event.target.result, file: file })
        }
      };
    }

  }
  deletePic(url: string) {
    this.dataForm.value.pics = this.dataForm.value.pics.filter(p => p.url != url);
  }
  onSubmit() {
    console.log(this.dataForm);
    if (this.dataForm.valid) {
      this.actualFlat.flatDatas = this.actualFlat.flatDatas.concat(this.dataForm.value);
      console.log('Dispatch ActualFlatUpdated');
      this.store.dispatch(new FlatActions.ActualFlatUpdated(this.actualFlat));
      this.router.navigate(['/flat']);
    }
  }
}
