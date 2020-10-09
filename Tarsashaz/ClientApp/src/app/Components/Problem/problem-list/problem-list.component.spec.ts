/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ProblemListComponent } from './problem-list.component';

let component: ProblemListComponent;
let fixture: ComponentFixture<ProblemListComponent>;

describe('ProblemList component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ProblemListComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ProblemListComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});