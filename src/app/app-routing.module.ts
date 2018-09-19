import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { OrganizationsPageComponent } from './organizations-page/organizations-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PeoplePageComponent } from './people-page/people-page.component';
import { SearchResultsPageComponent } from './search-results-page/search-results-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/feed', pathMatch: 'full' },  // default path
    { path: 'feed', component: FeedPageComponent, data: { title: 'Feed' } },
    { path: 'organizations', component: OrganizationsPageComponent, data: { title: 'Organizations' }  },
    { path: 'people', component: PeoplePageComponent, data: { title: 'People' }  },
    { path: 'profile', component: ProfilePageComponent, data: { title: 'Profile' }  },
    { path: 'search', component: SearchResultsPageComponent, data: { title: 'Search Results' }  },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }
