import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import * as FlatActions from '../../../Store/Actions/flat.actions';

@Component({
    selector: 'app-add-flat',
    templateUrl: './add-flat.component.html',
    styleUrls: ['./add-flat.component.css']
})
/** AddFlat component*/
export class AddFlatComponent {
  addressForm: FormGroup;
  @Output() flatSavedEvent = new EventEmitter();

  constructor(private router: Router, private store: Store<AppState>) {

  }
  onSubmit() {
    console.log(this.addressForm);
    this.store.dispatch(new FlatActions.FlatAdded(this.addressForm.value));
    this.flatSavedEvent.emit();
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
