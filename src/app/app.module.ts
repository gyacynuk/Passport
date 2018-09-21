import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { FeedPageComponent } from './components/feed-page/feed-page.component';
import { OrganizationsPageComponent } from './components/organizations-page/organizations-page.component';
import { PeoplePageComponent } from './components/people-page/people-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { SearchResultsPageComponent } from './components/search-results-page/search-results-page.component';
import { EventDetailPageComponent } from './components/event-detail-page/event-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FeedPageComponent,
    OrganizationsPageComponent,
    PeoplePageComponent,
    ProfilePageComponent,
    SearchResultsPageComponent,
    EventDetailPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
