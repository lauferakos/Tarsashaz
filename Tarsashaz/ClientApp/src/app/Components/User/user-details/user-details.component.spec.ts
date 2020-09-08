/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { UserDetailsComponent } from './user-details.component';

let component: UserDetailsComponent;
let fixture: ComponentFixture<UserDetailsComponent>;

describe('UserDetails component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UserDetailsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(UserDetailsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});