import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  ChosenLogo = 'Menu';

  navItems = [{
    itemLabel: 'Rooms & Suites',
    itemLink: '#'
  }, {
    itemLabel: 'Spa & Health',
    itemLink: '#'
  }, {
    itemLabel: 'Dining',
    itemLink: '#'
  }, {
    itemLabel: 'Events',
    itemLink: '#'
  }, {
    itemLabel: 'Weddings',
    itemLink: '#'
  }, {
    itemLabel: 'Explore',
    itemLink: '#'
  }, {
    itemLabel: 'Offers',
    itemLink: '#'
  }];

  btnLabel = 'Book Now';

  constructor() { }

  ngOnInit() {
  }

}
