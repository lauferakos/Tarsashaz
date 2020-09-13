import { Injectable } from '@angular/core';
import { Announcement } from '../Models/announcement.model';
import { Range } from '../Enums/Range';
import { Priority } from '../Enums/Priority';

@Injectable()
export class AnnouncementService {
    constructor() {

  }

  getAnnouncements(): Announcement[]{
    return [
      {
        senderId: 1,
        senderName: "Laufer Ákos",
        range: Range.resident,
        date: new Date(),
        priority: Priority.low,
        text: "Tisztelt Lakók! \
               A jövő héten felújítási munkálatok zajlanak a földszinten. Az okozott kellemetlenségekért elnézésüket kérjük"
      },
      {
        senderId: 1,
        senderName: "Laufer Ákos",
        range: Range.resident,
        date: new Date(),
        priority: Priority.medium,
        text: "Tisztelt Lakók! \
               A héten lomtalanítás lesz, aki igényli,használhatja a közös tárolót, pakolás céljából. "
      },
      {
        senderId: 1,
        senderName: "Laufer Ákos",
        range: Range.resident,
        date: new Date(),
        priority: Priority.high,
        text: "Tisztelt Lakók! \
               A jövő hét kedden lakógyűlés lesz, a földszinti irodában. Mindenki jelenlétére számítunk!"
      },

    ];
  }
}
