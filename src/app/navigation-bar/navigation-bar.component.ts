import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { filter, map, mergeMap } from 'rxjs/operators';
import { GlobalService } from '../global-service.service';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.css'],
    animations: [
        trigger('riseUp', [
            transition(':enter', [
                style({ height: '0px' }),
                animate('200ms ease', style({
                    height: '*'
                }))
            ]),
            transition(':leave', [
                style({ height: '*' }),
                animate('200ms ease', style({
                    height: '0px'
                }))
            ])
        ]),
        trigger('overlaySlide', [
            transition(':enter', [
                style({ left: '100%' }),
                animate('400ms ease-out', style({
                    left: '0'
                }))
            ]),
            transition(':leave', [
                style({ left: '0' }),
                animate('400ms ease-in', style({
                    left: '100%'
                }))
            ])
        ]),
        trigger('expandable', [
            transition(':enter', [
                style({ 
                    height: '0px',
                    paddingTop: '0px',
                    paddingBottom: '0px'
                }),
                animate('200ms ease', style({
                    height: '*',
                    paddingTop: '*',
                    paddingBottom: '*'
                }))
            ]),
            transition(':leave', [
                style({ 
                    height: '*',
                    paddingTop: '*',
                    paddingBottom: '*'
                }),
                animate('200ms ease', style({
                    height: '0px',
                    paddingTop: '0px',
                    paddingBottom: '0px'
                }))
            ])
        ])
    ]
})
export class NavigationBarComponent implements OnInit {

    pageButtons = [
        {name: 'Feed', link: '/feed'},
        {name: 'Organizations', link: '/organizations'},
        {name: 'People', link: '/people'},
        {name: 'Profile', link: '/profile'}
    ];
    selectedPageIndex = 0;
    menuExpanded = false;

    searchOverlayVisible = false;
    searchText = '';

    constructor( 
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title
    ) { }

    ngOnInit() {
        // Dynamically set page title
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => this.activatedRoute),
                map((route) => {
                    while (route.firstChild) route = route.firstChild;
                    return route;
                }),
                filter((route) => route.outlet === 'primary'),
                mergeMap((route) => route.data)
            )
            .subscribe((event) => {
                this.titleService.setTitle('Passport - ' + event['title']);
                this.selectedPageIndex = this.pageButtons.findIndex((page) => page.name === event['title']);
            });
    }

    searchSubmit() {
        this.router.navigate(['/search'], { queryParams: {q: this.searchText} })
        this.toggleSearchOverlay(false);
        this.toggleMenuState(false);
    }

    toggleMenuState(setState? : boolean) {
        if (setState !== undefined) {
            this.menuExpanded = setState;
        } else {
            this.menuExpanded = !this.menuExpanded;
        }
    }

    toggleSearchOverlay(setState? : boolean) {
        if (setState !== undefined) {
            this.searchOverlayVisible = setState;
        } else {
            this.searchOverlayVisible = !this.searchOverlayVisible;
        }

        // On Open
        if (this.searchOverlayVisible) {
            // Focus on search bar
            setTimeout(() => {
                document.getElementById('search-bar').focus();
            }, 50);
        }
        // On Close
        else {
            this.searchText = '';
            
            // Focus on search button
            setTimeout(() => {
                document.getElementById('search-bar').focus();
            }, 50);
        }
    }

    navigateTo(pageIndex: number) {
        this.selectedPageIndex = pageIndex;
        this.toggleMenuState(false);
    }

}
