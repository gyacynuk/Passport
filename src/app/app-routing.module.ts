import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedPageComponent } from './components/feed-page/feed-page.component';
import { OrganizationsPageComponent } from './components/organizations-page/organizations-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { PeoplePageComponent } from './components/people-page/people-page.component';
import { SearchResultsPageComponent } from './components/search-results-page/search-results-page.component';
import { EventDetailPageComponent } from './components/event-detail-page/event-detail-page.component';
import { ProfileDetailPageComponent } from './components/profile-detail-page/profile-detail-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/feed', pathMatch: 'full' },  // default path
    { path: 'feed', component: FeedPageComponent, data: { title: 'Feed' } },
    { path: 'events/:id', component: EventDetailPageComponent, data: { title: 'Feed' } },
    { path: 'organizations', component: OrganizationsPageComponent, data: { title: 'Organizations' }  },
    { path: 'people', component: PeoplePageComponent, data: { title: 'People' }  },
    { path: 'profile', component: ProfilePageComponent, data: { title: 'Profile' }  },
    { path: 'users/:id', component: ProfileDetailPageComponent, data: { title: 'User' }  },
    { path: 'search', component: SearchResultsPageComponent, data: { title: 'Search Results' }  },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }
