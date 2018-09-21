import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-event-detail-page',
  templateUrl: './event-detail-page.component.html',
  styleUrls: ['./event-detail-page.component.css']
})
export class EventDetailPageComponent implements OnInit {

    eventID = null;

    constructor(
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {
        // Fetch Event ID
        this.eventID = this.route.snapshot.paramMap.get('id');
    }

    // Back Button Functionality
    goBack(): void {
        this.location.back();
    }

    toggleRegistered() {}

    openInMaps(address: string) {
        let encodedAddress = encodeURIComponent(address);
        window.open("https://www.google.com/maps/search/?api=1&query=" + encodedAddress);
    }

}
