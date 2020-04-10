import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './content/home/home.component';
import { OverviewComponent } from './content/overview/overview.component';
import { MapComponent } from './content/map/map.component';
import { SearchComponent } from './content/search/search.component';
import { AdministrationComponent } from './content/administration/administration.component';
import { SettingsComponent } from './content/settings/settings.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DxNavBarModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    MapComponent,
    SearchComponent,
    AdministrationComponent,
    SettingsComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxNavBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
