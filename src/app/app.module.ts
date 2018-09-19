import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { OrganizationsPageComponent } from './organizations-page/organizations-page.component';
import { PeoplePageComponent } from './people-page/people-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SearchResultsPageComponent } from './search-results-page/search-results-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FeedPageComponent,
    OrganizationsPageComponent,
    PeoplePageComponent,
    ProfilePageComponent,
    SearchResultsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
