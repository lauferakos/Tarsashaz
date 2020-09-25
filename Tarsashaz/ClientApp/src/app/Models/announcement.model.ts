import { Range } from '../Enums/Range';
import { Priority } from '../Enums/Priority';

export interface Announcement {
  id: number;
  senderId: number;
  senderName: string;
  range: Range;
  date: Date;
  priority: Priority;
  text: string;
}
