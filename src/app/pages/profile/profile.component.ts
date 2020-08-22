import { Component, OnInit } from '@angular/core';
import {animateChild, query, transition, trigger} from "@angular/animations";

@Component({
  selector: 'rh-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    trigger('animate', [
      transition('* => *', [
        query(':leave, :enter', [animateChild()], {
          optional: true
        })
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit {
  showNavigationMenu = false;
  constructor() { }

  ngOnInit(): void {
  }

}
