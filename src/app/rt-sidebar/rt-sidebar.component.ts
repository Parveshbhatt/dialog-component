import { Component } from '@angular/core';

import sideItems from '../_files/sideItems.json';

@Component({
  selector: 'app-rt-sidebar',
  templateUrl: './rt-sidebar.component.html',
  styleUrls: ['./rt-sidebar.component.scss']
})
export class RtSidebarComponent {
  /* 
    Property to handle the display of sidebar
  */
  toggleStatus: boolean = false;
  /* 
    Property to handle the display of children of nav-item
  */
  dropdownShow: boolean = false;
  /* 
    Property to handle the active status of nav-item
  */
  activeItem: boolean = false;
  /* 
    Property to store the nav-items
  */
  sidenavData = [];
  /* 
    Property to store index of clicked item or active item
  */
  clickIndex: number = 0;

  constructor() {
    for (const key in sideItems) {
      this.sidenavData.push({ ...sideItems[key] })
    }
  }

  onMenuClick() {
    this.toggleStatus = !this.toggleStatus

    if (!this.toggleStatus) {
      this.dropdownShow = false;
    }
  }

  onDropdownClick(item: object) {
    this.clickIndex = item['index'];
    this.dropdownShow = !this.dropdownShow;
    this.activeItem = !this.activeItem;
    if (!this.toggleStatus) {
      this.dropdownShow = false;
    }
  }
}
