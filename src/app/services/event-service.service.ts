import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PassportEvent, ServerEvent, PassportEventRelationship } from '../models/event';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    readonly BASE_URL = 'http://localhost:53639/';
    readonly EVENTS_ENDPOINT = 'api/Event/';
    readonly EVENT_RELATIONSHIPS_ENDPOINT = 'api/Event/GetEventRelationships';

    readonly httpOptions = {
        headers: new HttpHeaders({}),
        withCredentials: true
    };

    constructor(private http: HttpClient) { }

    splitLocation(location: string) {
        let tokens = location.split(', ');
        if (tokens.length != 4) {
            return [location];
        }
        return [tokens[0] + ',', tokens[1] + ',', tokens[2] + ', ' + tokens[3]];
    }

    getUpcomingEvents(): Observable<PassportEvent[]> {
        let URL = this.BASE_URL + this.EVENTS_ENDPOINT + 'UpcomingEvents';
        console.log(URL)
        return this.http.get<ServerEvent[]>(URL, this.httpOptions)
        .pipe(
            map(events => events.map(event => PassportEvent.create(event))),
            tap(e => {console.log(e)})
        )
    }

    getEventDetails(eventID: number): Observable<PassportEvent> {
        let URL = this.BASE_URL + this.EVENTS_ENDPOINT + 'Events/' + eventID;
        return this.http.get<ServerEvent[]>(URL, this.httpOptions)
        .pipe(
            map(events => PassportEvent.create(events[0]))
        )
    }

    getEventRelationships(eventID: number) {
        let URL = this.BASE_URL + this.EVENT_RELATIONSHIPS_ENDPOINT + '/' + eventID;
        return this.http.get<PassportEventRelationship>(URL, this.httpOptions);
    }

    registerForEvent(eventID: number) {
        let URL = this.BASE_URL + 'api/Event/RegisterUserForEvent/' + eventID;
        return this.http.post(URL, null, this.httpOptions);
    }

    unregisterForEvent(eventID: number) {
        let URL = this.BASE_URL + 'api/Event/UnregisterUserForEvent/' + eventID;
        return this.http.post(URL, null, this.httpOptions);
    }
}
