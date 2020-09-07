/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SignInComponent } from './sign-in.component';

let component: SignInComponent;
let fixture: ComponentFixture<SignInComponent>;

describe('SignIn component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SignInComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SignInComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});