import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { FlatService } from '../../../Services/flat.service';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectConId } from '../../../Store/Selectors/condominium.selectors';
import { Flat } from '../../../Models/flat.model';
import { FlatBalance } from '../../../Models/flatbalance.model';
import { selectActualFlatBalance, selectActualFlat } from '../../../Store/Selectors/flat.selectors';
import { BillType } from '../../../Enums/BillType';
import * as FlatActions from '../../../Store/Actions/flat.actions';

@Component({
    selector: 'app-add-bill',
    templateUrl: './add-bill.component.html',
    styleUrls: ['./add-bill.component.css']
})
/** AddBill component*/
export class AddBillComponent implements OnInit {
  BillForm: FormGroup;
  flats: Flat[];
  flat: Flat;
  conId: number;
  success: boolean = false;
  balances$ = this.store.pipe(select(selectActualFlatBalance));
  flatBalance: FlatBalance;
  updatedFlatBalance: FlatBalance;

  /** AddBill ctor */
  constructor(private fb: FormBuilder, private flatService: FlatService, private store: Store<AppState>) {
    this.store.pipe(select(selectConId)).subscribe(
      id => this.conId = id
    );
    this.store.pipe(select((selectActualFlat))).subscribe(
      f => this.flat = { ...f });
  }

  onSubmit(formDirective: FormGroupDirective) {
    if (this.BillForm.valid) {
      this.flatService.addBill(this.BillForm.value).subscribe(
        bill => {
          if (bill) {
           

            if (bill.type == BillType.Water) {
              this.updatedFlatBalance = {
                ...this.flatBalance,
                waterAmount: this.flatBalance.waterAmount + bill.amount
              }
            } else if (bill.type == BillType.Electric) {
              this.updatedFlatBalance = {
                ...this.flatBalance,
                electricalAmount: this.flatBalance.electricalAmount + bill.amount
              }
            } else if (bill.type == BillType.Heating) {
              this.updatedFlatBalance = {
                ...this.flatBalance,
                heatingAmount: this.flatBalance.heatingAmount + bill.amount
              }
            }
            bill.isPaid = false;
            this.flat.bills = this.flat.bills.filter(b => b.id != bill.id).concat(bill);

            this.success = true;
            formDirective.resetForm();
            this.BillForm.reset();


            console.log('UpdatedBalance: ', this.updatedFlatBalance)
            console.log('Balances:', this.flat.balances);
            this.flat.balances = this.flat.balances.filter(b => b.id != this.updatedFlatBalance.id).concat(this.updatedFlatBalance);
            console.log('2. Flat: ', this.flat);

            //this.store.dispatch(new FlatActions.ActualFlatUpdated(this.flat));

            this.flatService.updateFlatbalance(this.updatedFlatBalance.id, this.updatedFlatBalance).subscribe(res =>
              console.log('Result', res));
          }
        }
      );
    }
  }

  ngOnInit() {
    this.flatService.getFlatsInCondominium(this.conId).subscribe(
      res => {
        console.log('Flats:',res);
        this.flats = res;
      }
    );

    this.balances$.subscribe(balances => {
      if (balances && balances.length > 0) {

        this.flatBalance = { ...balances[0] };
        console.log('FlatBalance from DB:', this.flatBalance);
      }
    });

    this.BillForm = this.fb.group({
      id: [0, Validators.required],
      type: ['0', Validators.required],
      amount: ['', [Validators.required]],
      provider: this.fb.group({
        address: this.fb.group({
          postCode: ['', [Validators.required]],
          city: ['', [Validators.required]],
          street: ['', Validators.required],
          number: ['',[Validators.required]],
          floor: ['', [Validators.required]],
          door: ['', [Validators.required]],
        }),
        phone: ['', [Validators.required]],
        email: ['', [Validators.required]],
        accountNum: ['', [Validators.required]]
      }),
      userId: [''],
      destAddressId: [''],
      isPaid: [false],
      flatId: ['', [Validators.required]],
      billDate: this.fb.group({
        startDate: [new Date().toISOString().split('T')[0], [Validators.required]],
        payoffStart: [new Date().toISOString().split('T')[0], [Validators.required]],
        payoffEnd: [new Date().toISOString().split('T')[0], [Validators.required]],
        deadline: [new Date().toISOString().split('T')[0], [Validators.required]],
      })
    });
  }


}
