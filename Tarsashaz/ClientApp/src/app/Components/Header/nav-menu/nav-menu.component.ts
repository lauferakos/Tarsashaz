import { Component, OnInit, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import { selectActualUser } from '../../../Store/Selectors/user.selectors';
import { UserService } from '../../../Services/user.service';
import { Router } from '@angular/router';
import { selectFlats } from '../../../Store/Selectors/flat.selectors';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
  actualUser$ = this.store.pipe(select(selectActualUser));
  flats$ = this.store.pipe(select(selectFlats));
  isLoggedIn: boolean;
  constructor(private store: Store<AppState>, private userService: UserService, private router: Router) {

  }

  ngOnInit() {
    this.isLoggedIn = this.userService.isAuthenticated();
  }

  logOut() {
    this.isLoggedIn = false;
    this.router.navigate(['/logout']);
  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
