import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import * as FlatActions from '../../../Store/Actions/flat.actions';
import { Flat } from '../../../Models/flat.model';
import { selectFlats } from '../../../Store/Selectors/flat.selectors';
import { BillType } from '../../../Enums/BillType';
import { Role } from '../../../Enums/Role';

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
        ownerId: 1,
        bills: [
          {
            id: 1,
            type: BillType.Water,
            pic: null,
            isPaid: true,
            amount: 20000,
            user: {
              name: 'Akos',
              email: 'akos@gmail.com',
              token: '1561',
              id: 454,
              role: Role.resident,
              phone: '12345'
            },
            destAddress: {
              postCode: 123,
              city: 'Tevel',
              street: 'Dorogi u.',
              number: 340,
              floor: 1,
              door: 1
            },
            items: [
              {
                name: 'asd1',
                vat: 25,
                gross: 5000
              },
              {
                name: 'asd2',
                vat: 25,
                gross: 5000
              },
              {
                name: 'asd3',
                vat: 25,
                gross: 5000
              },
            ],
            provider: {
              address: {
                postCode: 1234,
                city: 'Budapest',
                street: 'asd út',
                number: 3,
                floor: 1,
                door: 2
              },
              phone: '123145',
              email: 'asd@gmail.com',
              accountNum: 1454431154487,
            },
            billDate: {
              startDate: new Date('2020-09-15'),
              payoffStart: new Date('2020-09-15'),
              payoffEnd: new Date('2020-10-15'),
              deadline: new Date('2020-11-15'),
            }
          }
        ],
        flatDatas: [],
        balances: [
          {
            type: BillType.Electric,
            amount: 5000
          },
          {
            type: BillType.Heating,
            amount: -10000
          },
          {
            type: BillType.Water,
            amount: 0
          }
        ],
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
