/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AnnouncementListComponent } from './announcement-list.component';

let component: AnnouncementListComponent;
let fixture: ComponentFixture<AnnouncementListComponent>;

describe('AnnouncementList component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AnnouncementListComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AnnouncementListComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});