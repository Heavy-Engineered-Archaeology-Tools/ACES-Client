import { Injectable } from '@angular/core';
import {OverviewComponent} from '../../content/overview/overview.component';
import {HomeComponent} from '../../content/home/home.component';
import {MapComponent} from '../../content/map/map.component';
import {SearchComponent} from '../../content/search/search.component';

@Injectable({
  providedIn: 'root'
})
export class MainStorageService {

  constructor() { }

  private title = 'ACES';

  private navigation = [
    { name: 'home',
      path: '',
      component: HomeComponent,
      chosen: false
    },
    { name: 'overview',
      path: 'overview',
      component: OverviewComponent,
      chosen: false
    },
    { name: 'map',
      path: 'map',
      component: MapComponent,
      chosen: false
    },
    { name: 'search',
      path: 'search',
      component: SearchComponent,
      chosen: false
    },
  ];

  getAppTitle() {
    return this.title;
  }

  getNavigationElements() {
    return this.navigation;
  }
}
