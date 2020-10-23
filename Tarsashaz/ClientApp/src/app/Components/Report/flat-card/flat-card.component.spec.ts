/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { FlatCardComponent } from './flat-card.component';

let component: FlatCardComponent;
let fixture: ComponentFixture<FlatCardComponent>;

describe('FlatCard component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FlatCardComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(FlatCardComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});