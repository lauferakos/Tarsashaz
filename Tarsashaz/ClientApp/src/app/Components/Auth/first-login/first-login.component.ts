import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import { selectActualUser } from '../../../Store/Selectors/user.selectors';
import { Router } from '@angular/router';
import { UserService } from '../../../Services/user.service';

@Component({
    selector: 'app-first-login',
    templateUrl: './first-login.component.html',
    styleUrls: ['./first-login.component.css']
})
/** FirstLogin component*/
export class FirstLoginComponent {

  constructor() {

  }
}
