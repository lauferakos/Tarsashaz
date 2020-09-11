/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { FirstLoginUserInfoComponent } from './first-login-user-info.component';

let component: FirstLoginUserInfoComponent;
let fixture: ComponentFixture<FirstLoginUserInfoComponent>;

describe('FirstLoginUserInfo component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FirstLoginUserInfoComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(FirstLoginUserInfoComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});