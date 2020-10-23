import { Component, Input } from '@angular/core';
import { Flat } from '../../../Models/flat.model';

@Component({
    selector: 'app-flat-card',
    templateUrl: './flat-card.component.html',
    styleUrls: ['./flat-card.component.css']
})
/** FlatCard component*/
export class FlatCardComponent {
/** FlatCard ctor */

  @Input() flat: Flat;
    constructor() {

    }
}
