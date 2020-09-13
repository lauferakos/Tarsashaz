/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AddFlatComponent } from './add-flat.component';

let component: AddFlatComponent;
let fixture: ComponentFixture<AddFlatComponent>;

describe('AddFlat component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddFlatComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AddFlatComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});