import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PassportEvent } from '../../models/event';
@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css']
})
export class FeedPageComponent implements OnInit {

    featuredEvents = [
        {name: 'TU20 Cup', organization: 'TU20', asset: 'assets/images/feature-2.jpg'},
        {name: 'TechTO', organization: 'Toronto',  asset: 'assets/images/feature-3.jpg'},
        {name: 'Hack Western 4', organization: 'University of Western Ontario', asset: 'assets/images/feature-1.png'},
    ];  

    upcomingEvents: PassportEvent[];

  
      
    constructor(private router: Router, private eventService : EventService) { }

    ngOnInit() {
        // Fetch Events
        this.eventService.getUpcomingEvents().subscribe(
            events => {
                this.upcomingEvents = events;
            }
        );
    }

    toggleRegistered(event: PassportEvent) {
        event.currentUserRegistered = ! event.currentUserRegistered;

        if (event.currentUserRegistered) {
            this.eventService.registerForEvent(event.id).subscribe(
                success => {
                    // TODO: Handle
                }
            );
        } else {
            this.eventService.unregisterForEvent(event.id).subscribe(
                success => {
                    // TODO: Handle
                }
            );
        }

    }

    learnMore(event) {
        this.router.navigate(['events', event.id]);
    }

}
