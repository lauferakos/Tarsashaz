import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import { selectActualUser } from '../../../Store/Selectors/user.selectors';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  actualUser$ = this.store.pipe(select(selectActualUser));

  constructor(private store: Store<AppState>, private userService: UserService) {
    
  }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
