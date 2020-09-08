/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { FirstLoginComponent } from './first-login.component';

let component: FirstLoginComponent;
let fixture: ComponentFixture<FirstLoginComponent>;

describe('FirstLogin component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FirstLoginComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(FirstLoginComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});