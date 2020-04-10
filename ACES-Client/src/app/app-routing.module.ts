import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from './content/overview/overview.component';
import {MapComponent} from './content/map/map.component';
import {SearchComponent} from './content/search/search.component';


const routes: Routes = [
  { path: 'overview', component: OverviewComponent},
  { path: 'map', component: MapComponent},
  { path: 'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
