/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { BillsListComponent } from './bills-list.component';

let component: BillsListComponent;
let fixture: ComponentFixture<BillsListComponent>;

describe('BillsList component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BillsListComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(BillsListComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});