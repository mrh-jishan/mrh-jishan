import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'rh-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  @Output() ExploreMe = new EventEmitter();
  startTadaAnimation = false;
  constructor(private router: Router) { }

  ngOnInit() {
    setInterval(() => {
      this.startTadaAnimation = !this.startTadaAnimation;
    }, 3000);
  }

  onExploreMeClick() {
    this.ExploreMe.emit();
    this.router.navigateByUrl('/');
  }

}
