import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'rh-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router) {
  }

  contactProfile = {
    profile: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/rhsn1/',
        iconUrl: './assets/icons/linkedin.svg'
      }
    ],
    work: [
      {
        name: 'GitHub',
        url: 'https://github.com/mrh-jishan',
        iconUrl: './assets/icons/github.svg'
      },
    ]
  };

  email = {
    name: 'Email',
    url: 'mailto:robiul.hassan12102@gmail.com',
    iconUrl: './assets/icons/email.svg'
  };

  telegram = {
    name: 'Telegram',
    url: 'https://t.me/rforruby',
    iconUrl: './assets/icons/telegram.png'
  };

  ngOnInit() {
  }

  onBackClick() {
    this.router.navigateByUrl('/');
  }

}
