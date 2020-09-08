/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SignOutComponent } from './sign-out.component';

let component: SignOutComponent;
let fixture: ComponentFixture<SignOutComponent>;

describe('SignOut component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SignOutComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SignOutComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});