/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { BillDetailsComponent } from './bill-details.component';

let component: BillDetailsComponent;
let fixture: ComponentFixture<BillDetailsComponent>;

describe('BillDetails component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BillDetailsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(BillDetailsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});