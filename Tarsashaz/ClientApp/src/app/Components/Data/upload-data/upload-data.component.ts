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

  flatData: FlatData = {
    id: 1,
    flatId: 1,
    type: FlatDataType.Water,
    pics: [],
    text:''
  }
  /** UploadData ctor */
  constructor(private store: Store<AppState>, private router: Router) {

  }

  ngOnInit() {
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
    })
  }
  onFileChanged(event) {
    if (event.target.files) {
      for (let i = 0; i < event.target.files.length; i++) {
        var reader = new FileReader();
        let file = event.target.files[i];
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event: any) => {
          this.flatData.pics.push({ url: event.target.result, file: file })
        }
      };
    }

  }
  deletePic(url: string) {
    this.flatData.pics = this.flatData.pics.filter(p => p.url != url);
  }
  onSubmit() {
    this.actualFlat.flatDatas = this.actualFlat.flatDatas.concat(this.flatData);
    console.log(this.actualFlat);
    console.log('Dispatch ActualFlatUpdated');
    this.store.dispatch(new FlatActions.ActualFlatUpdated(this.actualFlat));
    this.router.navigate(['/flat']);
  }
}
