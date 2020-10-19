/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { UserBalanceComponent } from './user-balance.component';

let component: UserBalanceComponent;
let fixture: ComponentFixture<UserBalanceComponent>;

describe('UserBalance component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UserBalanceComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(UserBalanceComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});