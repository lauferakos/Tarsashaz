import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../Services/user.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import * as FlatActions from '../../../Store/Actions/flat.actions';
import { selectFlats } from '../../../Store/Selectors/flat.selectors';
import { Flat } from '../../../Models/flat.model';

@Component({
    selector: 'app-first-login-form',
    templateUrl: './first-login-form.component.html',
    styleUrls: ['./first-login-form.component.css']
})
/** FirstLoginForm component*/
export class FirstLoginFormComponent implements OnInit{
  addressForm: FormGroup;
    /** FirstLoginForm ctor */
  constructor(private router: Router, private userService: UserService, private store: Store<AppState>) {

  }
  onSubmit() {
    let flats$ = this.store.pipe(select(selectFlats));
    let flatsLength = 0;
    flats$.subscribe((flats) => flatsLength = flats.length);

    let flat: Flat = {
      id: flatsLength + 1,
      address: this.addressForm.value,
      ownerId: 1
    }
    console.log('submit', flat);
    this.store.dispatch(new FlatActions.FlatAdded(flat));
    this.userService.firstLoginSaved();
    this.router.navigate(['/']);
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
  }
}
