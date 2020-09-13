/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { FlatListComponent } from './flat-list.component';

let component: FlatListComponent;
let fixture: ComponentFixture<FlatListComponent>;

describe('FlatList component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FlatListComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(FlatListComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});