import { Component } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: 'page-header.component.html',
  styleUrls: ['page-header.component.scss']
})

export class PageHeaderComponent {

  public pageTitle: string;

  public constructor() {

  }

  ngOnInit() {
    this.pageTitle = 'Grade Tracker';
  }

}


