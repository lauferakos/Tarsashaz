/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { FirstLoginFormComponent } from './first-login-form.component';

let component: FirstLoginFormComponent;
let fixture: ComponentFixture<FirstLoginFormComponent>;

describe('FirstLoginForm component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FirstLoginFormComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(FirstLoginFormComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});