import { Component, OnInit } from '@angular/core';
import {MainStorageService} from '../shared/services/main-storage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public appTitle: string;
  public navElements: Array<any>;

  constructor(
    private mainStorage: MainStorageService,
  ) { }

  ngOnInit(): void {
    this.getNavigationElements();
    this.getAppTitle();
  }

  getNavigationElements() {
    console.log('>>> getNavigationElements()');
    this.navElements = this.mainStorage.getNavigationElements();
    console.log(this.navElements);
  }

  getAppTitle() {
    this.appTitle = this.mainStorage.getAppTitle();
  }

  setChosen(index) {
    for (const element of this.navElements) {
      element.chosen = false;
    }

    if (index !== 0) {
      this.navElements[index].chosen = true;
    }
  }
}
