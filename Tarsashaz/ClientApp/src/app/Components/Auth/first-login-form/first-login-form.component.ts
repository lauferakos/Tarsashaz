import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../Services/user.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import * as FlatActions from '../../../Store/Actions/flat.actions';
import * as UserActions from '../../../Store/Actions/user.actions';
import { selectFlats } from '../../../Store/Selectors/flat.selectors';
import { Flat } from '../../../Models/flat.model';
import { User } from '../../../Models/user.model';
import { selectActualUser } from '../../../Store/Selectors/user.selectors';

@Component({
    selector: 'app-first-login-form',
    templateUrl: './first-login-form.component.html',
    styleUrls: ['./first-login-form.component.css']
})
/** FirstLoginForm component*/
export class FirstLoginFormComponent implements OnInit{
  addressForm: FormGroup;
  user: User = {
    id: 0,
    token: '',
    name: '',
    email: '',
    role: null,
    phone: ''
  };
  actualUser$ = this.store.pipe(select(selectActualUser));
    /** FirstLoginForm ctor */
  constructor(private router: Router, private userService: UserService, private store: Store<AppState>) {

  }
  onSubmit() {
    if (this.addressForm.valid) {
      let flats$ = this.store.pipe(select(selectFlats));
      let flatsLength = 0;
      flats$.subscribe((flats) => flatsLength = flats.length);

      let flat: Flat = {
        id: flatsLength + 1,
        address: this.addressForm.value,
        ownerId: 1
      }
      this.store.dispatch(new UserActions.UserDataChanged(this.user));
      this.store.dispatch(new FlatActions.FlatAdded(flat));
      this.userService.firstLoginSaved();
      this.router.navigate(['/']);
    }
    else {
      console.log('A form invalid');
    }
  }

  ngOnInit() {
    this.addressForm = new FormGroup({
      'postCode': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'street': new FormControl(null, Validators.required),
      'number': new FormControl(null, Validators.required),
      'floor': new FormControl(null),
      'door': new FormControl(null)
    });
    this.actualUser$.subscribe(res => {
      if (res !== null) {
        this.user = {
          id: res.id,
          token: res.token,
          name: res.name,
          email: res.email,
          role: res.role,
          phone: res.phone
        }
      }
    });

  }
}
