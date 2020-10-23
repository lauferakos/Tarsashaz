/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { FlatSummaryComponent } from './flat-summary.component';

let component: FlatSummaryComponent;
let fixture: ComponentFixture<FlatSummaryComponent>;

describe('FlatSummary component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FlatSummaryComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(FlatSummaryComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});