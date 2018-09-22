import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PassportEvent } from '../../models/event';
import { EventService } from '../../services/event-service.service';
import { PassportUser } from '../../models/user';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-event-detail-page',
  templateUrl: './event-detail-page.component.html',
  styleUrls: ['./event-detail-page.component.css']
})
export class EventDetailPageComponent implements OnInit {

    currentUser: PassportUser;

    eventID: number;
    event: PassportEvent;
    eventOrganizers: PassportUser[];
    eventAttendees: PassportUser[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
        private eventService: EventService,
        private userService: UserService
    ) { }

    ngOnInit() {
        // Fetch Event Details
        this.eventID = +this.route.snapshot.paramMap.get('id');
        this.eventService.getEventDetails(this.eventID).subscribe(
            event => {
                this.event = event;
            }
        );

        // Fetch Event Organizers
        this.eventService.getEventRelationships(this.eventID).subscribe(
            eventRelationship => {
                this.eventOrganizers = eventRelationship.organizers;
                this.eventAttendees = eventRelationship.registeredUsers;
            }
        );

        // FetchCurrentUser
        this.userService.getCurrentUser().subscribe(
            user => {
                this.currentUser = user;
            }
        );
    }

    // Back Button Functionality
    goBack(): void {
        this.location.back();
    }

    toggleRegistered() {
        this.event.currentUserRegistered = !this.event.currentUserRegistered;

        if (this.event.currentUserRegistered) {
            this.eventService.registerForEvent(this.eventID).subscribe(
                success => {
                    // Add user to attendees list on GUI
                    if (success) {
                        this.eventAttendees.push(this.currentUser);
                    }
                }
            );
        } else {
            this.eventService.unregisterForEvent(this.eventID).subscribe(
                success => {
                    // Remove user to attendees list on GUI
                    if (success) {
                        this.eventAttendees = this.eventAttendees.filter(user => user.id !== this.currentUser.id)
                    }
                }
            );
        }
    }

    openInMaps() {
        let address = this.eventService.splitLocation(this.event.location);
        let encodedAddress = encodeURIComponent(address[0]);
        if (address.length === 3) {
            encodedAddress = encodeURIComponent(address[1] + ' ' + address[2]);
        }
        
        window.open("https://www.google.com/maps/search/?api=1&query=" + encodedAddress);
    }

    viewProfile(user: PassportUser) {
        this.router.navigate(['users', user.id]);
    }

}
