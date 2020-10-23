/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { BillChartComponent } from './bill-chart.component';

let component: BillChartComponent;
let fixture: ComponentFixture<BillChartComponent>;

describe('BillChart component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BillChartComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(BillChartComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});