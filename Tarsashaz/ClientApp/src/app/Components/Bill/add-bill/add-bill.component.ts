import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { FlatService } from '../../../Services/flat.service';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectConId } from '../../../Store/Selectors/condominium.selectors';
import { Flat } from '../../../Models/flat.model';

@Component({
    selector: 'app-add-bill',
    templateUrl: './add-bill.component.html',
    styleUrls: ['./add-bill.component.css']
})
/** AddBill component*/
export class AddBillComponent implements OnInit {
  BillForm: FormGroup;
  flats: Flat[];
  conId: number;
  success: boolean = false;
  /** AddBill ctor */
  constructor(private fb: FormBuilder, private flatService: FlatService, private store: Store<AppState>) {
    this.store.pipe(select(selectConId)).subscribe(
      id => this.conId = id
    );
  }

  onSubmit(formDirective: FormGroupDirective) {
    if (this.BillForm.valid)
      this.flatService.addBill(this.BillForm.value).subscribe(
        bill => {
          if (bill) {
            console.log(bill);
            this.success = true;
            formDirective.resetForm();
            this.BillForm.reset();
          }
        }
      );
  }

  ngOnInit() {
    this.flatService.getFlatsInCondominium(this.conId).subscribe(
      res => {
        console.log('Flats:',res);
        this.flats = res;
      }
    );

     
    this.BillForm = this.fb.group({
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
