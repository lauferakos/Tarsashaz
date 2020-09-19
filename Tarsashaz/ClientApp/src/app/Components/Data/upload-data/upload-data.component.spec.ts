/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { UploadDataComponent } from './upload-data.component';

let component: UploadDataComponent;
let fixture: ComponentFixture<UploadDataComponent>;

describe('UploadData component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UploadDataComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(UploadDataComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});