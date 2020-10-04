import { Range } from '../Enums/Range';
import { Priority } from '../Enums/Priority';
import { User } from './user.model';

export interface Announcement {
  id: number;
  senderId: number;
  sender: User;
  range: Range;
  date: Date;
  priority: Priority;
  text: string;
}
