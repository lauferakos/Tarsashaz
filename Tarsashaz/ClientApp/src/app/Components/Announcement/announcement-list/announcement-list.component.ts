import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../../../Services/announcement.service';
import { Announcement } from '../../../Models/announcement.model';

@Component({
    selector: 'app-announcement-list',
    templateUrl: './announcement-list.component.html',
    styleUrls: ['./announcement-list.component.css']
})
/** AnnouncementList component*/
export class AnnouncementListComponent implements OnInit{
/** AnnouncementList ctor */

  announcements: Announcement[];
  constructor(private announcementService: AnnouncementService) {

  }

  ngOnInit() {
    this.announcements = this.announcementService.getAnnouncements();
  }
}
