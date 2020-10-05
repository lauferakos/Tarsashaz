import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import * as FlatActions from '../../../Store/Actions/flat.actions';
import * as UserActions from '../../../Store/Actions/user.actions';
import { Flat } from '../../../Models/flat.model';
import { selectFlats } from '../../../Store/Selectors/flat.selectors';
import { BillType } from '../../../Enums/BillType';
import { Role } from '../../../Enums/Role';
import { selectCondominiums } from '../../../Store/Selectors/condominium.selectors';
import { Condominium } from '../../../Models/condominium.model';
import { selectActualUser } from '../../../Store/Selectors/user.selectors';
import { User } from '../../../Models/user.model';
import { concat } from 'rxjs';
import * as ConActions from '../../../Store/Actions/condominium.actions';

@Component({
  selector: 'app-add-flat',
  templateUrl: './add-flat.component.html',
  styleUrls: ['./add-flat.component.css']
})
/** AddFlat component*/
export class AddFlatComponent implements OnInit {
  condominiums
  addressForm: FormGroup;
  user: User;
  selected;
  @Output() flatSavedEvent = new EventEmitter();

  constructor(private router: Router, private store: Store<AppState>) {

  }


  onSubmit() {
    let actualUser$ = this.store.pipe(select(selectActualUser));
    actualUser$.subscribe(res => {
      if (res !== null) {
        this.user = {
          id: res.id,
          token: res.token,
          name: res.name,
          email: res.email,
          role: res.role,
          phone: res.phone,
          flats: res.flats
        }
      }
    });
      if (this.addressForm.valid && this.selected) {

        let flat: Flat = {
          id: 0,
          address: {
            id:0,
            postCode: this.condominiums[+this.selected].address.postCode,
            city: this.condominiums[+this.selected].address.city,
            street: this.condominiums[+this.selected].address.street,
            number: this.condominiums[+this.selected].address.number,
            floor: this.addressForm.get('floor').value,
            door: this.addressForm.get('door').value
          },
          userId: this.user.id,
          bills: [],
          flatDatas: [],
          balances: [],
        }
        this.user.flats.concat(flat);
        this.store.dispatch(new UserActions.UserDataChanged(this.user));
        this.store.dispatch(new FlatActions.FlatAdded(flat));
        this.flatSavedEvent.emit();
      }
      else {
        console.log('A form invalid');
      }

    }
  

  ngOnInit() {
    this.store.dispatch(new ConActions.GetCondominiums());
    this.store.pipe(select(selectCondominiums)).subscribe(c => {
      this.condominiums = c
      console.log(this.condominiums);
    });
    this.addressForm = new FormGroup({
      'floor': new FormControl(null, Validators.required),
      'door': new FormControl(null, Validators.required)
    });
  }
}
