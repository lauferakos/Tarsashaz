/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ProblemReportComponent } from './problem-report.component';

let component: ProblemReportComponent;
let fixture: ComponentFixture<ProblemReportComponent>;

describe('ProblemReport component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ProblemReportComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ProblemReportComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});