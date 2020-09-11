/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { FlatDetailsComponent } from './flat-details.component';

let component: FlatDetailsComponent;
let fixture: ComponentFixture<FlatDetailsComponent>;

describe('FlatDetails component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FlatDetailsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(FlatDetailsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});