/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PayPalCheckOutComponent } from './pay-pal-check-out.component';

let component: PayPalCheckOutComponent;
let fixture: ComponentFixture<PayPalCheckOutComponent>;

describe('PayPalCheckOut component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PayPalCheckOutComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PayPalCheckOutComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});