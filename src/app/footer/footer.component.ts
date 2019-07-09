import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ChosenLogo = 'Footer';

  navItems = [{
    itemLabel: 'Sitemap',
    itemLink: '#'
  }, {
    itemLabel: 'Global Privacy Policy',
    itemLink: '#'
  }, {
    itemLabel: 'Cookies Statement',
    itemLink: '#'
  }, {
    itemLabel: 'Site Useage Agreement',
    itemLink: '#'
  }, {
    itemLabel: 'AdChoices',
    itemLink: '#',
    itemIcon: true
  }, {
    itemLabel: '© 2018 Hilton',
    itemLink: '#'
  }];

  constructor() { }

  ngOnInit() {
  }

}
