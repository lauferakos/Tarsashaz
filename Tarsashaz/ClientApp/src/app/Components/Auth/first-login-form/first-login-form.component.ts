import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../Services/user.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import * as FlatActions from '../../../Store/Actions/flat.actions';
import * as UserActions from '../../../Store/Actions/user.actions';
import * as ConActions from '../../../Store/Actions/condominium.actions';
import { selectFlats } from '../../../Store/Selectors/flat.selectors';
import { Flat } from '../../../Models/flat.model';
import { User } from '../../../Models/user.model';
import { selectActualUser } from '../../../Store/Selectors/user.selectors';
import { Role } from '../../../Enums/Role';
import { BillType } from '../../../Enums/BillType';
import { CondominiumService } from '../../../Services/condominium.service';
import { Condominium } from '../../../Models/condominium.model';
import { selectCondominiums } from '../../../Store/Selectors/condominium.selectors';
import { FirstloginService } from '../../../Services/firstlogin.service';

@Component({
    selector: 'app-first-login-form',
    templateUrl: './first-login-form.component.html',
    styleUrls: ['./first-login-form.component.css']
})
/** FirstLoginForm component*/
export class FirstLoginFormComponent implements OnInit{
  condominiums: Condominium[];
  selected;

  addressForm: FormGroup;
  user: User = {
    id: 0,
    token: '',
    name: '',
    email: '',
    role: null,
    phone: '',
    flats: [],
    balance:0
  };
  actualUser$ = this.store.pipe(select(selectActualUser));
  /** FirstLoginForm ctor */
  constructor(private router: Router,
    private userService: UserService,
    private store: Store<AppState>,
    private conService: CondominiumService,
    private firstLoginService: FirstloginService) {
    this.store.dispatch(new ConActions.GetCondominiums());
    this.store.pipe(select(selectCondominiums)).subscribe(cons => this.condominiums = cons);
  }

  skipFirstLogin() {
    this.userService.firstLoginSaved();
    this.router.navigate(['/']);
  }
  onSubmit() {
    console.log(this.selected);
    if (this.addressForm.valid && this.selected) {
      let flat: Flat = {
        id:0,
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
        balances: [
          {
            id: 0,
            date: new Date(),
            waterAmount: 0,
            electricalAmount: 0,
            heatingAmount: 0
          }
        ],
      }
      this.user.flats = [];
      this.user.flats.push(flat);

      this.store.dispatch(new UserActions.UserDataChanged(this.user));
      this.store.dispatch(new FlatActions.FlatAdded(flat));
      this.userService.firstLoginSaved();
      this.router.navigate(['/']);
        console.log('navigate');
    }
    else {
      console.log('A form invalid');
    }
  }

  ngOnInit() {
    this.addressForm = new FormGroup({
      'floor': new FormControl(null, Validators.required),
      'door': new FormControl(null, Validators.required)
    });
    this.actualUser$.subscribe(res => {
      if (res !== null) {
        this.user = {
          id: res.id,
          token: res.token,
          name: res.name,
          email: res.email,
          role: res.role,
          phone: res.phone,
          flats: res.flats,
          balance: res.balance
        }
      }
    });

  }
}
