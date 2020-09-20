/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { DoughnutChartComponent } from './doughnut-chart.component';

let component: DoughnutChartComponent;
let fixture: ComponentFixture<DoughnutChartComponent>;

describe('DoughnutChart component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DoughnutChartComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(DoughnutChartComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});