/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { FlatBalanceComponent } from './flat-balance.component';

let component: FlatBalanceComponent;
let fixture: ComponentFixture<FlatBalanceComponent>;

describe('FlatBalance component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FlatBalanceComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(FlatBalanceComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});