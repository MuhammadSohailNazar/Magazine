import { Component, OnInit } from '@angular/core';
import { ISocialIcon } from '../header/social';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
})
export class SocialComponent implements OnInit {
  socialLinks: ISocialIcon[] = [
    { link: 'https://www.facebook.com/lv.to.hate.you', icon: 'icon-twitter' },
    { link: 'https://www.facebook.com/lv.to.hate.you', icon: 'icon-facebook' },
    {
      link: 'https://www.instagram.com/muahmmadsohailnazar/',
      icon: 'icon-instagram',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
