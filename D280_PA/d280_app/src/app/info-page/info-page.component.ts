import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent {
  @Input() pages = [];

  constructor() {}

  ngOnInit() {}
}
