/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AddBillComponent } from './add-bill.component';

let component: AddBillComponent;
let fixture: ComponentFixture<AddBillComponent>;

describe('AddBill component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddBillComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AddBillComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});