import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import * as FlatActions from '../../../Store/Actions/flat.actions';
import { Flat } from '../../../Models/flat.model';
import { selectFlats } from '../../../Store/Selectors/flat.selectors';

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
    if (this.addressForm.valid) {
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
      this.flatSavedEvent.emit();
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
  }
}
