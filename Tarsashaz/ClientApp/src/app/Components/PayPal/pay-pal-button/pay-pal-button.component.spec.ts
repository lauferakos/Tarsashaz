/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PayPalButtonComponent } from './pay-pal-button.component';

let component: PayPalButtonComponent;
let fixture: ComponentFixture<PayPalButtonComponent>;

describe('PayPalButton component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PayPalButtonComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PayPalButtonComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});