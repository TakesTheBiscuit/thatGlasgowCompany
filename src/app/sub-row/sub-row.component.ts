import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-row',
  templateUrl: './sub-row.component.html',
  styleUrls: ['./sub-row.component.scss']
})
export class SubRowComponent implements OnInit {

  btnLabel = 'Click Here';

  constructor() { }

  ngOnInit() {
  }

}
