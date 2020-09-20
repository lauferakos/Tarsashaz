/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { BarChartComponent } from './bar-chart.component';

let component: BarChartComponent;
let fixture: ComponentFixture<BarChartComponent>;

describe('BarChart component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BarChartComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(BarChartComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});