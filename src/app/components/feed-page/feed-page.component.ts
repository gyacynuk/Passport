import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event-service.service';
@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css']
})
export class FeedPageComponent implements OnInit {

    readonly DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    readonly MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    featuredEvents = [
        {name: 'TU20 Cup', organization: 'TU20', asset: 'assets/images/feature-2.jpg'},
        {name: 'TechTO', organization: 'Toronto',  asset: 'assets/images/feature-3.jpg'},
        {name: 'Hack Western 4', organization: 'University of Western Ontario', asset: 'assets/images/feature-1.png'},
    ];  

    upcomingEvents = [
        // {name: 'Careers, Chats and Snacks', organization: 'TU20', date: new Date('September 28, 2018'), price: '0', registered: false,
        //     tags: [
        //         {name: 'Almost Sold Out', important: true}, 
        //         {name: 'You Have Friends Attending', important: false}, 
        //         {name: 'You Liked This Speaker Previously', important: false}, 
        //     ]
        // },
        // {name: 'Griffin\'s Lit Dorm Party', organization: 'Campus One', date: new Date('September 22, 2018'), price: '50.00', registered: false,
        //     tags: [
        //         {name: 'Selling Out Quicly', important: true}, 
        //         {name: 'This Will be Sooooo Lit', important: false}, 
        //         {name: 'BYOB', important: false}, 
        //     ]
        // },
    ]

  
      
    constructor(private eventService : EventService) { }

    ngOnInit() {
        // Fetch Events
        this.eventService.getUpcomingEvents().subscribe(
            events => {
                console.log(events[0])
                this.upcomingEvents = events;
            }
        );
    }

    toggleRegistered(event) {
        event.registered = ! event.registered;
    }

}
