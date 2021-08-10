import { Component, OnInit } from '@angular/core';
import { ICategory } from './category';
import { IUser } from './user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  siteTitle: string = 'Soul Talk';
  siteTitleSupText: string = 'MSN';
  status: boolean = false;
  sidebarClasses: string = '';
  displayValue: string = 'none';
  searchQuery:string="";
  categories: ICategory[] = [
    { name: 'Travel' },
    { name: 'Style' },
    { name: 'Photography' },
    { name: 'Food & Drinks' },
    { name: 'Culture' },
  ];
  author: IUser = {
    name: 'Muhammad Sohail Nazar',
    profileImage: '../../../assets/images/sohailnazar.jpg',
    aboutMe:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  };
  
  constructor() {}

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.status = !this.status;
    this.status
      ? (this.sidebarClasses = 'animated fadeInLeft')
      : (this.sidebarClasses = 'animated fadeOutLeft');
    this.returnDisplayValue();
  }

  returnDisplayValue() {
    let _this = this;
    this.status
      ? (this.displayValue = 'block')
      : setTimeout(function () {
          _this.displayValue = 'none';
        }, 1000);
  }
  
}
